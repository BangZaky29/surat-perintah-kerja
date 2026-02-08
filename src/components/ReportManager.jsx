// src/components/ReportManager.jsx
import React, { useState, useEffect } from 'react';
import {
    getAllReports,
    saveReport,
    loadReport,
    deleteReport,
    exportReport,
    importReport
} from '../lib/reportStorage';
import { useFormContext } from '../context/FormContext';
import {
    SaveIcon,
    TrashIcon,
    DownloadIcon,
    ImportIcon,
    ExportIcon,
    FolderIcon
} from '../icons/Icons';

/**
 * Component for managing saved reports
 * Features: Save, Load, Delete, Export, Import
 * Uses toast notifications and confirm dialog from parent
 */
const ReportManager = ({ toast, showConfirm }) => {
    const { formData, loadFormData } = useFormContext();
    const [reports, setReports] = useState([]);
    const [reportName, setReportName] = useState('');

    // Load reports list on mount
    useEffect(() => {
        refreshReports();
    }, []);

    const refreshReports = () => {
        setReports(getAllReports());
    };

    const handleSave = () => {
        if (!reportName.trim()) {
            toast.error('Masukkan nama laporan');
            return;
        }
        try {
            saveReport(reportName, formData);
            setReportName('');
            refreshReports();
            toast.success('Laporan berhasil disimpan');
        } catch (error) {
            toast.error('Gagal menyimpan laporan');
        }
    };

    const handleLoad = (id) => {
        const data = loadReport(id);
        if (data) {
            loadFormData(data);
            toast.success('Laporan berhasil dimuat');
        } else {
            toast.error('Gagal memuat laporan');
        }
    };

    const handleDelete = (id, name) => {
        showConfirm(
            'Hapus Laporan',
            `Yakin ingin menghapus "${name}"?`,
            () => {
                deleteReport(id);
                refreshReports();
                toast.success('Laporan berhasil dihapus');
            }
        );
    };

    const handleExport = (id) => {
        if (exportReport(id)) {
            toast.success('Laporan berhasil diexport');
        } else {
            toast.error('Gagal export laporan');
        }
    };

    const handleImport = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            await importReport(file);
            refreshReports();
            toast.success('Laporan berhasil diimport');
        } catch (error) {
            toast.error('File tidak valid atau rusak');
        }
        e.target.value = '';
    };

    const formatDate = (isoString) => {
        return new Date(isoString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="report-manager">
            {/* Save New Report */}
            <div className="report-save-form">
                <input
                    type="text"
                    className="report-name-input"
                    placeholder="Nama laporan..."
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                />
                <button className="btn-save-report" onClick={handleSave}>
                    <SaveIcon />
                    Simpan
                </button>
            </div>

            {/* Import */}
            <div className="report-import">
                <label className="btn-import">
                    <ImportIcon />
                    Import dari File
                    <input
                        type="file"
                        accept=".json"
                        onChange={handleImport}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>

            {/* Reports List */}
            <div className="reports-list">
                <h4 className="reports-list-title">
                    <FolderIcon /> Laporan Tersimpan ({reports.length})
                </h4>

                {reports.length === 0 ? (
                    <p className="no-reports">Belum ada laporan tersimpan</p>
                ) : (
                    <ul className="reports-items">
                        {reports.map((report) => (
                            <li key={report.id} className="report-item">
                                <div className="report-info">
                                    <span className="report-name">{report.name}</span>
                                    <span className="report-date">{formatDate(report.updatedAt)}</span>
                                </div>
                                <div className="report-actions">
                                    <button
                                        className="btn-report-action btn-load"
                                        onClick={() => handleLoad(report.id)}
                                        title="Muat"
                                    >
                                        <DownloadIcon />
                                    </button>
                                    <button
                                        className="btn-report-action btn-export"
                                        onClick={() => handleExport(report.id)}
                                        title="Export"
                                    >
                                        <ExportIcon />
                                    </button>
                                    <button
                                        className="btn-report-action btn-delete-report"
                                        onClick={() => handleDelete(report.id, report.name)}
                                        title="Hapus"
                                    >
                                        <TrashIcon />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ReportManager;
