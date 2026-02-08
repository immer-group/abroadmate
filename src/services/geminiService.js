import { universities, getAllUniversities, getUniversitiesByCountry } from '../data/universities';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

// Get API key from environment variable
// Vite requires VITE_ prefix for frontend env vars
const getApiKey = () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error('Gemini API key not found. Please rename GEMINI_API_KEY to VITE_GEMINI_API_KEY in your .env file (Vite requires VITE_ prefix).');
    }
    return apiKey;
};

export const extractTextFromFile = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target.result;
            // For PDF and other binary formats, we'll send to Gemini as base64
            if (file.type === 'application/pdf') {
                resolve({ type: 'base64', data: text.split(',')[1], mimeType: file.type });
            } else {
                resolve({ type: 'text', data: text });
            }
        };

        reader.onerror = () => reject(new Error('Failed to read file'));

        if (file.type === 'application/pdf') {
            reader.readAsDataURL(file);
        } else {
            reader.readAsText(file);
        }
    });
};

export const analyzeCV = async (fileContent, countryId = null) => {
    const apiKey = getApiKey();

    // Get universities based on selected country or all
    const targetUniversities = countryId
        ? getUniversitiesByCountry(countryId)
        : getAllUniversities();

    const universitiesContext = targetUniversities.map(uni => ({
        id: uni.id,
        name: uni.name,
        shortName: uni.shortName,
        type: uni.type,
        location: uni.location,
        programs: uni.programs.map(p => `${p.name} (${p.type})`).join(', '),
        strengths: uni.strengths.join(', ')
    }));

    const countryContext = countryId
        ? `Focus on universities in the selected country.`
        : `Consider universities from all available countries: Germany, USA, UK, Thailand, Japan, Australia, Canada, Netherlands.`;

    const systemPrompt = `You are an expert university admissions counselor specializing in international education. 
Analyze the provided CV/resume and match the candidate with the most suitable universities and programs.
${countryContext}

Here are the available universities:
${JSON.stringify(universitiesContext, null, 2)}

Based on the CV, provide:
1. An analysis of the candidate's profile (education, skills, experience, interests)
2. Top 3-5 recommended universities with match scores (0-100)
3. For each university, explain why it's a good match and suggest specific programs

Respond in this exact JSON format:
{
  "profile": {
    "education": "summary of educational background",
    "skills": ["skill1", "skill2"],
    "experience": "summary of work/research experience",
    "interests": ["interest1", "interest2"],
    "languages": ["language1: level", "language2: level"],
    "strengths": "overall candidate strengths"
  },
  "matches": [
    {
      "universityId": "de-1",
      "score": 85,
      "reason": "Why this university is a good match",
      "recommendedPrograms": ["Program Name 1", "Program Name 2"]
    }
  ],
  "advice": "General advice for the candidate's application journey"
}`;

    let requestBody;

    if (fileContent.type === 'base64') {
        // For PDF files, send as inline data
        requestBody = {
            contents: [{
                parts: [
                    { text: systemPrompt },
                    { text: "Please analyze this CV/resume and provide university recommendations:" },
                    {
                        inlineData: {
                            mimeType: fileContent.mimeType,
                            data: fileContent.data
                        }
                    }
                ]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 4096,
                responseMimeType: 'application/json',
            }
        };
    } else {
        // For text files
        requestBody = {
            contents: [{
                parts: [
                    { text: systemPrompt },
                    { text: `Please analyze this CV/resume and provide university recommendations:\n\n${fileContent.data}` }
                ]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 4096,
                responseMimeType: 'application/json',
            }
        };
    }

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to analyze CV');
        }

        const data = await response.json();

        // Extract the text response
        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!textResponse) {
            throw new Error('No response from AI');
        }

        // Parse the JSON from the response
        // The response might have markdown code blocks, so we need to clean it
        let jsonStr = textResponse.trim();

        // Remove markdown code blocks if present (handles ```json, ```JSON, ``` etc.)
        // First try to find content between code blocks
        const codeBlockMatch = jsonStr.match(/```(?:json|JSON)?\s*\n?([\s\S]*?)\n?```/);
        if (codeBlockMatch) {
            jsonStr = codeBlockMatch[1].trim();
        } else {
            // If no code blocks found, try to extract JSON object directly
            const jsonObjectMatch = jsonStr.match(/(\{[\s\S]*\})/);
            if (jsonObjectMatch) {
                jsonStr = jsonObjectMatch[1];
            }
        }

        // Additional cleanup - remove any leading/trailing backticks
        jsonStr = jsonStr.replace(/^`+|`+$/g, '').trim();

        let result;
        try {
            result = JSON.parse(jsonStr);
        } catch (parseError) {
            console.error('JSON Parse Error. Raw response:', textResponse);
            console.error('Cleaned JSON string:', jsonStr);
            throw new Error('Failed to parse AI response. Please try again.');
        }

        // Enrich the matches with full university data
        const enrichedMatches = result.matches.map(match => {
            const university = targetUniversities.find(u => u.id === match.universityId);
            if (!university) return null;

            // Find matching programs from our database
            const matchedPrograms = university.programs.filter(p =>
                match.recommendedPrograms.some(rp =>
                    p.name.toLowerCase().includes(rp.toLowerCase()) ||
                    rp.toLowerCase().includes(p.name.toLowerCase())
                )
            );

            return {
                university,
                score: match.score,
                reason: match.reason,
                matchedPrograms: matchedPrograms.length > 0 ? matchedPrograms :
                    university.programs.slice(0, 2) // Fallback to first 2 programs
            };
        }).filter(Boolean);

        return {
            profile: result.profile,
            matches: enrichedMatches,
            advice: result.advice
        };

    } catch (error) {
        console.error('CV Analysis Error:', error);
        throw error;
    }
};

export default { extractTextFromFile, analyzeCV };

