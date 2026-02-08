// src/components/ActionButtons.jsx
import React from 'react';
import { RotateIcon, DownloadIcon, LoadingIcon } from '../icons/Icons';

/**
 * Clean, minimal action buttons for Reset and Download
 * Positioned above preview on desktop
 */
const ActionButtons = ({ onReset, onDownload, isLoading = false }) => {
  return (
    <div className="action-buttons-bar">
      <button
        className="action-btn action-btn-reset"
        onClick={onReset}
        disabled={isLoading}
        title="Reset semua data"
      >
        <RotateIcon />
        <span>Reset</span>
      </button>
      <button
        className="action-btn action-btn-download"
        onClick={onDownload}
        disabled={isLoading}
        title="Download sebagai PDF"
      >
        {isLoading ? (
          <>
            <LoadingIcon />
            <span>Loading...</span>
          </>
        ) : (
          <>
            <DownloadIcon />
            <span>Download PDF</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ActionButtons;