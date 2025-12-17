// src/components/Preview.jsx
import React from 'react';
import { formatTanggal } from '../utils/helpers';

const Preview = ({ formData }) => {
  return (
    <div className="preview-column">
      <div className="preview-container">
        <div className="preview-header">
          <h1>SURAT PERINTAH KERJA</h1>
          <p>Nomor: {formData.info.nomorSurat || '___________'}</p>
        </div>

        <div className="preview-content">
          {/* Penandatangan */}
          <div className="preview-section">
            <p>Yang bertanda tangan di bawah ini:</p>
            <table className="preview-table">
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>:</td>
                  <td>{formData.penandatangan.nama || '___________'}</td>
                </tr>
                <tr>
                  <td>Jabatan</td>
                  <td>:</td>
                  <td>{formData.penandatangan.jabatan || '___________'}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>{formData.penandatangan.alamat || '___________'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Penerima */}
          <div className="preview-section">
            <p>Memberikan perintah kerja kepada:</p>
            <table className="preview-table">
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>:</td>
                  <td>{formData.penerima.nama || '___________'}</td>
                </tr>
                <tr>
                  <td>Jabatan</td>
                  <td>:</td>
                  <td>{formData.penerima.jabatan || '___________'}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>{formData.penerima.alamat || '___________'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Spesifikasi Pekerjaan */}
          <div className="preview-pekerjaan">
            <p className="preview-pekerjaan-title">Spesifikasi pekerjaan:</p>
            <ol>
              {formData.pekerjaan.filter(p => p.trim()).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {formData.pekerjaan.filter(p => p.trim()).length === 0 && (
                <li style={{ color: '#999' }}>Belum ada spesifikasi pekerjaan</li>
              )}
            </ol>
          </div>

          {/* Penutup */}
          <p className="preview-closure">
            Demikian surat perintah kerja ini dibuat agar dapat dilaksanakan dengan 
            sebaik-baiknya. Atas kerjasamanya kami ucapkan terima kasih.
          </p>

          {/* Tempat dan Tanggal */}
          <div className="preview-section">
            <table className="preview-table">
              <tbody>
                <tr>
                  <td>Dikeluarkan di</td>
                  <td>:</td>
                  <td>{formData.info.tempat || '___________'}</td>
                </tr>
                <tr>
                  <td>Pada tanggal</td>
                  <td>:</td>
                  <td>{formData.info.tanggal ? formatTanggal(formData.info.tanggal) : '___________'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tanda Tangan */}
          <div className="preview-signature">
            <p style={{ fontWeight: 'bold' }}>{formData.info.namaPT || '___________'}</p>
            <div className="preview-signature-line">
              <p className="preview-signature-name">{formData.penandatangan.nama || '___________'}</p>
              <p className="preview-signature-title">{formData.penandatangan.jabatan || '___________'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
