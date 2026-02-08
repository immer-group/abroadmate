import './UniversityCard.css';

function UniversityCard({ university, matchScore, matchReason, matchedPrograms }) {
    return (
        <div className="university-card">
            <div className="card-header">
                <div className="uni-logo">{university.logo}</div>
                <div className="uni-info">
                    <h3 className="uni-name">{university.name}</h3>
                    <p className="uni-location">📍 {university.location}</p>
                </div>
                {matchScore && (
                    <div className="match-score">
                        <span className="score-value">{matchScore}%</span>
                        <span className="score-label">Match</span>
                    </div>
                )}
            </div>

            <p className="uni-description">{university.description}</p>

            {matchReason && (
                <div className="match-reason">
                    <span className="reason-icon">💡</span>
                    <p>{matchReason}</p>
                </div>
            )}

            {matchedPrograms && matchedPrograms.length > 0 && (
                <div className="recommended-programs">
                    <h4 className="programs-title">Recommended Programs</h4>
                    <div className="programs-list">
                        {matchedPrograms.map((program, index) => (
                            <div key={index} className="program-tag">
                                <span className="program-name">{program.name}</span>
                                <span className="program-level">{program.level}</span>
                                <span className="program-language">{program.language}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="uni-strengths">
                <h4 className="strengths-title">Strengths</h4>
                <div className="strengths-tags">
                    {university.strengths.map((strength, index) => (
                        <span key={index} className="strength-tag">{strength}</span>
                    ))}
                </div>
            </div>

            <div className="uni-requirements">
                <h4 className="requirements-title">Requirements</h4>
                <div className="requirements-grid">
                    <div className="requirement">
                        <span className="req-icon">🇩🇪</span>
                        <span className="req-text">{university.requirements.germanLevel}</span>
                    </div>
                    <div className="requirement">
                        <span className="req-icon">🇬🇧</span>
                        <span className="req-text">{university.requirements.englishLevel}</span>
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary uni-link"
                >
                    <span>🌐</span>
                    Visit Website
                </a>
            </div>
        </div>
    );
}

export default UniversityCard;
