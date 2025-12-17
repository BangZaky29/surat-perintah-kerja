// src/utils/helpers.js

/**
 * Format tanggal dari format YYYY-MM-DD ke format Indonesia
 * @param {string} dateString - Tanggal dalam format YYYY-MM-DD
 * @returns {string} Tanggal dalam format "DD Nama_Bulan YYYY"
 */
export const formatTanggal = (dateString) => {
  if (!dateString) return '';
  
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  
  const date = new Date(dateString);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * Validasi form data sebelum download PDF
 * @param {object} formData - Data form yang akan divalidasi
 * @returns {object} { isValid: boolean, errors: array }
 */
export const validateFormData = (formData) => {
  const errors = [];

  if (!formData.penandatangan.nama) {
    errors.push('Nama penandatangan');
  }
  
  if (!formData.penerima.nama) {
    errors.push('Nama penerima');
  }
  
  if (!formData.info.nomorSurat) {
    errors.push('Nomor surat');
  }
  
  if (!formData.pekerjaan.some(p => p.trim())) {
    errors.push('Spesifikasi pekerjaan');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Get initial form data structure
 * @returns {object} Initial form data
 */
export const getInitialFormData = () => ({
  penandatangan: { nama: '', jabatan: '', alamat: '' },
  penerima: { nama: '', jabatan: '', alamat: '' },
  pekerjaan: [''],
  info: { namaPT: '', nomorSurat: '', tempat: '', tanggal: '' }
});

/**
 * Save form data to localStorage
 * @param {object} data - Form data to save
 */
export const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem('spk-data', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

/**
 * Load form data from localStorage
 * @returns {object|null} Saved form data or null
 */
export const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('spk-data');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

/**
 * Clear form data from localStorage
 */
export const clearLocalStorage = () => {
  try {
    localStorage.removeItem('spk-data');
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
