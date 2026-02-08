// Database of Top German Universities
export const germanUniversities = [
  {
    id: 1,
    name: "Technical University of Munich (TUM)",
    shortName: "TUM",
    type: "Technical University",
    location: "Munich, Bavaria",
    ranking: 1,
    website: "https://www.tum.de/en/",
    logo: "🏛️",
    programs: [
      { name: "Computer Science", language: "English/German", level: "BSc/MSc" },
      { name: "Mechanical Engineering", language: "German/English", level: "BSc/MSc" },
      { name: "Electrical Engineering", language: "German/English", level: "BSc/MSc" },
      { name: "Data Science", language: "English", level: "MSc" },
      { name: "Artificial Intelligence", language: "English", level: "MSc" },
      { name: "Aerospace Engineering", language: "German/English", level: "BSc/MSc" },
      { name: "Business Administration", language: "English", level: "MSc" },
      { name: "Physics", language: "German/English", level: "BSc/MSc" },
    ],
    requirements: {
      germanLevel: "B2-C1 for German programs",
      englishLevel: "TOEFL 88+ / IELTS 6.5+",
      gpa: "Good academic standing",
      other: "Motivation letter, CV, relevant experience"
    },
    strengths: ["Engineering", "Technology", "Natural Sciences", "AI/ML", "Entrepreneurship"],
    description: "Germany's top technical university, known for cutting-edge research and strong industry connections."
  },
  {
    id: 2,
    name: "Ludwig Maximilian University of Munich (LMU)",
    shortName: "LMU Munich",
    type: "Research University",
    location: "Munich, Bavaria", 
    ranking: 2,
    website: "https://www.lmu.de/en/",
    logo: "🎓",
    programs: [
      { name: "Economics", language: "German/English", level: "BSc/MSc" },
      { name: "Law", language: "German", level: "State Exam" },
      { name: "Medicine", language: "German", level: "State Exam" },
      { name: "Psychology", language: "German", level: "BSc/MSc" },
      { name: "Biology", language: "German/English", level: "BSc/MSc" },
      { name: "Computer Science", language: "German/English", level: "BSc/MSc" },
      { name: "Philosophy", language: "German", level: "BA/MA" },
      { name: "Data Science", language: "English", level: "MSc" },
    ],
    requirements: {
      germanLevel: "C1 for most programs",
      englishLevel: "TOEFL 88+ / IELTS 6.5+ for English programs",
      gpa: "Above average",
      other: "Subject-specific requirements vary"
    },
    strengths: ["Medicine", "Law", "Humanities", "Natural Sciences", "Economics"],
    description: "One of Europe's premier research universities with a rich academic tradition since 1472."
  },
  {
    id: 3,
    name: "Heidelberg University",
    shortName: "Heidelberg",
    type: "Research University",
    location: "Heidelberg, Baden-Württemberg",
    ranking: 3,
    website: "https://www.uni-heidelberg.de/en",
    logo: "📚",
    programs: [
      { name: "Medicine", language: "German", level: "State Exam" },
      { name: "Molecular Biology", language: "English", level: "MSc" },
      { name: "Physics", language: "German/English", level: "BSc/MSc" },
      { name: "Economics", language: "German", level: "BSc" },
      { name: "Political Science", language: "German/English", level: "BA/MA" },
      { name: "Translation Studies", language: "German/English", level: "BA/MA" },
    ],
    requirements: {
      germanLevel: "C1 for German programs",
      englishLevel: "TOEFL 90+ / IELTS 7.0 for English programs",
      gpa: "High academic standing",
      other: "Research motivation, academic references"
    },
    strengths: ["Medicine", "Natural Sciences", "Humanities", "Research"],
    description: "Germany's oldest university (1386), renowned for medicine and natural sciences."
  },
  {
    id: 4,
    name: "RWTH Aachen University",
    shortName: "RWTH Aachen",
    type: "Technical University",
    location: "Aachen, North Rhine-Westphalia",
    ranking: 4,
    website: "https://www.rwth-aachen.de/go/id/a/?lidx=1",
    logo: "⚙️",
    programs: [
      { name: "Mechanical Engineering", language: "German", level: "BSc/MSc" },
      { name: "Electrical Engineering", language: "German/English", level: "BSc/MSc" },
      { name: "Computer Science", language: "German/English", level: "BSc/MSc" },
      { name: "Civil Engineering", language: "German", level: "BSc/MSc" },
      { name: "Automotive Engineering", language: "English", level: "MSc" },
      { name: "Data Science", language: "English", level: "MSc" },
    ],
    requirements: {
      germanLevel: "B2-C1 for German programs",
      englishLevel: "TOEFL 80+ / IELTS 6.0+",
      gpa: "Strong technical background",
      other: "Pre-study internship for some programs"
    },
    strengths: ["Engineering", "Technology", "Automotive", "Industry Partnerships"],
    description: "One of Europe's leading technical universities with strong ties to automotive and tech industries."
  },
  {
    id: 5,
    name: "Freie Universität Berlin",
    shortName: "FU Berlin",
    type: "Research University",
    location: "Berlin",
    ranking: 5,
    website: "https://www.fu-berlin.de/en/",
    logo: "🌍",
    programs: [
      { name: "Political Science", language: "German/English", level: "BA/MA" },
      { name: "International Relations", language: "English", level: "MA" },
      { name: "Computer Science", language: "German", level: "BSc/MSc" },
      { name: "Economics", language: "German/English", level: "BSc/MSc" },
      { name: "History", language: "German", level: "BA/MA" },
      { name: "North American Studies", language: "English", level: "BA/MA" },
    ],
    requirements: {
      germanLevel: "C1 for German programs",
      englishLevel: "TOEFL 90+ / IELTS 6.5+ for English programs",
      gpa: "Good academic record",
      other: "Subject-specific portfolios may be required"
    },
    strengths: ["Social Sciences", "Humanities", "Political Science", "International Studies"],
    description: "A leading research university in Berlin known for social sciences and humanities."
  },
  {
    id: 6,
    name: "Humboldt University of Berlin",
    shortName: "HU Berlin",
    type: "Research University",
    location: "Berlin",
    ranking: 6,
    website: "https://www.hu-berlin.de/en",
    logo: "🏫",
    programs: [
      { name: "Philosophy", language: "German", level: "BA/MA" },
      { name: "Physics", language: "German", level: "BSc/MSc" },
      { name: "Economics", language: "German/English", level: "BSc/MSc" },
      { name: "Cultural Studies", language: "German", level: "BA/MA" },
      { name: "Computer Science", language: "German", level: "BSc/MSc" },
      { name: "Law", language: "German", level: "State Exam" },
    ],
    requirements: {
      germanLevel: "C1 for most programs",
      englishLevel: "Varies by program",
      gpa: "Above average",
      other: "Academic writing samples for humanities"
    },
    strengths: ["Humanities", "Natural Sciences", "Philosophy", "Cultural Studies"],
    description: "Historic university founded in 1810, birthplace of the modern research university model."
  },
  {
    id: 7,
    name: "Technical University of Berlin",
    shortName: "TU Berlin",
    type: "Technical University",
    location: "Berlin",
    ranking: 7,
    website: "https://www.tu.berlin/en/",
    logo: "🔬",
    programs: [
      { name: "Computer Science", language: "German/English", level: "BSc/MSc" },
      { name: "Industrial Engineering", language: "German", level: "BSc/MSc" },
      { name: "Architecture", language: "German", level: "BSc/MSc" },
      { name: "Urban Planning", language: "German/English", level: "BSc/MSc" },
      { name: "ICT Innovation", language: "English", level: "MSc" },
      { name: "Entrepreneurship", language: "English", level: "MSc" },
    ],
    requirements: {
      germanLevel: "B2-C1 for German programs",
      englishLevel: "TOEFL 88+ / IELTS 6.5+",
      gpa: "Strong academic background",
      other: "Portfolio for design programs"
    },
    strengths: ["Engineering", "Architecture", "Urban Planning", "Innovation", "Startups"],
    description: "Berlin's technical university with a strong focus on urban technology and entrepreneurship."
  },
  {
    id: 8,
    name: "University of Freiburg",
    shortName: "Uni Freiburg",
    type: "Research University",
    location: "Freiburg, Baden-Württemberg",
    ranking: 8,
    website: "https://uni-freiburg.de/en/",
    logo: "🌲",
    programs: [
      { name: "Environmental Sciences", language: "German/English", level: "BSc/MSc" },
      { name: "Medicine", language: "German", level: "State Exam" },
      { name: "Biology", language: "German", level: "BSc/MSc" },
      { name: "Forest Sciences", language: "German", level: "BSc/MSc" },
      { name: "Law", language: "German", level: "State Exam" },
      { name: "Solar Energy Engineering", language: "English", level: "MSc" },
    ],
    requirements: {
      germanLevel: "C1 for German programs",
      englishLevel: "TOEFL 88+ / IELTS 6.5+",
      gpa: "Good academic standing",
      other: "Field experience for environmental programs"
    },
    strengths: ["Environmental Sciences", "Medicine", "Sustainability", "Biology"],
    description: "A leading university for environmental and life sciences in scenic Black Forest region."
  },
  {
    id: 9,
    name: "University of Tübingen",
    shortName: "Uni Tübingen",
    type: "Research University",
    location: "Tübingen, Baden-Württemberg",
    ranking: 9,
    website: "https://uni-tuebingen.de/en/",
    logo: "🧠",
    programs: [
      { name: "Medicine", language: "German", level: "State Exam" },
      { name: "Machine Learning", language: "English", level: "MSc" },
      { name: "Neuroscience", language: "English", level: "MSc" },
      { name: "Philosophy", language: "German", level: "BA/MA" },
      { name: "Theology", language: "German", level: "BA/MA" },
      { name: "Cognitive Science", language: "English", level: "BSc/MSc" },
    ],
    requirements: {
      germanLevel: "C1 for German programs",
      englishLevel: "TOEFL 92+ / IELTS 7.0",
      gpa: "Excellent academic record for competitive programs",
      other: "Research proposal for graduate programs"
    },
    strengths: ["AI/ML", "Neuroscience", "Medicine", "Philosophy", "Cognitive Science"],
    description: "World-renowned for AI research, neuroscience, and has Germany's top ML/AI program."
  },
  {
    id: 10,
    name: "University of Mannheim",
    shortName: "Uni Mannheim",
    type: "Business School",
    location: "Mannheim, Baden-Württemberg",
    ranking: 10,
    website: "https://www.uni-mannheim.de/en/",
    logo: "💼",
    programs: [
      { name: "Business Administration", language: "German/English", level: "BSc/MSc" },
      { name: "Economics", language: "German/English", level: "BSc/MSc" },
      { name: "Data Science", language: "English", level: "MSc" },
      { name: "Management", language: "English", level: "MSc" },
      { name: "Political Science", language: "German", level: "BA/MA" },
      { name: "Sociology", language: "German", level: "BA/MA" },
    ],
    requirements: {
      germanLevel: "B2-C1",
      englishLevel: "TOEFL 95+ / IELTS 7.0",
      gpa: "Very good academic record, GMAT for some programs",
      other: "Work experience for MBA"
    },
    strengths: ["Business", "Economics", "Management", "Social Sciences"],
    description: "Germany's top business school, highly ranked for economics and management."
  },
  {
    id: 11,
    name: "Karlsruhe Institute of Technology (KIT)",
    shortName: "KIT",
    type: "Technical University",
    location: "Karlsruhe, Baden-Württemberg",
    ranking: 11,
    website: "https://www.kit.edu/english/",
    logo: "⚡",
    programs: [
      { name: "Computer Science", language: "German", level: "BSc/MSc" },
      { name: "Mechanical Engineering", language: "German", level: "BSc/MSc" },
      { name: "Electrical Engineering", language: "German", level: "BSc/MSc" },
      { name: "Energy Engineering", language: "English", level: "MSc" },
      { name: "Materials Science", language: "German/English", level: "BSc/MSc" },
      { name: "Optics & Photonics", language: "English", level: "MSc" },
    ],
    requirements: {
      germanLevel: "B2-C1 for German programs",
      englishLevel: "TOEFL 80+ / IELTS 6.0+",
      gpa: "Strong technical foundation",
      other: "Math/Physics aptitude tests for some programs"
    },
    strengths: ["Engineering", "Energy", "IT", "Research", "Innovation"],
    description: "A national research center and university, excellent for engineering and natural sciences."
  },
  {
    id: 12,
    name: "University of Göttingen",
    shortName: "Uni Göttingen",
    type: "Research University",
    location: "Göttingen, Lower Saxony",
    ranking: 12,
    website: "https://www.uni-goettingen.de/en/",
    logo: "📖",
    programs: [
      { name: "Agriculture", language: "German", level: "BSc/MSc" },
      { name: "Biology", language: "German/English", level: "BSc/MSc" },
      { name: "Mathematics", language: "German", level: "BSc/MSc" },
      { name: "Physics", language: "German/English", level: "BSc/MSc" },
      { name: "Development Economics", language: "English", level: "MSc" },
      { name: "Molecular Medicine", language: "English", level: "MSc" },
    ],
    requirements: {
      germanLevel: "C1 for German programs",
      englishLevel: "TOEFL 88+ / IELTS 6.5+",
      gpa: "Good academic record",
      other: "Research experience preferred for MSc"
    },
    strengths: ["Natural Sciences", "Mathematics", "Agriculture", "Research"],
    description: "Historic university with strong tradition in mathematics and natural sciences."
  }
];

// Helper function to search universities by program or keyword
export const searchUniversities = (query) => {
  const lowerQuery = query.toLowerCase();
  return germanUniversities.filter(uni => 
    uni.name.toLowerCase().includes(lowerQuery) ||
    uni.shortName.toLowerCase().includes(lowerQuery) ||
    uni.strengths.some(s => s.toLowerCase().includes(lowerQuery)) ||
    uni.programs.some(p => p.name.toLowerCase().includes(lowerQuery))
  );
};

// Get universities by program name
export const getUniversitiesByProgram = (programName) => {
  const lowerProgram = programName.toLowerCase();
  return germanUniversities.filter(uni =>
    uni.programs.some(p => p.name.toLowerCase().includes(lowerProgram))
  ).map(uni => ({
    ...uni,
    matchedPrograms: uni.programs.filter(p => 
      p.name.toLowerCase().includes(lowerProgram)
    )
  }));
};

// Get universities by strength/field
export const getUniversitiesByField = (field) => {
  const lowerField = field.toLowerCase();
  return germanUniversities.filter(uni =>
    uni.strengths.some(s => s.toLowerCase().includes(lowerField))
  );
};

export default germanUniversities;
