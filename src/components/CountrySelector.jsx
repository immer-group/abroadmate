import { useCountry } from '../context/CountryContext';
import './CountrySelector.css';

function CountrySelector() {
    const {
        countries,
        programTypes,
        selectedCountry,
        selectedProgram,
        setSelectedCountry,
        setSelectedProgram,
    } = useCountry();

    const scrollToChecklist = () => {
        const element = document.getElementById('checklist');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="country-selector" className="country-selector">
            <div className="container">
                <div className="selector-header">
                    <h2 className="selector-title">
                        Where do you want to <span className="text-gradient">study?</span>
                    </h2>
                    <p className="selector-subtitle">
                        Select your destination country and program type to get personalized guidance
                    </p>
                </div>

                {/* Program Type Tabs */}
                <div className="program-tabs">
                    {programTypes.map((program) => (
                        <button
                            key={program.id}
                            className={`program-tab ${selectedProgram?.id === program.id ? 'active' : ''}`}
                            onClick={() => setSelectedProgram(program)}
                        >
                            <span className="tab-icon">{program.icon}</span>
                            <span className="tab-name">{program.name}</span>
                        </button>
                    ))}
                </div>

                {/* Country Grid */}
                <div className="country-grid">
                    {countries.map((country) => (
                        <button
                            key={country.id}
                            className={`country-card ${selectedCountry?.id === country.id ? 'selected' : ''}`}
                            onClick={() => setSelectedCountry(country)}
                        >
                            <span className="country-check">✓</span>
                            <span className="country-flag">{country.flag}</span>
                            <span className="country-name">{country.name}</span>
                        </button>
                    ))}
                </div>

                {/* Selection Summary & Start Button */}
                {selectedCountry && (
                    <div className="selection-summary">
                        <div className="summary-card">
                            <span className="summary-flag">{selectedCountry.flag}</span>
                            <span className="summary-text">
                                {selectedProgram?.icon} {selectedProgram?.name} in {selectedCountry.name}
                            </span>
                        </div>
                        <br />
                        <button className="start-btn" onClick={scrollToChecklist}>
                            🚀 Start Your Journey
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default CountrySelector;
