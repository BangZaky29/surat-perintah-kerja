// src/components/MobileViewToggle.jsx
import React from 'react';
import { EyeIcon, FormIcon } from '../icons/Icons';

/**
 * Floating action button for mobile to toggle between Form and Preview views
 * Only visible on mobile screens (< 1024px)
 */
const MobileViewToggle = ({ showPreview, onToggle }) => {
    return (
        <button
            className="mobile-view-toggle no-print"
            onClick={onToggle}
            aria-label={showPreview ? 'Tampilkan Form' : 'Tampilkan Preview'}
        >
            {showPreview ? <FormIcon /> : <EyeIcon />}
            <span className="toggle-label">
                {showPreview ? 'Form' : 'Preview'}
            </span>
        </button>
    );
};

export default MobileViewToggle;
