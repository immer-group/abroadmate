import { useCountry } from '../context/CountryContext';
import { getUniversitiesByProgramType, getAllUniversities } from '../data/universities';
import UniversityCard from './UniversityCard';
import './Universities.css';

function Universities() {
    const { selectedCountry, selectedProgram } = useCountry();

    // Get universities based on selection
    const universities = selectedCountry
        ? getUniversitiesByProgramType(selectedCountry.id, selectedProgram?.id)
        : getAllUniversities().slice(0, 6); // Show sample if no country selected

    // Dynamic title based on selection
    const getTitle = () => {
        if (selectedCountry && selectedProgram) {
            return `${selectedProgram.icon} ${selectedProgram.name}s in ${selectedCountry.name}`;
        }
        if (selectedCountry) {
            return `Universities in ${selectedCountry.name}`;
        }
        return 'Featured Universities';
    };

    const getDescription = () => {
        if (selectedCountry) {
            return `Explore top universities in ${selectedCountry.name} offering world-class education for international students.`;
        }
        return 'Select a destination country to see universities available for your program type.';
    };

    return (
        <section id="universities" className="universities-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        {selectedCountry ? selectedCountry.flag : '🏛️'} Directory
                    </span>
                    <h2 className="section-title">
                        {selectedCountry ? (
                            <>
                                {selectedCountry.flag} <span className="text-gradient">{getTitle()}</span>
                            </>
                        ) : (
                            <>
                                Featured <span className="text-gradient">Universities</span>
                            </>
                        )}
                    </h2>
                    <p className="section-description">
                        {getDescription()}
                    </p>
                </div>

                {universities.length > 0 ? (
                    <div className="universities-grid">
                        {universities.map((university) => (
                            <UniversityCard
                                key={university.id}
                                university={university}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-universities">
                        <span className="no-results-icon">🔍</span>
                        <p>No universities found for this selection.</p>
                        <p className="hint">Try selecting a different program type or country.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Universities;

