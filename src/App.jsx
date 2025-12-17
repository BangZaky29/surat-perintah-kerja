// src/App.jsx
import React, { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Accordion from './components/Accordion';
import ActionButtons from './components/ActionButtons';
import Preview from './components/Preview';
import {
  PenandatanganForm,
  PenerimaForm,
  PekerjaanForm,
  InfoSuratForm
} from './components/FormFields';

// Icons
import { UserIcon, UsersIcon, FileTextIcon, InfoIcon } from './icons/Icons';

// Utils
import {
  validateFormData,
  getInitialFormData,
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage
} from './utils/helpers';

// Styles
import { styles } from './styles/styles';

const App = () => {
  const [formData, setFormData] = useState(getInitialFormData());
  const [openAccordion, setOpenAccordion] = useState('penandatangan');

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      const initial = getInitialFormData();
      const merged = {
        ...initial,
        ...savedData,
        penandatangan: { ...initial.penandatangan, ...savedData.penandatangan },
        info: { ...initial.info, ...savedData.info }
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

  // Handle accordion toggle
  const handleAccordionToggle = (id) => {
    setOpenAccordion(prev => prev === id ? '' : id);
  };

  // Handle penandatangan change
  const handlePenandatanganChange = (field, value) => {
    setFormData({
      ...formData,
      penandatangan: { ...formData.penandatangan, [field]: value }
    });
  };

  // Handle penerima change (array)
  const handlePenerimaChange = (index, field, value) => {
    const updated = [...formData.penerima];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, penerima: updated });
  };

  const handlePenerimaAdd = () => {
    setFormData({
      ...formData,
      penerima: [...formData.penerima, { nama: '', jabatan: '', alamat: '' }]
    });
  };

  const handlePenerimaDelete = (index) => {
    if (formData.penerima.length > 1) {
      setFormData({
        ...formData,
        penerima: formData.penerima.filter((_, i) => i !== index)
      });
    }
  };

  // Handle pekerjaan change
  const handlePekerjaanChange = (index, value) => {
    const updated = [...formData.pekerjaan];
    updated[index] = value;
    setFormData({ ...formData, pekerjaan: updated });
  };

  // Handle pekerjaan add
  const handlePekerjaanAdd = () => {
    setFormData({
      ...formData,
      pekerjaan: [...formData.pekerjaan, '']
    });
  };

  // Handle pekerjaan delete
  const handlePekerjaanDelete = (index) => {
    if (formData.pekerjaan.length > 1) {
      setFormData({
        ...formData,
        pekerjaan: formData.pekerjaan.filter((_, i) => i !== index)
      });
    }
  };

  // Handle info change
  const handleInfoChange = (field, value) => {
    setFormData({
      ...formData,
      info: { ...formData.info, [field]: value }
    });
  };

  // Handle download PDF
  const handleDownloadPDF = () => {
    const validation = validateFormData(formData);
    
    if (!validation.isValid) {
      alert('Mohon lengkapi:\n• ' + validation.errors.join('\n• '));
      return;
    }

    window.print();
  };

  // Handle reset
  const handleReset = () => {
    if (confirm('Yakin ingin menghapus semua data?')) {
      setFormData(getInitialFormData());
      clearLocalStorage();
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <div className="grid-container">
            {/* Forms Column */}
            <div className="forms-column no-print">
              {/* Accordion 1: Penandatangan */}
              <Accordion
                id="penandatangan"
                title="Data Yang Bertanda Tangan"
                icon={UserIcon}
                isOpen={openAccordion === 'penandatangan'}
                onToggle={handleAccordionToggle}
              >
                <PenandatanganForm
                  data={formData.penandatangan}
                  onChange={handlePenandatanganChange}
                />
              </Accordion>

              {/* Accordion 2: Penerima */}
              <Accordion
                id="penerima"
                title="Data Penerima Perintah"
                icon={UsersIcon}
                isOpen={openAccordion === 'penerima'}
                onToggle={handleAccordionToggle}
              >
                <PenerimaForm
                  items={formData.penerima}
                  onChange={handlePenerimaChange}
                  onAdd={handlePenerimaAdd}
                  onDelete={handlePenerimaDelete}
                />
              </Accordion>

              {/* Accordion 3: Pekerjaan */}
              <Accordion
                id="pekerjaan"
                title="Spesifikasi Pekerjaan"
                icon={FileTextIcon}
                isOpen={openAccordion === 'pekerjaan'}
                onToggle={handleAccordionToggle}
              >
                <PekerjaanForm
                  items={formData.pekerjaan}
                  onChange={handlePekerjaanChange}
                  onAdd={handlePekerjaanAdd}
                  onDelete={handlePekerjaanDelete}
                />
              </Accordion>

              {/* Accordion 4: Info Surat */}
              <Accordion
                id="info"
                title="Informasi Surat"
                icon={InfoIcon}
                isOpen={openAccordion === 'info'}
                onToggle={handleAccordionToggle}
              >
                <InfoSuratForm
                  data={formData.info}
                  onChange={handleInfoChange}
                />
              </Accordion>

            </div>

            {/* Preview Column */}
            <Preview formData={formData} />
          </div>
          <div className="action-buttons-container">
          {/* Action Buttons */}
              <ActionButtons
                onReset={handleReset}
                onDownload={handleDownloadPDF}
              />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
