// Multi-Country Study Abroad Checklist Data
// Each country has specific requirements and processes

// Country-specific configuration
const countryConfig = {
    germany: {
        name: 'Germany',
        flag: '🇩🇪',
        blockedAccount: { name: 'Sperrkonto', amount: '€11,208', provider: 'Expatrio' },
        registration: { name: 'Anmeldung', office: 'Bürgeramt', deadline: '14 days' },
        residencePermit: { name: 'Aufenthaltserlaubnis', office: 'Ausländerbehörde' },
        healthInsurance: 'gesetzliche Krankenversicherung',
        applicationPortal: 'uni-assist',
        scholarships: ['DAAD', 'Deutschlandstipendium'],
        plugType: 'Type F',
        apps: ['DB Navigator', 'DeepL'],
    },
    usa: {
        name: 'USA',
        flag: '🇺🇸',
        blockedAccount: null,
        registration: null,
        residencePermit: null,
        visa: { name: 'F-1 Student Visa', form: 'I-20', interview: 'US Embassy' },
        sevis: { name: 'SEVIS', fee: '$350' },
        healthInsurance: 'University health plan or private',
        applicationPortal: 'Common App / Coalition App',
        scholarships: ['Fulbright', 'University scholarships'],
        plugType: 'Type A/B',
        apps: ['Venmo', 'Uber'],
    },
    uk: {
        name: 'United Kingdom',
        flag: '🇬🇧',
        blockedAccount: null,
        visa: { name: 'Student Visa', form: 'CAS', interview: 'VFS Global' },
        ihs: { name: 'IHS', description: 'Immigration Health Surcharge', amount: '£470/year' },
        healthInsurance: 'NHS (included with IHS)',
        applicationPortal: 'UCAS',
        scholarships: ['Chevening', 'Commonwealth', 'University scholarships'],
        plugType: 'Type G',
        apps: ['Trainline', 'Citymapper'],
    },
    thailand: {
        name: 'Thailand',
        flag: '🇹🇭',
        visa: { name: 'Non-Immigrant ED Visa', interview: 'Thai Embassy' },
        tm30: { name: 'TM.30', description: 'Foreigner residence report', deadline: '24 hours' },
        ninetyDayReport: { name: '90-Day Report', description: 'Immigration check-in' },
        healthInsurance: 'Private insurance required',
        applicationPortal: 'Direct to university',
        scholarships: ['Thai Government Scholarship', 'ASEAN Scholarship'],
        plugType: 'Type A/B/C',
        apps: ['Grab', 'ViaBus', 'LINE'],
    },
    japan: {
        name: 'Japan',
        flag: '🇯🇵',
        visa: { name: 'Student Visa', form: 'CoE (Certificate of Eligibility)', interview: 'Japanese Embassy' },
        residenceCard: { name: 'Zairyu Card', description: 'Residence Card' },
        registration: { name: 'Residence Registration', office: 'City Hall', deadline: '14 days' },
        healthInsurance: 'National Health Insurance (NHI)',
        applicationPortal: 'Direct or JASSO',
        scholarships: ['MEXT', 'JASSO', 'University scholarships'],
        plugType: 'Type A/B',
        apps: ['Suica/Pasmo', 'Google Maps', 'LINE'],
        language: 'JLPT for Japanese programs',
    },
    australia: {
        name: 'Australia',
        flag: '🇦🇺',
        visa: { name: 'Student Visa (subclass 500)', form: 'CoE', portal: 'ImmiAccount' },
        oshc: { name: 'OSHC', description: 'Overseas Student Health Cover', required: true },
        genuineStudent: { name: 'GS Requirement', description: 'Genuine Student test' },
        healthInsurance: 'OSHC (mandatory)',
        applicationPortal: 'Direct + QTAC/UAC',
        scholarships: ['Australia Awards', 'Destination Australia', 'University scholarships'],
        plugType: 'Type I',
        apps: ['Opal/Myki', 'Uber'],
    },
    canada: {
        name: 'Canada',
        flag: '🇨🇦',
        visa: { name: 'Study Permit', portal: 'IRCC' },
        biometrics: { name: 'Biometrics', required: true },
        gic: { name: 'GIC', description: 'Guaranteed Investment Certificate', amount: 'CAD $20,635' },
        healthInsurance: 'Provincial health or UHIP',
        applicationPortal: 'Direct to university',
        scholarships: ['Vanier CGS', 'University scholarships'],
        plugType: 'Type A/B',
        apps: ['Presto/Compass Card', 'Uber'],
    },
    netherlands: {
        name: 'Netherlands',
        flag: '🇳🇱',
        visa: { name: 'MVV + Residence Permit', sponsor: 'University' },
        bsn: { name: 'BSN', description: 'Citizen Service Number' },
        registration: { name: 'Municipality Registration', deadline: '5 days' },
        healthInsurance: 'Dutch health insurance (required)',
        applicationPortal: 'Studielink',
        scholarships: ['Holland Scholarship', 'Orange Tulip', 'University scholarships'],
        plugType: 'Type C/F',
        apps: ['NS App', '9292'],
    },
};

// Generate checklist for a specific country
const generateChecklistForCountry = (countryId) => {
    const config = countryConfig[countryId];
    if (!config) return getGenericChecklist();

    return [
        {
            id: "language",
            title: "Language Preparation",
            icon: "🗣️",
            description: "Master the language requirements for your program",
            items: getLanguageItems(countryId, config),
        },
        {
            id: "documents",
            title: "Documents & Certificates",
            icon: "📄",
            description: "Gather and prepare all necessary documents",
            items: getDocumentItems(countryId, config),
        },
        {
            id: "application",
            title: "University Application",
            icon: "🎓",
            description: `Navigate the ${config.name} university application process`,
            items: getApplicationItems(countryId, config),
        },
        {
            id: "financial",
            title: "Financial Planning",
            icon: "💰",
            description: "Secure funding and meet financial requirements",
            items: getFinancialItems(countryId, config),
        },
        {
            id: "visa",
            title: "Visa & Immigration",
            icon: "🛂",
            description: `Navigate the ${config.name} student visa process`,
            items: getVisaItems(countryId, config),
        },
        {
            id: "housing",
            title: "Housing & Accommodation",
            icon: "🏠",
            description: `Find a place to live in ${config.name}`,
            items: getHousingItems(countryId, config),
        },
        {
            id: "departure",
            title: "Pre-Departure",
            icon: "✈️",
            description: `Final preparations before flying to ${config.name}`,
            items: getDepartureItems(countryId, config),
        },
        {
            id: "arrival",
            title: "After Arrival",
            icon: config.flag,
            description: `Essential tasks when you arrive in ${config.name}`,
            items: getArrivalItems(countryId, config),
        },
    ];
};

// Language items - varies by country
const getLanguageItems = (countryId, config) => {
    const baseItems = [
        {
            id: "lang-1",
            title: "Determine required language level",
            description: getLanguageTestDescription(countryId),
            priority: "high",
            timeframe: "12+ months before",
        },
    ];

    // Add country-specific language items
    if (countryId === 'germany') {
        baseItems.push(
            { id: "lang-2", title: "Start learning German", description: "Basic German helps with daily life even for English programs", priority: "high", timeframe: "12+ months before" },
            { id: "lang-3", title: "Register for language test", description: "Book TestDaF, DSH, TOEFL, or IELTS test date", priority: "high", timeframe: "6-8 months before" }
        );
    } else if (countryId === 'japan') {
        baseItems.push(
            { id: "lang-2", title: "Start learning Japanese", description: "Essential for daily life; consider JLPT certification", priority: "high", timeframe: "12+ months before" },
            { id: "lang-3", title: "Register for JLPT/EJU", description: "Japanese Language Proficiency Test or EJU if required", priority: "medium", timeframe: "6-8 months before" }
        );
    } else if (countryId === 'thailand') {
        baseItems.push(
            { id: "lang-2", title: "Learn basic Thai", description: "Helpful for daily life outside university", priority: "low", timeframe: "6+ months before" }
        );
    } else if (countryId === 'netherlands') {
        baseItems.push(
            { id: "lang-2", title: "Learn basic Dutch", description: "Many Dutch speak English, but Dutch helps for integration", priority: "low", timeframe: "6+ months before" }
        );
    }

    baseItems.push(
        { id: "lang-4", title: "Take official language exam", description: "Complete your language proficiency test (IELTS/TOEFL)", priority: "high", timeframe: "4-6 months before" },
        { id: "lang-5", title: "Receive and verify test scores", description: "Ensure scores meet program requirements", priority: "high", timeframe: "3-5 months before" }
    );

    return baseItems;
};

const getLanguageTestDescription = (countryId) => {
    const descriptions = {
        germany: "Check if program requires German (TestDaF/DSH) or English (TOEFL/IELTS)",
        usa: "Most programs require TOEFL (80+) or IELTS (6.5+); some accept Duolingo",
        uk: "IELTS Academic (6.0-7.0) or equivalent for most programs",
        thailand: "Check English requirements; some programs taught in Thai",
        japan: "English programs need TOEFL/IELTS; Japanese programs need JLPT N1-N2",
        australia: "IELTS Academic (6.0-7.0), TOEFL, or PTE Academic",
        canada: "IELTS Academic (6.5+), TOEFL (80+), or Duolingo",
        netherlands: "IELTS (6.0-6.5), TOEFL (80-90) for English programs",
    };
    return descriptions[countryId] || "Check the language requirements for your program";
};

// Document items
const getDocumentItems = (countryId, config) => {
    const items = [
        { id: "doc-1", title: "Obtain valid passport", description: "Passport must be valid for at least 6 months beyond your stay", priority: "high", timeframe: "12+ months before" },
        { id: "doc-2", title: "Request academic transcripts", description: "Get official transcripts from all previous educational institutions", priority: "high", timeframe: "8-10 months before" },
        { id: "doc-3", title: "Get transcripts translated", description: "Certified English translations of all documents if needed", priority: "medium", timeframe: "6-8 months before" },
        { id: "doc-4", title: "Obtain degree certificates", description: "Get certified copies of your diplomas/degrees", priority: "high", timeframe: "6-8 months before" },
        { id: "doc-5", title: "Prepare CV/Resume", description: "Create a detailed CV suitable for academic applications", priority: "medium", timeframe: "4-6 months before" },
        { id: "doc-6", title: "Write statement of purpose", description: "Craft a compelling motivation letter for each application", priority: "high", timeframe: "4-6 months before" },
        { id: "doc-7", title: "Request recommendation letters", description: "Ask professors/employers for academic references", priority: "high", timeframe: "4-6 months before" },
    ];

    // Country-specific doc requirements
    if (countryId === 'germany') {
        items.push({ id: "doc-8", title: "Get documents authenticated", description: "Apostille or legalization if required by your country", priority: "medium", timeframe: "3-4 months before" });
    } else if (countryId === 'usa') {
        items.push({ id: "doc-8", title: "Prepare financial documents", description: "Bank statements showing sufficient funds for I-20", priority: "high", timeframe: "3-4 months before" });
    } else if (countryId === 'uk') {
        items.push({ id: "doc-8", title: "Verify ATAS certificate", description: "Required for certain STEM subjects", priority: "medium", timeframe: "3-4 months before" });
    }

    return items;
};

// Application items
const getApplicationItems = (countryId, config) => {
    const items = [
        { id: "app-1", title: "Research universities and programs", description: `Use official databases to find suitable programs in ${config.name}`, priority: "high", timeframe: "12+ months before" },
        { id: "app-2", title: "Check admission requirements", description: "Verify your qualifications meet program requirements", priority: "high", timeframe: "10-12 months before" },
        { id: "app-3", title: "Note application deadlines", description: getDeadlineDescription(countryId), priority: "high", timeframe: "8-10 months before" },
    ];

    // Country-specific application portal
    if (config.applicationPortal) {
        items.push({ id: "app-4", title: `Register on ${config.applicationPortal}`, description: `Create account on ${config.applicationPortal} for applications`, priority: "high", timeframe: "4-6 months before" });
    }

    items.push(
        { id: "app-5", title: "Submit applications", description: "Apply to your selected universities before deadlines", priority: "high", timeframe: "By deadline" },
        { id: "app-6", title: "Pay application fees", description: getApplicationFeeDescription(countryId), priority: "high", timeframe: "With application" },
        { id: "app-7", title: "Track application status", description: "Monitor portals for updates and respond promptly", priority: "medium", timeframe: "Ongoing" },
        { id: "app-8", title: "Accept admission offer", description: "Confirm your place at your chosen university", priority: "high", timeframe: "Upon receiving offer" }
    );

    return items;
};

const getDeadlineDescription = (countryId) => {
    const deadlines = {
        germany: "Winter semester: July 15, Summer: January 15 (varies by uni)",
        usa: "Fall: December-March for most schools; varies by program",
        uk: "UCAS deadline: January 31 for most; October 15 for Oxbridge/medicine",
        japan: "Varies by university; typically 6-8 months before start",
        australia: "Rolling admissions; Semester 1: Oct-Nov, Semester 2: April-May",
        canada: "Varies by university; typically January-March for Fall intake",
        netherlands: "May 1 for Numerus Fixus programs; varies otherwise",
        thailand: "Varies by university; check individual program deadlines",
    };
    return deadlines[countryId] || "Check specific deadlines for your chosen universities";
};

const getApplicationFeeDescription = (countryId) => {
    const fees = {
        germany: "uni-assist: €75 first application, €30 additional",
        usa: "$50-100 per application; fee waivers available",
        uk: "UCAS: £27.50 for one choice, £29.50 for up to 5 choices",
        japan: "¥10,000-30,000 per application",
        australia: "AUD $50-150 per application",
        canada: "CAD $75-150 per application",
        netherlands: "Usually free via Studielink; some charge €100+",
        thailand: "Varies; typically ฿500-2,000",
    };
    return fees[countryId] || "Check application fees for your chosen universities";
};

// Financial items
const getFinancialItems = (countryId, config) => {
    const items = [
        { id: "fin-1", title: "Calculate total costs", description: getCostDescription(countryId), priority: "high", timeframe: "12+ months before" },
        { id: "fin-2", title: "Research scholarships", description: `Apply for ${config.scholarships?.join(', ') || 'available scholarships'}`, priority: "high", timeframe: "12+ months before" },
        { id: "fin-3", title: "Apply for scholarships", description: "Submit applications before scholarship deadlines", priority: "high", timeframe: "8-12 months before" },
    ];

    // Country-specific financial requirements
    if (countryId === 'germany' && config.blockedAccount) {
        items.push({ id: "fin-4", title: `Open ${config.blockedAccount.name}`, description: `Required for visa: deposit ${config.blockedAccount.amount} with ${config.blockedAccount.provider}`, priority: "high", timeframe: "3-4 months before" });
    } else if (countryId === 'canada' && config.gic) {
        items.push({ id: "fin-4", title: `Get ${config.gic.name}`, description: `${config.gic.description}: ${config.gic.amount}`, priority: "high", timeframe: "3-4 months before" });
    }

    items.push(
        { id: "fin-5", title: "Arrange health insurance", description: `Get ${config.healthInsurance}`, priority: "high", timeframe: "2-3 months before" },
        { id: "fin-6", title: "Set up international banking", description: "Get an international debit card and plan for money transfers", priority: "medium", timeframe: "1-2 months before" }
    );

    return items;
};

const getCostDescription = (countryId) => {
    const costs = {
        germany: "Budget ~€11,208/year (€934/month) for living expenses; tuition usually free",
        usa: "Budget $20,000-50,000/year tuition + $15,000-25,000 living expenses",
        uk: "Budget £12,000-38,000/year tuition + £12,000-15,000 living expenses",
        japan: "Budget ¥1-2 million/year tuition + ¥1-1.5 million living expenses",
        australia: "Budget AUD $20,000-45,000 tuition + AUD $21,000 living expenses",
        canada: "Budget CAD $20,000-40,000 tuition + CAD $15,000-20,000 living",
        netherlands: "Budget €10,000-20,000 tuition + €12,000-14,000 living expenses",
        thailand: "Budget ฿100,000-400,000 tuition + ฿200,000-300,000 living/year",
    };
    return costs[countryId] || "Research tuition and living costs for your destination";
};

// Visa items
const getVisaItems = (countryId, config) => {
    const items = [
        { id: "visa-1", title: "Check if visa is required", description: "Verify visa requirements for your nationality", priority: "high", timeframe: "6+ months before" },
    ];

    if (config.visa) {
        items.push(
            { id: "visa-2", title: `Apply for ${config.visa.name}`, description: `Prepare ${config.visa.form || 'required documents'} for application`, priority: "high", timeframe: "3-4 months before" },
            { id: "visa-3", title: "Book visa appointment", description: `Schedule appointment at ${config.visa.interview || config.visa.portal || 'embassy'}`, priority: "high", timeframe: "3-4 months before" },
            { id: "visa-4", title: "Prepare visa documents", description: "Admission letter, financial proof, insurance, passport photos", priority: "high", timeframe: "2-3 months before" },
            { id: "visa-5", title: "Attend visa interview/submit", description: "Bring all original documents and copies", priority: "high", timeframe: "6-12 weeks before" },
            { id: "visa-6", title: "Receive student visa", description: "Processing time varies; plan accordingly", priority: "high", timeframe: "Before departure" }
        );
    }

    // Country-specific visa requirements
    if (countryId === 'usa' && config.sevis) {
        items.splice(2, 0, { id: "visa-sevis", title: `Pay ${config.sevis.name} fee`, description: `Pay ${config.sevis.fee} SEVIS I-901 fee`, priority: "high", timeframe: "Before visa interview" });
    } else if (countryId === 'uk' && config.ihs) {
        items.push({ id: "visa-ihs", title: `Pay ${config.ihs.name}`, description: `${config.ihs.description}: ${config.ihs.amount}`, priority: "high", timeframe: "With visa application" });
    } else if (countryId === 'canada' && config.biometrics) {
        items.splice(3, 0, { id: "visa-bio", title: "Complete biometrics", description: "Schedule and complete biometrics appointment", priority: "high", timeframe: "After application submission" });
    }

    return items;
};

// Housing items
const getHousingItems = (countryId, config) => {
    const items = [
        { id: "house-1", title: "Apply for student housing", description: "Apply for university dorms or student accommodation early", priority: "high", timeframe: "As soon as admitted" },
        { id: "house-2", title: "Search for private accommodation", description: getHousingSearchDescription(countryId), priority: "medium", timeframe: "3-4 months before" },
        { id: "house-3", title: "Prepare rental documents", description: "Proof of enrollment, bank statements, references", priority: "medium", timeframe: "2-3 months before" },
        { id: "house-4", title: "Arrange temporary housing", description: "Book hostel/Airbnb for first few weeks if needed", priority: "medium", timeframe: "1-2 months before" },
        { id: "house-5", title: "Sign rental contract", description: "Read carefully, understand terms and deposit requirements", priority: "high", timeframe: "Before/after arrival" },
    ];
    return items;
};

const getHousingSearchDescription = (countryId) => {
    const sites = {
        germany: "Use WG-Gesucht, Immobilienscout24, eBay Kleinanzeigen",
        usa: "Use Zillow, Apartments.com, university housing board",
        uk: "Use Rightmove, SpareRoom, Zoopla",
        japan: "Use GaijinPot Apartments, Real Estate Japan, university co-op",
        australia: "Use Domain, Flatmates.com.au, Gumtree",
        canada: "Use Kijiji, PadMapper, university housing services",
        netherlands: "Use Kamernet, Pararius, HousingAnywhere",
        thailand: "Use DDproperty, Hipflat, Facebook groups",
    };
    return sites[countryId] || "Search online housing platforms and university housing services";
};

// Departure items
const getDepartureItems = (countryId, config) => {
    return [
        { id: "dep-1", title: "Book flights", description: "Book early for better prices, consider flexible tickets", priority: "high", timeframe: "2-3 months before" },
        { id: "dep-2", title: "Arrange airport pickup", description: "Ask university buddy program or book transfer service", priority: "low", timeframe: "2-4 weeks before" },
        { id: "dep-3", title: "Pack wisely", description: `Bring essentials, adapters (${config.plugType} plug), weather-appropriate clothes`, priority: "medium", timeframe: "1-2 weeks before" },
        { id: "dep-4", title: "Copy important documents", description: "Make digital and physical copies of all important documents", priority: "high", timeframe: "1 week before" },
        { id: "dep-5", title: "Inform bank about travel", description: "Notify your bank to avoid card blocks abroad", priority: "medium", timeframe: "1 week before" },
        { id: "dep-6", title: "Download essential apps", description: `Get ${config.apps?.join(', ') || 'useful local apps'}, Google Maps offline`, priority: "low", timeframe: "Before departure" },
        { id: "dep-7", title: "Get local SIM/eSIM", description: "Research mobile providers in your destination", priority: "medium", timeframe: "Before/after arrival" },
    ];
};

// Arrival items
const getArrivalItems = (countryId, config) => {
    const items = [];

    // Registration requirements vary by country
    if (config.registration) {
        items.push({
            id: "arr-1",
            title: `Complete ${config.registration.name}`,
            description: `Register at ${config.registration.office} within ${config.registration.deadline}`,
            priority: "high",
            timeframe: `Within ${config.registration.deadline}`
        });
    } else if (countryId === 'thailand' && config.tm30) {
        items.push({ id: "arr-1", title: `Complete ${config.tm30.name}`, description: `${config.tm30.description} within ${config.tm30.deadline}`, priority: "high", timeframe: "Within 24 hours" });
    } else {
        items.push({ id: "arr-1", title: "Register your address", description: "Register with local authorities if required", priority: "high", timeframe: "First 2 weeks" });
    }

    items.push(
        { id: "arr-2", title: "Open local bank account", description: "Open a bank account for local transactions", priority: "high", timeframe: "First 2 weeks" },
        { id: "arr-3", title: "Activate health insurance", description: "Confirm enrollment with your insurance provider", priority: "high", timeframe: "First week" },
        { id: "arr-4", title: "Complete university enrollment", description: "Finalize enrollment, get student ID", priority: "high", timeframe: "As per university timeline" },
        { id: "arr-5", title: "Get student transport card", description: "Set up local transport card or pass", priority: "medium", timeframe: "After enrollment" },
        { id: "arr-6", title: "Attend orientation week", description: "Don't miss intro events and campus tours", priority: "medium", timeframe: "First week" }
    );

    // Country-specific post-arrival
    if (config.residencePermit) {
        items.push({ id: "arr-7", title: `Apply for ${config.residencePermit.name}`, description: `Visit ${config.residencePermit.office} to get residence permit`, priority: "high", timeframe: "Within first 3 months" });
    } else if (countryId === 'japan' && config.residenceCard) {
        items.push({ id: "arr-7", title: `Get ${config.residenceCard.name}`, description: `${config.residenceCard.description} - received at airport`, priority: "high", timeframe: "Upon arrival" });
    } else if (countryId === 'netherlands' && config.bsn) {
        items.push({ id: "arr-7", title: `Obtain ${config.bsn.name}`, description: `${config.bsn.description} - needed for banking and work`, priority: "high", timeframe: "First 2 weeks" });
    } else if (countryId === 'thailand' && config.ninetyDayReport) {
        items.push({ id: "arr-7", title: `Set reminder for ${config.ninetyDayReport.name}`, description: config.ninetyDayReport.description, priority: "medium", timeframe: "Every 90 days" });
    }

    return items;
};

// Generic checklist for unknown countries
const getGenericChecklist = () => [
    {
        id: "language",
        title: "Language Preparation",
        icon: "🗣️",
        description: "Master the language requirements for your program",
        items: [
            { id: "lang-1", title: "Check language requirements", description: "Determine required language (IELTS/TOEFL/local language)", priority: "high", timeframe: "12+ months before" },
            { id: "lang-2", title: "Take language test", description: "Complete required proficiency exams", priority: "high", timeframe: "4-6 months before" },
        ],
    },
    {
        id: "documents",
        title: "Documents & Certificates",
        icon: "📄",
        description: "Prepare required documents",
        items: [
            { id: "doc-1", title: "Get passport", description: "Ensure passport is valid 6+ months beyond stay", priority: "high", timeframe: "12+ months before" },
            { id: "doc-2", title: "Gather transcripts & certificates", description: "Get official academic documents", priority: "high", timeframe: "6-8 months before" },
        ],
    },
    // ... simplified generic versions of other categories
];

// Export functions
export const getChecklistForCountry = (countryId) => {
    return generateChecklistForCountry(countryId);
};

export const getCountryConfig = (countryId) => {
    return countryConfig[countryId] || null;
};

// For backwards compatibility - returns Germany checklist by default
export const checklistCategories = generateChecklistForCountry('germany');

export const getTotalItems = (categories = checklistCategories) => {
    return categories.reduce((total, cat) => total + cat.items.length, 0);
};

export const getCompletedCount = (completedItems) => {
    return Object.values(completedItems).filter(Boolean).length;
};

export const getProgressPercentage = (completedItems, categories = checklistCategories) => {
    const total = getTotalItems(categories);
    const completed = getCompletedCount(completedItems);
    return Math.round((completed / total) * 100);
};

export default checklistCategories;
