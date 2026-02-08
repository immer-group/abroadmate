import { useState, useEffect } from 'react';
import { checklistCategories, getProgressPercentage, getTotalItems, getCompletedCount } from '../data/checklistItems';
import './Checklist.css';

function Checklist() {
    const [completedItems, setCompletedItems] = useState(() => {
        const saved = localStorage.getItem('gerney-checklist');
        return saved ? JSON.parse(saved) : {};
    });
    const [expandedCategory, setExpandedCategory] = useState(null);

    useEffect(() => {
        localStorage.setItem('gerney-checklist', JSON.stringify(completedItems));
    }, [completedItems]);

    const toggleItem = (itemId) => {
        setCompletedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const toggleCategory = (categoryId) => {
        setExpandedCategory(prev => prev === categoryId ? null : categoryId);
    };

    const getCategoryProgress = (category) => {
        const completed = category.items.filter(item => completedItems[item.id]).length;
        return Math.round((completed / category.items.length) * 100);
    };

    const progress = getProgressPercentage(completedItems);
    const totalItems = getTotalItems();
    const completedCount = getCompletedCount(completedItems);

    return (
        <section id="checklist" className="checklist-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">📋 Preparation Guide</span>
                    <h2 className="section-title">
                        Your Complete <span className="text-gradient">Study Abroad Checklist</span>
                    </h2>
                    <p className="section-description">
                        Everything you need to prepare for studying in Germany, organized by category and timeline.
                    </p>
                </div>

                <div className="progress-overview">
                    <div className="progress-card">
                        <div className="progress-header">
                            <div className="progress-info">
                                <span className="progress-label">Overall Progress</span>
                                <span className="progress-value">{progress}%</span>
                            </div>
                            <span className="progress-count">{completedCount} of {totalItems} completed</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="checklist-categories">
                    {checklistCategories.map((category) => {
                        const categoryProgress = getCategoryProgress(category);
                        const isExpanded = expandedCategory === category.id;

                        return (
                            <div
                                key={category.id}
                                className={`category-card ${isExpanded ? 'expanded' : ''}`}
                            >
                                <button
                                    className="category-header"
                                    onClick={() => toggleCategory(category.id)}
                                    aria-expanded={isExpanded}
                                >
                                    <div className="category-info">
                                        <span className="category-icon">{category.icon}</span>
                                        <div className="category-text">
                                            <h3 className="category-title">{category.title}</h3>
                                            <p className="category-description">{category.description}</p>
                                        </div>
                                    </div>
                                    <div className="category-meta">
                                        <div className="category-progress">
                                            <div className="mini-progress-bar">
                                                <div
                                                    className="mini-progress-fill"
                                                    style={{ width: `${categoryProgress}%` }}
                                                ></div>
                                            </div>
                                            <span className="category-progress-text">{categoryProgress}%</span>
                                        </div>
                                        <span className={`category-arrow ${isExpanded ? 'rotated' : ''}`}>
                                            ▼
                                        </span>
                                    </div>
                                </button>

                                {isExpanded && (
                                    <div className="category-items">
                                        {category.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className={`checklist-item ${completedItems[item.id] ? 'completed' : ''}`}
                                            >
                                                <label className="item-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        checked={completedItems[item.id] || false}
                                                        onChange={() => toggleItem(item.id)}
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <div className="item-content">
                                                    <h4 className="item-title">{item.title}</h4>
                                                    <p className="item-description">{item.description}</p>
                                                    <div className="item-meta">
                                                        <span className={`item-priority priority-${item.priority}`}>
                                                            {item.priority}
                                                        </span>
                                                        <span className="item-timeframe">
                                                            ⏱️ {item.timeframe}
                                                        </span>
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

export default Checklist;
