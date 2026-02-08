// src/components/ConfirmDialog.jsx
import React from 'react';
import { XIcon } from '../icons/Icons';

/**
 * Custom confirm dialog to replace browser's native confirm()
 */
const ConfirmDialog = ({
    isOpen,
    title = 'Konfirmasi',
    message,
    onConfirm,
    onCancel,
    confirmText = 'Ya',
    cancelText = 'Batal'
}) => {
    if (!isOpen) return null;

    return (
        <div className="confirm-overlay" onClick={onCancel}>
            <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="confirm-header">
                    <h3>{title}</h3>
                    <button className="confirm-close" onClick={onCancel}>
                        <XIcon />
                    </button>
                </div>
                <div className="confirm-body">
                    <p>{message}</p>
                </div>
                <div className="confirm-actions">
                    <button className="btn-confirm-cancel" onClick={onCancel}>
                        {cancelText}
                    </button>
                    <button className="btn-confirm-ok" onClick={onConfirm}>
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
