import { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">
                    <span className="logo-icon">🌍</span>
                    <span className="logo-text">AbroadMate</span>
                </a>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('hero')}
                    >
                        Home
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('checklist')}
                    >
                        Checklist
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('ai-matcher')}
                    >
                        AI Matcher
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('universities')}
                    >
                        Universities
                    </button>
                </nav>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
