import { useState } from 'react';
import { useCountry } from '../context/CountryContext';
import CVUploader from './CVUploader';
import UniversityCard from './UniversityCard';
import { extractTextFromFile, analyzeCV } from '../services/geminiService';
import './AIAnalysis.css';

function AIAnalysis() {
    const { selectedCountry } = useCountry();
    const [file, setFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const handleFileSelect = (selectedFile) => {
        setFile(selectedFile);
        setResult(null);
        setError('');
    };

    const handleAnalyze = async () => {
        if (!file) {
            setError('Please upload your CV first');
            return;
        }

        setIsAnalyzing(true);
        setError('');
        setCurrentStep(2);

        try {
            const fileContent = await extractTextFromFile(file);
            const analysisResult = await analyzeCV(fileContent, selectedCountry?.id);
            setResult(analysisResult);
            setCurrentStep(3);
        } catch (err) {
            console.error('Analysis failed:', err);
            setError(err.message || 'Failed to analyze CV. Please try again.');
            setCurrentStep(1);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setResult(null);
        setError('');
        setCurrentStep(1);
    };

    const steps = [
        { number: 1, label: 'Upload CV', icon: '📄' },
        { number: 2, label: 'Analyzing', icon: '🤖' },
        { number: 3, label: 'Results', icon: '🎯' }
    ];

    const getDescription = () => {
        if (selectedCountry) {
            return `Upload your CV and our AI will match you with the best universities in ${selectedCountry.name} for your profile.`;
        }
        return 'Upload your CV and our AI will match you with the best universities for your profile.';
    };

    return (
        <section id="ai-matcher" className="ai-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">🤖 AI-Powered</span>
                    <h2 className="section-title">
                        Find Your <span className="text-gradient">Perfect University</span>
                    </h2>
                    <p className="section-description">
                        {getDescription()}
                    </p>
                </div>

                {/* Step Indicator */}
                <div className="step-indicator-container">
                    <div className="step-indicator-line">
                        <div
                            className="step-indicator-progress"
                            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                        />
                    </div>
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className={`step-indicator-item ${currentStep >= step.number ? 'active' : ''} ${currentStep === step.number ? 'current' : ''}`}
                        >
                            <div className="step-indicator-circle">
                                {currentStep > step.number ? '✓' : step.icon}
                            </div>
                            <span className="step-indicator-label">{step.label}</span>
                        </div>
                    ))}
                </div>

                {!result ? (
                    <div className="ai-input-container">
                        {/* Step 1: Upload CV */}
                        <div className={`ai-step ${currentStep >= 1 ? 'visible' : ''}`}>
                            <CVUploader
                                onFileSelect={handleFileSelect}
                                isAnalyzing={isAnalyzing}
                            />
                        </div>

                        {error && (
                            <div className="error-message">
                                <span>⚠️</span> {error}
                            </div>
                        )}

                        <button
                            className="btn btn-primary analyze-btn"
                            onClick={handleAnalyze}
                            disabled={!file || isAnalyzing}
                        >
                            {isAnalyzing ? (
                                <>
                                    <span className="spinner"></span>
                                    AI is analyzing your CV...
                                </>
                            ) : (
                                <>
                                    <span>✨</span>
                                    Find My Universities
                                </>
                            )}
                        </button>
                    </div>
                ) : (
                    <div className="ai-results">
                        <div className="results-header">
                            <div className="results-success">
                                <span className="success-icon">🎉</span>
                                <h3>Analysis Complete!</h3>
                            </div>
                            <button className="btn btn-secondary" onClick={handleReset}>
                                <span>🔄</span>
                                Start Over
                            </button>
                        </div>

                        {result.profile && (
                            <div className="profile-summary card">
                                <h4 className="summary-title">📋 Your Profile Summary</h4>

                                <div className="profile-grid">
                                    <div className="profile-item">
                                        <span className="item-label">🎓 Education</span>
                                        <p>{result.profile.education}</p>
                                    </div>

                                    <div className="profile-item">
                                        <span className="item-label">💼 Experience</span>
                                        <p>{result.profile.experience}</p>
                                    </div>

                                    <div className="profile-item">
                                        <span className="item-label">🛠️ Skills</span>
                                        <div className="tags">
                                            {result.profile.skills?.map((skill, i) => (
                                                <span key={i} className="tag skill-tag">{skill}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="profile-item">
                                        <span className="item-label">💡 Interests</span>
                                        <div className="tags">
                                            {result.profile.interests?.map((interest, i) => (
                                                <span key={i} className="tag interest-tag">{interest}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {result.profile.languages && (
                                        <div className="profile-item">
                                            <span className="item-label">🗣️ Languages</span>
                                            <div className="tags">
                                                {result.profile.languages?.map((lang, i) => (
                                                    <span key={i} className="tag lang-tag">{lang}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {result.profile.strengths && (
                                    <div className="strengths-summary">
                                        <span className="item-label">⭐ Key Strengths</span>
                                        <p>{result.profile.strengths}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="matches-section">
                            <h4 className="matches-title">🎯 Your Top University Matches</h4>
                            <div className="matches-grid">
                                {result.matches?.map((match, index) => (
                                    <UniversityCard
                                        key={index}
                                        university={match.university}
                                        matchScore={match.score}
                                        matchReason={match.reason}
                                        matchedPrograms={match.matchedPrograms}
                                    />
                                ))}
                            </div>
                        </div>

                        {result.advice && (
                            <div className="advice-section card">
                                <h4 className="advice-title">💡 Personalized Advice</h4>
                                <p className="advice-text">{result.advice}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default AIAnalysis;
