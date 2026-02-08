// src/context/FormContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
    getInitialFormData,
    saveToLocalStorage,
    loadFromLocalStorage,
    clearLocalStorage
} from '../utils/helpers';

const FormContext = createContext(null);

/**
 * Form Provider - Global state management for form data
 */
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(getInitialFormData());
    const [errors, setErrors] = useState({});

    // Load from localStorage on mount
    useEffect(() => {
        const savedData = loadFromLocalStorage();
        if (savedData) {
            const initial = getInitialFormData();
            const merged = {
                ...initial,
                ...savedData,
                penandatangan: { ...initial.penandatangan, ...savedData.penandatangan },
                info: { ...initial.info, ...savedData.info },
                kopSurat: { ...initial.kopSurat, ...savedData.kopSurat }
            };
            if (Array.isArray(savedData.penerima)) {
                merged.penerima = savedData.penerima.length ? savedData.penerima : initial.penerima;
            } else if (savedData.penerima && typeof savedData.penerima === 'object') {
                merged.penerima = [savedData.penerima];
            }
            setFormData(merged);
        }
    }, []);

    // Save to localStorage whenever formData changes
    useEffect(() => {
        saveToLocalStorage(formData);
    }, [formData]);

    // Handler: Penandatangan
    const handlePenandatanganChange = useCallback((field, value) => {
        setFormData(prev => ({
            ...prev,
            penandatangan: { ...prev.penandatangan, [field]: value }
        }));
        // Clear error on change
        setErrors(prev => ({
            ...prev,
            penandatangan: { ...prev.penandatangan, [field]: null }
        }));
    }, []);

    // Handler: Penerima
    const handlePenerimaChange = useCallback((index, field, value) => {
        setFormData(prev => {
            const updated = [...prev.penerima];
            updated[index] = { ...updated[index], [field]: value };
            return { ...prev, penerima: updated };
        });
    }, []);

    const handlePenerimaAdd = useCallback(() => {
        setFormData(prev => ({
            ...prev,
            penerima: [...prev.penerima, { nama: '', jabatan: '', alamat: '' }]
        }));
    }, []);

    const handlePenerimaDelete = useCallback((index) => {
        setFormData(prev => {
            if (prev.penerima.length > 1) {
                return {
                    ...prev,
                    penerima: prev.penerima.filter((_, i) => i !== index)
                };
            }
            return prev;
        });
    }, []);

    // Handler: Pekerjaan
    const handlePekerjaanChange = useCallback((index, value) => {
        setFormData(prev => {
            const updated = [...prev.pekerjaan];
            updated[index] = value;
            return { ...prev, pekerjaan: updated };
        });
    }, []);

    const handlePekerjaanAdd = useCallback(() => {
        setFormData(prev => ({
            ...prev,
            pekerjaan: [...prev.pekerjaan, '']
        }));
    }, []);

    const handlePekerjaanDelete = useCallback((index) => {
        setFormData(prev => {
            if (prev.pekerjaan.length > 1) {
                return {
                    ...prev,
                    pekerjaan: prev.pekerjaan.filter((_, i) => i !== index)
                };
            }
            return prev;
        });
    }, []);

    // Handler: Info
    const handleInfoChange = useCallback((field, value) => {
        setFormData(prev => ({
            ...prev,
            info: { ...prev.info, [field]: value }
        }));
        setErrors(prev => ({
            ...prev,
            info: { ...prev.info, [field]: null }
        }));
    }, []);

    // Handler: Kop Surat
    const handleKopSuratChange = useCallback((data) => {
        setFormData(prev => ({
            ...prev,
            kopSurat: data
        }));
    }, []);

    // Validate form data
    const validateForm = useCallback(() => {
        const newErrors = {
            penandatangan: {},
            penerima: [],
            pekerjaan: null,
            info: {}
        };
        let isValid = true;

        // Validate penandatangan
        if (!formData.penandatangan.nama) {
            newErrors.penandatangan.nama = 'Nama penandatangan wajib diisi';
            isValid = false;
        }

        // Validate penerima
        formData.penerima.forEach((p, i) => {
            const penerimaErrors = {};
            if (!p.nama) {
                penerimaErrors.nama = 'Nama penerima wajib diisi';
                isValid = false;
            }
            newErrors.penerima[i] = penerimaErrors;
        });

        // Validate pekerjaan
        if (!formData.pekerjaan.some(p => p.trim())) {
            newErrors.pekerjaan = 'Minimal satu spesifikasi pekerjaan harus diisi';
            isValid = false;
        }

        // Validate info
        if (!formData.info.nomorSurat) {
            newErrors.info.nomorSurat = 'Nomor surat wajib diisi';
            isValid = false;
        }

        setErrors(newErrors);
        return { isValid, errors: newErrors };
    }, [formData]);

    // Reset form
    const resetForm = useCallback(() => {
        setFormData(getInitialFormData());
        setErrors({});
        clearLocalStorage();
    }, []);

    // Load data (from saved report)
    const loadFormData = useCallback((data) => {
        const initial = getInitialFormData();
        const merged = {
            ...initial,
            ...data,
            penandatangan: { ...initial.penandatangan, ...data.penandatangan },
            info: { ...initial.info, ...data.info },
            kopSurat: { ...initial.kopSurat, ...data.kopSurat }
        };
        setFormData(merged);
        setErrors({});
    }, []);

    const value = {
        formData,
        setFormData,
        errors,
        setErrors,
        // Handlers
        handlePenandatanganChange,
        handlePenerimaChange,
        handlePenerimaAdd,
        handlePenerimaDelete,
        handlePekerjaanChange,
        handlePekerjaanAdd,
        handlePekerjaanDelete,
        handleInfoChange,
        handleKopSuratChange,
        // Actions
        validateForm,
        resetForm,
        loadFormData
    };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

/**
 * Hook to access form context
 */
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};

export default FormContext;
