// src/components/forms/PekerjaanForm.jsx
import React from 'react';
import { PlusIcon, TrashIcon } from '../../icons/Icons';

/**
 * Form for work specifications (pekerjaan) - supports multiple items
 */
const PekerjaanForm = ({ items, onChange, onAdd, onDelete, error = null }) => {
    return (
        <>
            <div className="pekerjaan-list">
                {items.map((item, index) => (
                    <div key={index} className="pekerjaan-item">
                        <span className="pekerjaan-number">{index + 1}.</span>
                        <input
                            type="text"
                            className="pekerjaan-input"
                            value={item}
                            onChange={(e) => onChange(index, e.target.value)}
                            placeholder="Deskripsi pekerjaan..."
                        />
                        <button
                            className="btn-delete"
                            onClick={() => onDelete(index)}
                            disabled={items.length === 1}
                            type="button"
                        >
                            <TrashIcon />
                        </button>
                    </div>
                ))}
            </div>
            {error && <span className="error-message">{error}</span>}
            <button className="btn-add" onClick={onAdd} type="button">
                <PlusIcon />
                Tambah Pekerjaan
            </button>
        </>
    );
};

export default PekerjaanForm;
