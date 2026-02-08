// src/components/forms/PenerimaForm.jsx
import React from 'react';
import FormInput from './FormInput';
import { UserIcon, BriefcaseIcon, MapPinIcon, PlusIcon, TrashIcon } from '../../icons/Icons';

/**
 * Form for recipients (penerima) data - supports multiple recipients
 */
const PenerimaForm = ({ items, onChange, onAdd, onDelete, errors = [] }) => {
    return (
        <>
            <div className="penerima-list">
                {items.map((data, index) => (
                    <div key={index} className="penerima-item">
                        <div className="penerima-item-header">
                            <span className="penerima-title">Penerima {index + 1}</span>
                            <button
                                className="btn-delete"
                                onClick={() => onDelete(index)}
                                disabled={items.length === 1}
                                type="button"
                            >
                                <TrashIcon />
                            </button>
                        </div>
                        <FormInput
                            label="Nama Lengkap"
                            icon={UserIcon}
                            value={data.nama}
                            onChange={(e) => onChange(index, 'nama', e.target.value)}
                            placeholder="Contoh: Ruslan Wijaya"
                            required
                            error={errors[index]?.nama}
                        />
                        <FormInput
                            label="Jabatan"
                            icon={BriefcaseIcon}
                            value={data.jabatan}
                            onChange={(e) => onChange(index, 'jabatan', e.target.value)}
                            placeholder="Contoh: Engineer L/A"
                            required
                            error={errors[index]?.jabatan}
                        />
                        <FormInput
                            label="Alamat"
                            icon={MapPinIcon}
                            value={data.alamat}
                            onChange={(e) => onChange(index, 'alamat', e.target.value)}
                            placeholder="Contoh: Jl. Tirta Sari No.9 Sarijadi, Bandung"
                            required
                            error={errors[index]?.alamat}
                        />
                    </div>
                ))}
            </div>
            <button className="btn-add" onClick={onAdd} type="button">
                <PlusIcon />
                Tambah Penerima
            </button>
        </>
    );
};

export default PenerimaForm;
