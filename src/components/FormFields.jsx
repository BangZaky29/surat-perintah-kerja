// src/components/FormFields.jsx
import React from 'react';
import { 
  UserIcon, 
  BriefcaseIcon, 
  MapPinIcon, 
  FileTextIcon, 
  CalendarIcon,
  PlusIcon,
  TrashIcon
} from '../icons/Icons';

// Input field dengan icon dan label
export const FormInput = ({ label, icon: Icon, value, onChange, placeholder, type = 'text', required = false }) => {
  return (
    <div className="form-group">
      <label className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="input-wrapper">
        <Icon />
        <input
          type={type}
          className="form-input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

// Form untuk data penandatangan
export const PenandatanganForm = ({ data, onChange }) => {
  return (
    <>
      <FormInput
        label="Nama Lengkap"
        icon={UserIcon}
        value={data.nama}
        onChange={(e) => onChange('nama', e.target.value)}
        placeholder="Contoh: Josep Pernando"
        required
      />
      <FormInput
        label="Jabatan"
        icon={BriefcaseIcon}
        value={data.jabatan}
        onChange={(e) => onChange('jabatan', e.target.value)}
        placeholder="Contoh: Local Engineer L/A"
        required
      />
      <FormInput
        label="Alamat"
        icon={MapPinIcon}
        value={data.alamat}
        onChange={(e) => onChange('alamat', e.target.value)}
        placeholder="Contoh: Jalan Pajajaran No.85 Bandung"
        required
      />
    </>
  );
};

// Form untuk data penerima
export const PenerimaForm = ({ data, onChange }) => {
  return (
    <>
      <FormInput
        label="Nama Lengkap"
        icon={UserIcon}
        value={data.nama}
        onChange={(e) => onChange('nama', e.target.value)}
        placeholder="Contoh: Ruslan Wijaya"
        required
      />
      <FormInput
        label="Jabatan"
        icon={BriefcaseIcon}
        value={data.jabatan}
        onChange={(e) => onChange('jabatan', e.target.value)}
        placeholder="Contoh: Engineer L/A"
        required
      />
      <FormInput
        label="Alamat"
        icon={MapPinIcon}
        value={data.alamat}
        onChange={(e) => onChange('alamat', e.target.value)}
        placeholder="Contoh: Jl. Tirta Sari No.9 Sarijadi, Bandung"
        required
      />
    </>
  );
};

// Form untuk spesifikasi pekerjaan
export const PekerjaanForm = ({ items, onChange, onAdd, onDelete }) => {
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
            >
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
      <button className="btn-add" onClick={onAdd}>
        <PlusIcon />
        Tambah Pekerjaan
      </button>
    </>
  );
};

// Form untuk informasi surat
export const InfoSuratForm = ({ data, onChange }) => {
  return (
    <>
      <FormInput
        label="Nama PT"
        icon={FileTextIcon}
        value={data.namaPT}
        onChange={(e) => onChange('namaPT', e.target.value)}
        placeholder="Contoh: PT. Dirgantara Engineering Services"
      />
      <FormInput
        label="Nomor Surat"
        icon={FileTextIcon}
        value={data.nomorSurat}
        onChange={(e) => onChange('nomorSurat', e.target.value)}
        placeholder="Contoh: 120 / SP / K / 2021"
        required
      />
      <FormInput
        label="Tempat Dikeluarkan"
        icon={MapPinIcon}
        value={data.tempat}
        onChange={(e) => onChange('tempat', e.target.value)}
        placeholder="Contoh: Bandung"
        required
      />
      <FormInput
        label="Tanggal"
        icon={CalendarIcon}
        value={data.tanggal}
        onChange={(e) => onChange('tanggal', e.target.value)}
        type="date"
        required
      />
    </>
  );
};
