// src/components/FormFields.jsx
import React, { useEffect, useRef, useState } from 'react';
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
export const PenerimaForm = ({ items, onChange, onAdd, onDelete }) => {
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
            />
            <FormInput
              label="Jabatan"
              icon={BriefcaseIcon}
              value={data.jabatan}
              onChange={(e) => onChange(index, 'jabatan', e.target.value)}
              placeholder="Contoh: Engineer L/A"
              required
            />
            <FormInput
              label="Alamat"
              icon={MapPinIcon}
              value={data.alamat}
              onChange={(e) => onChange(index, 'alamat', e.target.value)}
              placeholder="Contoh: Jl. Tirta Sari No.9 Sarijadi, Bandung"
              required
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
const SignaturePad = ({ value, onChange }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.lineCap = 'round';
    setCtx(context);
  }, []);

  const start = (e) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = getPoint(e);
    ctx && ctx.beginPath();
    ctx && ctx.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!isDrawing || !ctx) return;
    const { offsetX, offsetY } = getPoint(e);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const end = () => {
    setIsDrawing(false);
  };

  const getPoint = (e) => {
    if ('touches' in e) {
      const rect = e.target.getBoundingClientRect();
      const t = e.touches[0];
      return { offsetX: t.clientX - rect.left, offsetY: t.clientY - rect.top };
    }
    return { offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY };
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onChange('');
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    onChange(dataUrl);
  };

  return (
    <div className="signature-pad">
      <canvas
        ref={canvasRef}
        width={500}
        height={150}
        className="signature-canvas"
        onMouseDown={start}
        onMouseMove={draw}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={start}
        onTouchMove={draw}
        onTouchEnd={end}
      />
      <div className="signature-actions">
        <button type="button" className="btn-reset" onClick={handleClear}>Bersihkan</button>
        <button type="button" className="btn-download" onClick={handleSave}>Simpan TTD</button>
      </div>
      {value && <img src={value} alt="TTD" className="signature-preview" />}
    </div>
  );
};

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
      <div className="form-group">
        <label className="form-label">TTD Online</label>
        <SignaturePad
          value={data.ttd}
          onChange={(val) => onChange('ttd', val)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Upload Stempel (PNG)</label>
        <div className="input-wrapper">
          <FileTextIcon />
          <input
            type="file"
            className="form-input"
            accept="image/png"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => onChange('stempel', reader.result);
              reader.readAsDataURL(file);
            }}
          />
        </div>
        {data.stempel && <img src={data.stempel} alt="Stempel" className="stempel-preview" />}
      </div>
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
