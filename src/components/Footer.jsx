import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <span className="footer-logo">🌍 AbroadMate</span>
                    <p className="footer-tagline">
                        Your AI-powered companion for studying abroad worldwide
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <a href="https://www.daad.de/en/" target="_blank" rel="noopener noreferrer">🇩🇪 Study in Germany</a>
                        <a href="https://www.studyusa.com/" target="_blank" rel="noopener noreferrer">🇺🇸 Study in USA</a>
                        <a href="https://study-uk.britishcouncil.org/" target="_blank" rel="noopener noreferrer">🇬🇧 Study in UK</a>
                        <a href="https://www.studyinjapan.go.jp/en/" target="_blank" rel="noopener noreferrer">🇯🇵 Study in Japan</a>
                    </div>
                    <div className="footer-column">
                        <h4>Tools</h4>
                        <a href="#country-selector">🌍 Choose Destination</a>
                        <a href="#checklist">📋 Preparation Checklist</a>
                        <a href="#ai-matcher">🤖 AI University Matcher</a>
                        <a href="#universities">🎓 University Directory</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} AbroadMate. Built with ❤️ for future students.
                    </p>
                    <p className="disclaimer">
                        This tool provides guidance only. Always verify information with official university sources.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

