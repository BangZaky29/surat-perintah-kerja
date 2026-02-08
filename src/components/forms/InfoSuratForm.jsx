// src/components/forms/InfoSuratForm.jsx
import React from 'react';
import FormInput from './FormInput';
import SignaturePad from './SignaturePad';
import { FileTextIcon, MapPinIcon, CalendarIcon, ImageIcon } from '../../icons/Icons';

/**
 * Form for letter information (info surat)
 * Includes: PT name, signature, stamp, kop surat, letter number, place, date
 */
const InfoSuratForm = ({ data, onChange, errors = {} }) => {
    const handleFileUpload = (field) => (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => onChange(field, reader.result);
        reader.readAsDataURL(file);
    };

    return (
        <>
            <FormInput
                label="Nama PT"
                icon={FileTextIcon}
                value={data.namaPT}
                onChange={(e) => onChange('namaPT', e.target.value)}
                placeholder="Contoh: PT. Dirgantara Engineering Services"
                error={errors.namaPT}
            />

            {/* Kop Surat (Header Image) */}
            <div className="form-group">
                <label className="form-label">
                    Kop Surat (Header Image)
                    <span className="label-hint">Opsional - Akan muncul di bagian atas surat</span>
                </label>
                <div className="input-wrapper file-input-wrapper">
                    <ImageIcon />
                    <input
                        type="file"
                        className="form-input"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={handleFileUpload('kopSurat')}
                    />
                </div>
                {data.kopSurat && (
                    <div className="kop-surat-preview">
                        <img src={data.kopSurat} alt="Kop Surat" />
                        <button
                            type="button"
                            className="btn-remove-preview"
                            onClick={() => onChange('kopSurat', '')}
                        >
                            Hapus
                        </button>
                    </div>
                )}
            </div>

            {/* Digital Signature */}
            <div className="form-group">
                <label className="form-label">TTD Online</label>
                <SignaturePad
                    value={data.ttd}
                    onChange={(val) => onChange('ttd', val)}
                />
            </div>

            {/* Stamp Upload */}
            <div className="form-group">
                <label className="form-label">Upload Stempel (PNG)</label>
                <div className="input-wrapper file-input-wrapper">
                    <FileTextIcon />
                    <input
                        type="file"
                        className="form-input"
                        accept="image/png"
                        onChange={handleFileUpload('stempel')}
                    />
                </div>
                {data.stempel && (
                    <div className="stempel-preview-container">
                        <img src={data.stempel} alt="Stempel" className="stempel-preview" />
                        <button
                            type="button"
                            className="btn-remove-preview"
                            onClick={() => onChange('stempel', '')}
                        >
                            Hapus
                        </button>
                    </div>
                )}
            </div>

            <FormInput
                label="Nomor Surat"
                icon={FileTextIcon}
                value={data.nomorSurat}
                onChange={(e) => onChange('nomorSurat', e.target.value)}
                placeholder="Contoh: 120 / SP / K / 2021"
                required
                error={errors.nomorSurat}
            />

            <FormInput
                label="Tempat Dikeluarkan"
                icon={MapPinIcon}
                value={data.tempat}
                onChange={(e) => onChange('tempat', e.target.value)}
                placeholder="Contoh: Bandung"
                required
                error={errors.tempat}
            />

            <FormInput
                label="Tanggal"
                icon={CalendarIcon}
                value={data.tanggal}
                onChange={(e) => onChange('tanggal', e.target.value)}
                type="date"
                required
                error={errors.tanggal}
            />
        </>
    );
};

export default InfoSuratForm;
