// Multi-Country Universities Database
export const universities = {
    germany: [
        {
            id: 'de-1',
            name: "Technical University of Munich (TUM)",
            shortName: "TUM",
            type: "Technical University",
            location: "Munich, Bavaria",
            ranking: 1,
            website: "https://www.tum.de/en/",
            logo: "🏛️",
            programs: [
                { name: "Computer Science", language: "English/German", level: "BSc/MSc", type: "degree" },
                { name: "Data Science", language: "English", level: "MSc", type: "degree" },
                { name: "AI Summer School", language: "English", level: "Certificate", type: "summer" },
                { name: "Tech Internship Program", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                germanLevel: "B2-C1 for German programs",
                englishLevel: "TOEFL 88+ / IELTS 6.5+",
                gpa: "Good academic standing",
            },
            strengths: ["Engineering", "Technology", "AI/ML", "Entrepreneurship"],
            description: "Germany's top technical university, known for cutting-edge research."
        },
        {
            id: 'de-2',
            name: "Ludwig Maximilian University of Munich (LMU)",
            shortName: "LMU Munich",
            type: "Research University",
            location: "Munich, Bavaria",
            ranking: 2,
            website: "https://www.lmu.de/en/",
            logo: "🎓",
            programs: [
                { name: "Economics", language: "German/English", level: "BSc/MSc", type: "degree" },
                { name: "Data Science", language: "English", level: "MSc", type: "degree" },
                { name: "German Language Summer", language: "German", level: "Certificate", type: "summer" },
            ],
            requirements: {
                germanLevel: "C1 for most programs",
                englishLevel: "TOEFL 88+ / IELTS 6.5+",
                gpa: "Above average",
            },
            strengths: ["Medicine", "Law", "Humanities", "Economics"],
            description: "One of Europe's premier research universities since 1472."
        },
        {
            id: 'de-3',
            name: "RWTH Aachen University",
            shortName: "RWTH Aachen",
            type: "Technical University",
            location: "Aachen, North Rhine-Westphalia",
            ranking: 3,
            website: "https://www.rwth-aachen.de/go/id/a/?lidx=1",
            logo: "⚙️",
            programs: [
                { name: "Mechanical Engineering", language: "German", level: "BSc/MSc", type: "degree" },
                { name: "Computer Science", language: "German/English", level: "BSc/MSc", type: "degree" },
                { name: "Engineering Internship", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                germanLevel: "B2-C1 for German programs",
                englishLevel: "TOEFL 80+ / IELTS 6.0+",
                gpa: "Strong technical background",
            },
            strengths: ["Engineering", "Technology", "Automotive"],
            description: "Leading technical university with strong industry ties."
        },
    ],
    usa: [
        {
            id: 'us-1',
            name: "Massachusetts Institute of Technology (MIT)",
            shortName: "MIT",
            type: "Research University",
            location: "Cambridge, Massachusetts",
            ranking: 1,
            website: "https://www.mit.edu/",
            logo: "🔬",
            programs: [
                { name: "Computer Science", language: "English", level: "BSc/MSc/PhD", type: "degree" },
                { name: "Artificial Intelligence", language: "English", level: "MSc/PhD", type: "degree" },
                { name: "MIT Summer Research", language: "English", level: "Certificate", type: "summer" },
                { name: "UROP Internship", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                englishLevel: "TOEFL 100+ / IELTS 7.0+",
                gpa: "Top academic performance",
                other: "SAT/GRE, Research experience",
            },
            strengths: ["Technology", "Engineering", "AI/ML", "Research"],
            description: "World's leading technology and engineering institution."
        },
        {
            id: 'us-2',
            name: "Stanford University",
            shortName: "Stanford",
            type: "Research University",
            location: "Stanford, California",
            ranking: 2,
            website: "https://www.stanford.edu/",
            logo: "🌲",
            programs: [
                { name: "Computer Science", language: "English", level: "BSc/MSc/PhD", type: "degree" },
                { name: "Business Administration", language: "English", level: "MBA", type: "degree" },
                { name: "Stanford Summer Session", language: "English", level: "Certificate", type: "summer" },
                { name: "Silicon Valley Internship", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                englishLevel: "TOEFL 100+ / IELTS 7.0+",
                gpa: "Exceptional academic record",
                other: "Essays, Recommendations",
            },
            strengths: ["Entrepreneurship", "Technology", "Business", "Innovation"],
            description: "Premier university in Silicon Valley, hub for innovation."
        },
        {
            id: 'us-3',
            name: "Harvard University",
            shortName: "Harvard",
            type: "Research University",
            location: "Cambridge, Massachusetts",
            ranking: 3,
            website: "https://www.harvard.edu/",
            logo: "📚",
            programs: [
                { name: "Law", language: "English", level: "JD", type: "degree" },
                { name: "Business Administration", language: "English", level: "MBA", type: "degree" },
                { name: "Harvard Summer School", language: "English", level: "Certificate", type: "summer" },
            ],
            requirements: {
                englishLevel: "TOEFL 100+ / IELTS 7.0+",
                gpa: "Top 1% of class",
                other: "LSAT/GMAT, Outstanding achievements",
            },
            strengths: ["Law", "Business", "Medicine", "Liberal Arts"],
            description: "America's oldest university, globally renowned for excellence."
        },
    ],
    uk: [
        {
            id: 'uk-1',
            name: "University of Oxford",
            shortName: "Oxford",
            type: "Research University",
            location: "Oxford, England",
            ranking: 1,
            website: "https://www.ox.ac.uk/",
            logo: "🏰",
            programs: [
                { name: "Philosophy, Politics & Economics", language: "English", level: "BA", type: "degree" },
                { name: "Computer Science", language: "English", level: "BSc/MSc", type: "degree" },
                { name: "Oxford Summer Programme", language: "English", level: "Certificate", type: "summer" },
                { name: "Exchange Semester", language: "English", level: "Exchange", type: "exchange" },
            ],
            requirements: {
                englishLevel: "IELTS 7.0+ / TOEFL 100+",
                gpa: "Top academic performance",
                other: "Personal statement, Interview",
            },
            strengths: ["Humanities", "Sciences", "Law", "Medicine"],
            description: "World's oldest English-speaking university, academic excellence since 1096."
        },
        {
            id: 'uk-2',
            name: "University of Cambridge",
            shortName: "Cambridge",
            type: "Research University",
            location: "Cambridge, England",
            ranking: 2,
            website: "https://www.cam.ac.uk/",
            logo: "📖",
            programs: [
                { name: "Natural Sciences", language: "English", level: "BA", type: "degree" },
                { name: "Engineering", language: "English", level: "MEng", type: "degree" },
                { name: "Cambridge Summer School", language: "English", level: "Certificate", type: "summer" },
            ],
            requirements: {
                englishLevel: "IELTS 7.5+ / TOEFL 110+",
                gpa: "Exceptional academic record",
                other: "Admissions test, Interview",
            },
            strengths: ["Sciences", "Mathematics", "Engineering", "Research"],
            description: "World-leading research university with collegiate system."
        },
        {
            id: 'uk-3',
            name: "Imperial College London",
            shortName: "Imperial",
            type: "Technical University",
            location: "London, England",
            ranking: 3,
            website: "https://www.imperial.ac.uk/",
            logo: "⚛️",
            programs: [
                { name: "Data Science", language: "English", level: "MSc", type: "degree" },
                { name: "Biomedical Engineering", language: "English", level: "MEng", type: "degree" },
                { name: "London Tech Internship", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                englishLevel: "IELTS 7.0+ / TOEFL 100+",
                gpa: "Strong STEM background",
                other: "Personal statement",
            },
            strengths: ["Engineering", "Medicine", "Business", "Technology"],
            description: "Top UK university focused on science, technology and medicine."
        },
    ],
    thailand: [
        {
            id: 'th-1',
            name: "Chulalongkorn University",
            shortName: "Chula",
            type: "Research University",
            location: "Bangkok",
            ranking: 1,
            website: "https://www.chula.ac.th/en/",
            logo: "🏛️",
            programs: [
                { name: "International Business", language: "English", level: "BBA/MBA", type: "degree" },
                { name: "Thai Studies", language: "English", level: "MA", type: "degree" },
                { name: "Thai Language & Culture Summer", language: "English/Thai", level: "Certificate", type: "summer" },
                { name: "Exchange Program", language: "English", level: "Exchange", type: "exchange" },
            ],
            requirements: {
                englishLevel: "IELTS 6.0+ / TOEFL 80+",
                gpa: "Good academic standing",
                other: "Interview for some programs",
            },
            strengths: ["Business", "Engineering", "Medicine", "Arts"],
            description: "Thailand's oldest and most prestigious university."
        },
        {
            id: 'th-2',
            name: "Mahidol University",
            shortName: "Mahidol",
            type: "Research University",
            location: "Bangkok/Nakhon Pathom",
            ranking: 2,
            website: "https://mahidol.ac.th/",
            logo: "🏥",
            programs: [
                { name: "International Health", language: "English", level: "MPH", type: "degree" },
                { name: "Biomedical Science", language: "English", level: "MSc/PhD", type: "degree" },
                { name: "Tropical Medicine Summer", language: "English", level: "Certificate", type: "summer" },
            ],
            requirements: {
                englishLevel: "IELTS 6.0+ / TOEFL 79+",
                gpa: "Strong science background",
            },
            strengths: ["Medicine", "Public Health", "Science", "Research"],
            description: "Thailand's top medical and science research university."
        },
        {
            id: 'th-3',
            name: "Asian Institute of Technology (AIT)",
            shortName: "AIT",
            type: "Graduate Institute",
            location: "Pathum Thani",
            ranking: 3,
            website: "https://www.ait.ac.th/",
            logo: "🌏",
            programs: [
                { name: "Data Science & AI", language: "English", level: "MSc", type: "degree" },
                { name: "Climate Change", language: "English", level: "MSc", type: "degree" },
                { name: "Tech Internship Asia", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                englishLevel: "IELTS 6.0+ / TOEFL 79+",
                gpa: "Bachelor's degree required",
            },
            strengths: ["Engineering", "Environment", "Management", "AI"],
            description: "International graduate university for sustainable development."
        },
    ],
    japan: [
        {
            id: 'jp-1',
            name: "University of Tokyo",
            shortName: "UTokyo",
            type: "Research University",
            location: "Tokyo",
            ranking: 1,
            website: "https://www.u-tokyo.ac.jp/en/",
            logo: "🗼",
            programs: [
                { name: "Global Science", language: "English", level: "BSc", type: "degree" },
                { name: "Economics", language: "English", level: "MA", type: "degree" },
                { name: "UTRIP Summer Research", language: "English", level: "Research", type: "summer" },
                { name: "Exchange Semester", language: "English", level: "Exchange", type: "exchange" },
            ],
            requirements: {
                englishLevel: "TOEFL 90+ / IELTS 6.5+",
                gpa: "Excellent academic record",
                other: "Japanese language helpful",
            },
            strengths: ["Sciences", "Engineering", "Humanities", "Research"],
            description: "Japan's most prestigious university, global research leader."
        },
        {
            id: 'jp-2',
            name: "Kyoto University",
            shortName: "Kyoto U",
            type: "Research University",
            location: "Kyoto",
            ranking: 2,
            website: "https://www.kyoto-u.ac.jp/en",
            logo: "⛩️",
            programs: [
                { name: "Civil Engineering", language: "English", level: "MSc", type: "degree" },
                { name: "Japanese Studies", language: "English/Japanese", level: "MA", type: "degree" },
                { name: "Kyoto Summer Program", language: "English", level: "Certificate", type: "summer" },
            ],
            requirements: {
                englishLevel: "TOEFL 80+ / IELTS 6.0+",
                gpa: "Strong academic background",
            },
            strengths: ["Sciences", "Engineering", "Philosophy", "East Asian Studies"],
            description: "Japan's second oldest national university, Nobel Prize heritage."
        },
    ],
    australia: [
        {
            id: 'au-1',
            name: "University of Melbourne",
            shortName: "Melbourne",
            type: "Research University",
            location: "Melbourne, Victoria",
            ranking: 1,
            website: "https://www.unimelb.edu.au/",
            logo: "🦘",
            programs: [
                { name: "Master of Data Science", language: "English", level: "MSc", type: "degree" },
                { name: "Commerce", language: "English", level: "BCom", type: "degree" },
                { name: "Melbourne Summer Term", language: "English", level: "Certificate", type: "summer" },
                { name: "Exchange Semester", language: "English", level: "Exchange", type: "exchange" },
            ],
            requirements: {
                englishLevel: "IELTS 6.5+ / TOEFL 79+",
                gpa: "Good academic standing",
            },
            strengths: ["Business", "Law", "Medicine", "Arts"],
            description: "Australia's leading university, consistently ranked #1 nationally."
        },
        {
            id: 'au-2',
            name: "Australian National University (ANU)",
            shortName: "ANU",
            type: "Research University",
            location: "Canberra, ACT",
            ranking: 2,
            website: "https://www.anu.edu.au/",
            logo: "🏛️",
            programs: [
                { name: "International Relations", language: "English", level: "BA/MA", type: "degree" },
                { name: "Computer Science", language: "English", level: "BSc/MSc", type: "degree" },
                { name: "ANU Summer Research", language: "English", level: "Research", type: "summer" },
            ],
            requirements: {
                englishLevel: "IELTS 6.5+ / TOEFL 80+",
                gpa: "Strong academic record",
            },
            strengths: ["Political Science", "Sciences", "Research", "Policy"],
            description: "Australia's national research university in the capital."
        },
    ],
    canada: [
        {
            id: 'ca-1',
            name: "University of Toronto",
            shortName: "UofT",
            type: "Research University",
            location: "Toronto, Ontario",
            ranking: 1,
            website: "https://www.utoronto.ca/",
            logo: "🍁",
            programs: [
                { name: "Computer Science", language: "English", level: "BSc/MSc", type: "degree" },
                { name: "Rotman MBA", language: "English", level: "MBA", type: "degree" },
                { name: "Summer Abroad Toronto", language: "English", level: "Certificate", type: "summer" },
                { name: "Tech Internship", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                englishLevel: "IELTS 6.5+ / TOEFL 89+",
                gpa: "High academic achievement",
            },
            strengths: ["AI/ML", "Business", "Medicine", "Engineering"],
            description: "Canada's leading university and global AI research hub."
        },
        {
            id: 'ca-2',
            name: "University of British Columbia (UBC)",
            shortName: "UBC",
            type: "Research University",
            location: "Vancouver, BC",
            ranking: 2,
            website: "https://www.ubc.ca/",
            logo: "🌲",
            programs: [
                { name: "Forestry", language: "English", level: "BSc/MSc", type: "degree" },
                { name: "Sustainability", language: "English", level: "MSc", type: "degree" },
                { name: "Vancouver Summer Program", language: "English", level: "Certificate", type: "summer" },
                { name: "Exchange Semester", language: "English", level: "Exchange", type: "exchange" },
            ],
            requirements: {
                englishLevel: "IELTS 6.5+ / TOEFL 90+",
                gpa: "Competitive admission",
            },
            strengths: ["Sustainability", "Sciences", "Business", "Arts"],
            description: "Top Canadian university with stunning campus in Vancouver."
        },
    ],
    netherlands: [
        {
            id: 'nl-1',
            name: "University of Amsterdam",
            shortName: "UvA",
            type: "Research University",
            location: "Amsterdam",
            ranking: 1,
            website: "https://www.uva.nl/en",
            logo: "🌷",
            programs: [
                { name: "Artificial Intelligence", language: "English", level: "BSc/MSc", type: "degree" },
                { name: "International Law", language: "English", level: "LLM", type: "degree" },
                { name: "Amsterdam Summer School", language: "English", level: "Certificate", type: "summer" },
                { name: "Exchange Semester", language: "English", level: "Exchange", type: "exchange" },
            ],
            requirements: {
                englishLevel: "IELTS 6.5+ / TOEFL 92+",
                gpa: "Good academic standing",
            },
            strengths: ["AI", "Social Sciences", "Law", "Media"],
            description: "Amsterdam's historic university, strong in social sciences and AI."
        },
        {
            id: 'nl-2',
            name: "Delft University of Technology",
            shortName: "TU Delft",
            type: "Technical University",
            location: "Delft",
            ranking: 2,
            website: "https://www.tudelft.nl/en",
            logo: "🔧",
            programs: [
                { name: "Aerospace Engineering", language: "English", level: "BSc/MSc", type: "degree" },
                { name: "Computer Science", language: "English", level: "MSc", type: "degree" },
                { name: "Engineering Internship", language: "English", level: "Internship", type: "internship" },
            ],
            requirements: {
                englishLevel: "IELTS 6.5+ / TOEFL 90+",
                gpa: "Strong STEM background",
            },
            strengths: ["Engineering", "Architecture", "Design", "Technology"],
            description: "Netherlands' largest and oldest technical university."
        },
    ],
};

// Get universities by country
export const getUniversitiesByCountry = (countryId) => {
    return universities[countryId] || [];
};

// Get universities by program type
export const getUniversitiesByProgramType = (countryId, programType) => {
    const countryUnis = universities[countryId] || [];
    if (!programType || programType === 'all') return countryUnis;

    return countryUnis.filter(uni =>
        uni.programs.some(p => p.type === programType)
    ).map(uni => ({
        ...uni,
        programs: uni.programs.filter(p => p.type === programType)
    }));
};

// Get all universities (flat list)
export const getAllUniversities = () => {
    return Object.values(universities).flat();
};

// Search universities
export const searchUniversities = (query, countryId = null) => {
    const lowerQuery = query.toLowerCase();
    const unis = countryId ? universities[countryId] : getAllUniversities();

    return unis.filter(uni =>
        uni.name.toLowerCase().includes(lowerQuery) ||
        uni.shortName.toLowerCase().includes(lowerQuery) ||
        uni.strengths.some(s => s.toLowerCase().includes(lowerQuery)) ||
        uni.programs.some(p => p.name.toLowerCase().includes(lowerQuery))
    );
};

export default universities;
