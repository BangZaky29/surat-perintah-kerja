// src/components/ActionButtons.jsx
import React from 'react';
import { RotateIcon, DownloadIcon } from '../icons/Icons';

const ActionButtons = ({ onReset, onDownload }) => {
  return (
    <div className="action-buttons">
      <div className="button-group">
        <button className="btn btn-reset" onClick={onReset}>
          <RotateIcon />
          Reset Data
        </button>
        <button className="btn btn-download" onClick={onDownload}>
          <DownloadIcon />
          Download PDF
        </button>
      </div>
      <p className="action-info">Data otomatis tersimpan di browser Anda</p>
    </div>
  );
};

export default ActionButtons;