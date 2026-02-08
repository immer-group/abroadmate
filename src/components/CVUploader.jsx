import { useState, useCallback } from 'react';
import './CVUploader.css';

function CVUploader({ onFileSelect, isAnalyzing }) {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragIn = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragging(true);
        }
    }, []);

    const handleDragOut = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const validateFile = (file) => {
        const allowedTypes = ['application/pdf', 'text/plain', 'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (!allowedTypes.includes(file.type)) {
            setError('Please upload a PDF, DOC, DOCX, or TXT file');
            return false;
        }

        if (file.size > maxSize) {
            setError('File size must be less than 10MB');
            return false;
        }

        setError('');
        return true;
    };

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const droppedFile = e.dataTransfer.files[0];
            if (validateFile(droppedFile)) {
                setFile(droppedFile);
                onFileSelect(droppedFile);
            }
            e.dataTransfer.clearData();
        }
    }, [onFileSelect]);

    const handleFileInput = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && validateFile(selectedFile)) {
            setFile(selectedFile);
            onFileSelect(selectedFile);
        }
    };

    const removeFile = () => {
        setFile(null);
        setError('');
        onFileSelect(null);
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    return (
        <div className="cv-uploader">
            {!file ? (
                <div
                    className={`upload-zone ${isDragging ? 'dragging' : ''}`}
                    onDragEnter={handleDragIn}
                    onDragLeave={handleDragOut}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <div className="upload-icon">📄</div>
                    <h3 className="upload-title">Upload Your CV</h3>
                    <p className="upload-description">
                        Drag and drop your CV here, or click to browse
                    </p>
                    <p className="upload-formats">
                        Supported formats: PDF, DOC, DOCX, TXT (max 10MB)
                    </p>
                    <label className="upload-button">
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={handleFileInput}
                            hidden
                        />
                        <span className="btn btn-primary">
                            <span>📎</span>
                            Choose File
                        </span>
                    </label>
                </div>
            ) : (
                <div className="file-preview">
                    <div className="file-info">
                        <div className="file-icon">📄</div>
                        <div className="file-details">
                            <span className="file-name">{file.name}</span>
                            <span className="file-size">{formatFileSize(file.size)}</span>
                        </div>
                        {!isAnalyzing && (
                            <button
                                className="remove-file"
                                onClick={removeFile}
                                aria-label="Remove file"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    {isAnalyzing && (
                        <div className="analyzing-indicator">
                            <div className="analyzing-spinner"></div>
                            <span>AI is analyzing your CV...</span>
                        </div>
                    )}
                </div>
            )}

            {error && (
                <div className="upload-error">
                    <span>⚠️</span>
                    {error}
                </div>
            )}
        </div>
    );
}

export default CVUploader;
