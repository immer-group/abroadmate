import { useCountry } from '../context/CountryContext';
import './Hero.css';

function Hero() {
    const { selectedCountry, selectedProgram, countries } = useCountry();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            '--delay': `${Math.random() * 5}s`,
                            '--duration': `${15 + Math.random() * 10}s`,
                            '--x': `${Math.random() * 100}%`,
                            '--size': `${2 + Math.random() * 4}px`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="hero-content">
                {/* Main headline - simple and clear */}
                <h1 className="hero-title animate-fade-in">
                    🌍 Want to <span className="text-gradient">Study Abroad?</span>
                </h1>

                <p className="hero-description animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    We'll help you! Pick a country → Get AI-matched universities → Follow the checklist
                </p>

                {/* Show current selection or prompt to start */}
                {selectedCountry ? (
                    <div className="hero-selected animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="selected-badge">
                            <span className="selected-flag">{selectedCountry.flag}</span>
                            <div className="selected-info">
                                <span className="selected-label">You selected</span>
                                <span className="selected-value">
                                    {selectedProgram?.name || 'Study'} in {selectedCountry.name}
                                </span>
                            </div>
                        </div>
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => scrollToSection('country-selector')}
                        >
                            Change
                        </button>
                    </div>
                ) : (
                    <div className="hero-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <p className="start-hint">Pick a destination to get started 👇</p>
                        <div className="country-quick-pick">
                            {countries.slice(0, 4).map((country) => (
                                <button
                                    key={country.id}
                                    className="quick-country-btn"
                                    onClick={() => scrollToSection('country-selector')}
                                    title={country.name}
                                >
                                    {country.flag}
                                </button>
                            ))}
                            <button
                                className="quick-country-btn more"
                                onClick={() => scrollToSection('country-selector')}
                            >
                                +{countries.length - 4}
                            </button>
                        </div>
                    </div>
                )}

                {/* Single clear CTA */}
                <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <button
                        className="btn btn-primary hero-btn-main"
                        onClick={() => scrollToSection(selectedCountry ? 'checklist' : 'country-selector')}
                    >
                        {selectedCountry ? (
                            <>📋 View Preparation Checklist</>
                        ) : (
                            <>🚀 Get Started!</>
                        )}
                    </button>
                </div>

                {/* Features - simple icons */}
                <div className="hero-features animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="feature-item">
                        <span className="feature-icon">🌍</span>
                        <span className="feature-text">{countries.length} Countries</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🤖</span>
                        <span className="feature-text">AI Matching</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">📋</span>
                        <span className="feature-text">Step-by-step Guide</span>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <button
                    className="scroll-indicator"
                    onClick={() => scrollToSection('country-selector')}
                    aria-label="Scroll to country selector"
                >
                    <span className="scroll-arrow">↓</span>
                </button>
            </div>
        </section>
    );
}

export default Hero;
