import { useCountry } from '../context/CountryContext';
import './Welcome.css';

function Welcome() {
    const { selectedCountry } = useCountry();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const steps = [
        {
            number: '1',
            icon: '📋',
            title: 'Follow the Checklist',
            description: 'Track your progress through 8 essential steps',
            action: () => scrollToSection('checklist'),
            buttonText: 'View Checklist'
        },
        {
            number: '2',
            icon: '🤖',
            title: 'Get AI Recommendations',
            description: 'Upload your CV and find matching universities',
            action: () => scrollToSection('ai-matcher'),
            buttonText: 'Try AI Matcher'
        },
        {
            number: '3',
            icon: '🎓',
            title: 'Explore Universities',
            description: selectedCountry
                ? `Browse top ${selectedCountry.name} universities and programs`
                : 'Browse universities from 8+ countries',
            action: () => scrollToSection('universities'),
            buttonText: 'Browse Unis'
        }
    ];

    return (
        <section className="welcome-section">
            <div className="container">
                <div className="welcome-header">
                    <span className="welcome-wave">👋</span>
                    <h2 className="welcome-title">How Can We Help You?</h2>
                    <p className="welcome-subtitle">
                        Choose where you want to start your journey
                    </p>
                </div>

                <div className="welcome-cards">
                    {steps.map((step) => (
                        <button
                            key={step.number}
                            className="welcome-card"
                            onClick={step.action}
                        >
                            <div className="card-number">{step.number}</div>
                            <div className="card-icon">{step.icon}</div>
                            <h3 className="card-title">{step.title}</h3>
                            <p className="card-description">{step.description}</p>
                            <span className="card-link">
                                {step.buttonText}
                                <span className="arrow">→</span>
                            </span>
                        </button>
                    ))}
                </div>

                <div className="welcome-tip">
                    <span className="tip-icon">💡</span>
                    <p>
                        <strong>Pro tip:</strong> Start with the checklist to understand what you need,
                        then use AI Matcher to find your perfect university!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Welcome;
