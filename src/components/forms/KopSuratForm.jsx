// src/components/forms/KopSuratForm.jsx
import React from 'react';
import FormInput from './FormInput';
import { ImageIcon, BuildingIcon, PhoneIcon, MailIcon, GlobeIcon } from '../../icons/Icons';

/**
 * Kop Surat (Letterhead) Form Component
 * With toggle to enable/disable kop surat
 * Standard format: Logo, Company Name, Address, Phone, Email, Website
 */
const KopSuratForm = ({ data, onChange, errors = {} }) => {
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    const handleToggle = () => {
        onChange({ ...data, enabled: !data.enabled });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            handleChange('logo', reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveLogo = () => {
        handleChange('logo', '');
    };

    return (
        <div className="kop-surat-form">
            {/* Toggle Enable/Disable */}
            <div className="kop-toggle-wrapper">
                <label className="kop-toggle">
                    <input
                        type="checkbox"
                        checked={data.enabled || false}
                        onChange={handleToggle}
                    />
                    <span className="kop-toggle-slider"></span>
                </label>
                <span className="kop-toggle-label">
                    {data.enabled ? 'Kop Surat Aktif' : 'Kop Surat Nonaktif'}
                </span>
            </div>

            {/* Form fields - only show if enabled */}
            {data.enabled && (
                <div className="kop-fields">
                    {/* Logo Upload */}
                    <div className="form-group">
                        <label className="form-label">
                            Logo Perusahaan
                            <span className="label-hint">Format: PNG, JPG (maks 500KB)</span>
                        </label>
                        <div className="file-input-wrapper">
                            <ImageIcon />
                            <input
                                type="file"
                                accept="image/png,image/jpeg,image/jpg"
                                onChange={handleImageUpload}
                                className="form-input"
                            />
                        </div>
                        {data.logo && (
                            <div className="kop-logo-preview">
                                <img src={data.logo} alt="Logo Preview" />
                                <button
                                    type="button"
                                    className="btn-remove-preview"
                                    onClick={handleRemoveLogo}
                                >
                                    Hapus
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Company Name */}
                    <FormInput
                        label="Nama Perusahaan"
                        icon={BuildingIcon}
                        value={data.namaPerusahaan || ''}
                        onChange={(e) => handleChange('namaPerusahaan', e.target.value)}
                        placeholder="PT. CONTOH PERUSAHAAN"
                        error={errors.namaPerusahaan}
                    />

                    {/* Address */}
                    <div className="form-group">
                        <label className="form-label">Alamat Perusahaan</label>
                        <textarea
                            className="form-textarea"
                            value={data.alamat || ''}
                            onChange={(e) => handleChange('alamat', e.target.value)}
                            placeholder="Jl. Contoh No. 123, Kota, Provinsi 12345"
                            rows={2}
                        />
                    </div>

                    {/* Phone */}
                    <FormInput
                        label="Nomor Telepon"
                        icon={PhoneIcon}
                        value={data.telepon || ''}
                        onChange={(e) => handleChange('telepon', e.target.value)}
                        placeholder="(021) 1234567"
                    />

                    {/* Email */}
                    <FormInput
                        label="Email"
                        icon={MailIcon}
                        type="email"
                        value={data.email || ''}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="info@perusahaan.com"
                    />

                    {/* Website */}
                    <FormInput
                        label="Website"
                        icon={GlobeIcon}
                        value={data.website || ''}
                        onChange={(e) => handleChange('website', e.target.value)}
                        placeholder="www.perusahaan.com"
                    />
                </div>
            )}
        </div>
    );
};

export default KopSuratForm;
