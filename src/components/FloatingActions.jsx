// src/components/FloatingActions.jsx
import React from 'react';
import { DownloadIcon, RotateIcon, LoadingIcon } from '../icons/Icons';

/**
 * Floating action buttons for mobile view
 * Positioned in top-right corner, above the view toggle button
 */
const FloatingActions = ({ onDownload, onReset, isLoading }) => {
    return (
        <div className="floating-actions">
            <button
                className="fab fab-reset"
                onClick={onReset}
                disabled={isLoading}
                title="Reset Data"
            >
                <RotateIcon />
                <span className="fab-label">Reset</span>
            </button>
            <button
                className="fab fab-download"
                onClick={onDownload}
                disabled={isLoading}
                title="Download PDF"
            >
                {isLoading ? <LoadingIcon /> : <DownloadIcon />}
                <span className="fab-label">{isLoading ? 'Loading' : 'PDF'}</span>
            </button>
        </div>
    );
};

export default FloatingActions;
