// src/components/Preview.jsx
import React from 'react';
import { formatTanggal } from '../utils/helpers';

const Preview = ({ formData }) => {
  const penerimaList = Array.isArray(formData.penerima)
    ? formData.penerima
    : formData.penerima
      ? [formData.penerima]
      : [];
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
            {penerimaList.map((penerima, index) => (
              <div key={index} className="preview-recipient">
                {penerimaList.length > 1 && (
                  <p className="preview-recipient-title">Penerima {index + 1}</p>
                )}
                <table className="preview-table">
                  <tbody>
                    <tr>
                      <td>Nama</td>
                      <td>:</td>
                      <td>{penerima?.nama || '___________'}</td>
                    </tr>
                    <tr>
                      <td>Jabatan</td>
                      <td>:</td>
                      <td>{penerima?.jabatan || '___________'}</td>
                    </tr>
                    <tr>
                      <td>Alamat</td>
                      <td>:</td>
                      <td>{penerima?.alamat || '___________'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
            {penerimaList.length === 0 && (
              <table className="preview-table">
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>___________</td>
                  </tr>
                  <tr>
                    <td>Jabatan</td>
                    <td>:</td>
                    <td>___________</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>___________</td>
                  </tr>
                </tbody>
              </table>
            )}
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
            <div className="preview-signature-area">
              {formData.info.ttd && (
                <img src={formData.info.ttd} alt="TTD" className="preview-ttd-image" />
              )}
              {formData.info.stempel && (
                <img src={formData.info.stempel} alt="Stempel" className="preview-stamp-image" />
              )}
            </div>
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
