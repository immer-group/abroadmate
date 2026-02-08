import { createContext, useContext, useState, useEffect } from 'react';

// Available countries with their details
export const countries = [
    { id: 'germany', name: 'Germany', flag: '🇩🇪', code: 'DE' },
    { id: 'usa', name: 'USA', flag: '🇺🇸', code: 'US' },
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
    { id: 'thailand', name: 'Thailand', flag: '🇹🇭', code: 'TH' },
    { id: 'japan', name: 'Japan', flag: '🇯🇵', code: 'JP' },
    { id: 'australia', name: 'Australia', flag: '🇦🇺', code: 'AU' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
];

// Available program types
export const programTypes = [
    { id: 'degree', name: 'Degree Program', icon: '🎓', description: 'Full degree (Bachelor/Master/PhD)' },
    { id: 'summer', name: 'Summer Program', icon: '☀️', description: '3-6 months intensive courses' },
    { id: 'exchange', name: 'Exchange', icon: '🔄', description: 'Semester/year exchange programs' },
    { id: 'internship', name: 'Internship', icon: '💼', description: 'Work experience abroad' },
];

const CountryContext = createContext();

export function CountryProvider({ children }) {
    const [selectedCountry, setSelectedCountry] = useState(() => {
        const saved = localStorage.getItem('abroadmate-country');
        return saved ? JSON.parse(saved) : null;
    });

    const [selectedProgram, setSelectedProgram] = useState(() => {
        const saved = localStorage.getItem('abroadmate-program');
        return saved ? JSON.parse(saved) : programTypes[0]; // Default to degree
    });

    useEffect(() => {
        if (selectedCountry) {
            localStorage.setItem('abroadmate-country', JSON.stringify(selectedCountry));
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedProgram) {
            localStorage.setItem('abroadmate-program', JSON.stringify(selectedProgram));
        }
    }, [selectedProgram]);

    const getCountryById = (id) => countries.find(c => c.id === id);
    const getProgramById = (id) => programTypes.find(p => p.id === id);

    const resetSelection = () => {
        setSelectedCountry(null);
        localStorage.removeItem('abroadmate-country');
    };

    return (
        <CountryContext.Provider value={{
            countries,
            programTypes,
            selectedCountry,
            selectedProgram,
            setSelectedCountry,
            setSelectedProgram,
            getCountryById,
            getProgramById,
            resetSelection,
        }}>
            {children}
        </CountryContext.Provider>
    );
}

export function useCountry() {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error('useCountry must be used within a CountryProvider');
    }
    return context;
}

export default CountryContext;
