// src/components/forms/PenandatanganForm.jsx
import React from 'react';
import FormInput from './FormInput';
import { UserIcon, BriefcaseIcon, MapPinIcon } from '../../icons/Icons';

/**
 * Form for signer (penandatangan) data
 */
const PenandatanganForm = ({ data, onChange, errors = {} }) => {
    return (
        <>
            <FormInput
                label="Nama Lengkap"
                icon={UserIcon}
                value={data.nama}
                onChange={(e) => onChange('nama', e.target.value)}
                placeholder="Contoh: Josep Pernando"
                required
                error={errors.nama}
            />
            <FormInput
                label="Jabatan"
                icon={BriefcaseIcon}
                value={data.jabatan}
                onChange={(e) => onChange('jabatan', e.target.value)}
                placeholder="Contoh: Local Engineer L/A"
                required
                error={errors.jabatan}
            />
            <FormInput
                label="Alamat"
                icon={MapPinIcon}
                value={data.alamat}
                onChange={(e) => onChange('alamat', e.target.value)}
                placeholder="Contoh: Jalan Pajajaran No.85 Bandung"
                required
                error={errors.alamat}
            />
        </>
    );
};

export default PenandatanganForm;
