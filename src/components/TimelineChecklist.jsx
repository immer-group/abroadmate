import { useState, useEffect, useMemo } from 'react';
import { useCountry } from '../context/CountryContext';
import { getChecklistForCountry, getProgressPercentage, getTotalItems, getCompletedCount } from '../data/checklistItems';
import './TimelineChecklist.css';

function TimelineChecklist() {
    const { selectedCountry, selectedProgram } = useCountry();

    // Get country-specific checklist
    const checklistCategories = useMemo(() => {
        return getChecklistForCountry(selectedCountry?.id || 'germany');
    }, [selectedCountry?.id]);

    // Use country-specific localStorage key
    const storageKey = `abroadmate-checklist-${selectedCountry?.id || 'default'}`;

    const [completedItems, setCompletedItems] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : {};
    });
    const [activeStep, setActiveStep] = useState(null);

    // Reload completed items when country changes
    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        setCompletedItems(saved ? JSON.parse(saved) : {});
    }, [storageKey]);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(completedItems));
    }, [completedItems, storageKey]);

    const toggleItem = (itemId) => {
        setCompletedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const getCategoryProgress = (category) => {
        const completed = category.items.filter(item => completedItems[item.id]).length;
        return { completed, total: category.items.length };
    };

    const getCategoryStatus = (category) => {
        const { completed, total } = getCategoryProgress(category);
        if (completed === total) return 'complete';
        if (completed > 0) return 'in-progress';
        return 'pending';
    };

    const progress = getProgressPercentage(completedItems, checklistCategories);
    const totalItems = getTotalItems(checklistCategories);
    const completedCount = getCompletedCount(completedItems);

    // Dynamic title based on selection
    const getTitle = () => {
        if (selectedCountry && selectedProgram) {
            return `${selectedProgram.name} in ${selectedCountry.name}`;
        }
        if (selectedCountry) {
            return `Study in ${selectedCountry.name}`;
        }
        return 'Study Abroad';
    };

    return (
        <section id="checklist" className="timeline-section">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="section-badge">
                        {selectedCountry ? `${selectedCountry.flag} Your Journey` : '📋 Your Journey'}
                    </span>
                    <h2 className="section-title">
                        <span className="text-gradient">8 Steps</span> to {getTitle()}
                    </h2>
                    <p className="section-description">
                        Follow this roadmap step-by-step. Click any step to see details.
                    </p>
                </div>

                {/* Progress Overview */}
                <div className="journey-progress">
                    <div className="progress-circle">
                        <svg viewBox="0 0 100 100">
                            <circle className="progress-bg" cx="50" cy="50" r="45" />
                            <circle
                                className="progress-fill"
                                cx="50" cy="50" r="45"
                                strokeDasharray={`${progress * 2.83} 283`}
                            />
                        </svg>
                        <div className="progress-text">
                            <span className="progress-number">{progress}%</span>
                            <span className="progress-label">Complete</span>
                        </div>
                    </div>
                    <div className="progress-stats">
                        <div className="stat-item">
                            <span className="stat-icon">✅</span>
                            <span className="stat-value">{completedCount}</span>
                            <span className="stat-label">Done</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-icon">📝</span>
                            <span className="stat-value">{totalItems - completedCount}</span>
                            <span className="stat-label">Remaining</span>
                        </div>
                    </div>
                </div>

                {/* Timeline Steps */}
                <div className="timeline-container">
                    <div className="timeline-line">
                        <div
                            className="timeline-line-fill"
                            style={{ height: `${progress}%` }}
                        />
                    </div>

                    {checklistCategories.map((category, index) => {
                        const { completed, total } = getCategoryProgress(category);
                        const status = getCategoryStatus(category);
                        const isActive = activeStep === category.id;

                        return (
                            <div
                                key={category.id}
                                className={`timeline-step ${status} ${isActive ? 'active' : ''}`}
                            >
                                <button
                                    className="step-header"
                                    onClick={() => setActiveStep(isActive ? null : category.id)}
                                    aria-expanded={isActive}
                                >
                                    <div className="step-indicator">
                                        <span className="step-number">{index + 1}</span>
                                        {status === 'complete' && <span className="step-check">✓</span>}
                                    </div>
                                    <div className="step-content">
                                        <div className="step-icon">{category.icon}</div>
                                        <div className="step-info">
                                            <h3 className="step-title">{category.title}</h3>
                                            <p className="step-description">{category.description}</p>
                                            <div className="step-progress-bar">
                                                <div
                                                    className="step-progress-fill"
                                                    style={{ width: `${(completed / total) * 100}%` }}
                                                />
                                            </div>
                                            <span className="step-count">{completed}/{total} tasks</span>
                                        </div>
                                    </div>
                                    <span className={`step-arrow ${isActive ? 'open' : ''}`}>
                                        ▼
                                    </span>
                                </button>

                                {isActive && (
                                    <div className="step-items">
                                        {category.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className={`task-item ${completedItems[item.id] ? 'completed' : ''}`}
                                            >
                                                <label className="task-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        checked={completedItems[item.id] || false}
                                                        onChange={() => toggleItem(item.id)}
                                                    />
                                                    <span className="checkmark">
                                                        <svg viewBox="0 0 24 24">
                                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                        </svg>
                                                    </span>
                                                </label>
                                                <div className="task-content">
                                                    <span className="task-title">{item.title}</span>
                                                    <span className="task-description">{item.description}</span>
                                                    <div className="task-meta">
                                                        <span className={`task-priority ${item.priority}`}>
                                                            {item.priority === 'high' ? '🔴' : item.priority === 'medium' ? '🟡' : '🟢'} {item.priority}
                                                        </span>
                                                        <span className="task-timeframe">⏱️ {item.timeframe}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TimelineChecklist;
