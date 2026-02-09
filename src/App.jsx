// src/App.jsx
import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import SubscriptionGuard from './SubscriptionGuard';

// Context
import { FormProvider, useFormContext } from './context/FormContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Accordion from './components/Accordion';
import ActionButtons from './components/ActionButtons';
import Preview from './components/Preview';
import MobileViewToggle from './components/MobileViewToggle';
import FloatingActions from './components/FloatingActions';
import ReportManager from './components/ReportManager';
import PDFDocument from './components/PDFDocument';
import { ToastContainer, useToast } from './components/Toast';
import ConfirmDialog from './components/ConfirmDialog';

// Form Components
import {
  PenandatanganForm,
  PenerimaForm,
  PekerjaanForm,
  InfoSuratForm,
  KopSuratForm
} from './components/forms';

// Icons
import { UserIcon, UsersIcon, FileTextIcon, InfoIcon, FolderIcon, HeaderIcon } from './icons/Icons';

// Styles
import { styles } from './styles/styles';

/**
 * Main App Content - uses FormContext
 */
const AppContent = () => {
  const {
    formData,
    errors,
    handlePenandatanganChange,
    handlePenerimaChange,
    handlePenerimaAdd,
    handlePenerimaDelete,
    handlePekerjaanChange,
    handlePekerjaanAdd,
    handlePekerjaanDelete,
    handleInfoChange,
    handleKopSuratChange,
    resetForm
  } = useFormContext();

  const [openAccordion, setOpenAccordion] = useState('penandatangan');
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Toast notifications
  const toast = useToast();

  // Confirm dialog state
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: null
  });

  // Show confirm dialog
  const showConfirm = (title, message, onConfirm) => {
    setConfirmDialog({
      isOpen: true,
      title,
      message,
      onConfirm
    });
  };

  // Hide confirm dialog
  const hideConfirm = () => {
    setConfirmDialog({
      isOpen: false,
      title: '',
      message: '',
      onConfirm: null
    });
  };

  // Handle confirm action
  const handleConfirm = () => {
    if (confirmDialog.onConfirm) {
      confirmDialog.onConfirm();
    }
    hideConfirm();
  };

  // Handle accordion toggle
  const handleAccordionToggle = (id) => {
    setOpenAccordion(prev => prev === id ? '' : id);
  };

  // Handle mobile view toggle
  const handleMobileToggle = () => {
    setShowPreview(prev => !prev);
  };

  // Handle download PDF - no validation required, always allow download
  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);

    try {
      // Generate PDF blob
      const blob = await pdf(<PDFDocument formData={formData} />).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      // Generate filename
      const date = new Date().toISOString().split('T')[0];
      const nama = formData.penandatangan.nama || 'SPK';
      const sanitizedNama = nama.replace(/[^a-z0-9]/gi, '_');
      link.download = `SPK_${sanitizedNama}_${date}.pdf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Success notification
      toast.success('PDF berhasil didownload!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Gagal generate PDF. Silakan coba lagi.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Handle reset with confirmation dialog
  const handleReset = () => {
    showConfirm(
      'Reset Data',
      'Yakin ingin menghapus semua data? Tindakan ini tidak dapat dibatalkan.',
      () => {
        resetForm();
        toast.success('Data berhasil direset');
      }
    );
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app-container">
        <Header />

        {/* Toast Notifications */}
        <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />

        {/* Confirm Dialog */}
        <ConfirmDialog
          isOpen={confirmDialog.isOpen}
          title={confirmDialog.title}
          message={confirmDialog.message}
          onConfirm={handleConfirm}
          onCancel={hideConfirm}
        />

        <main className="main-content">
          <div className="grid-container">
            {/* Forms Column */}
            <div className={`forms-column no-print ${showPreview ? 'hidden-mobile' : ''}`}>

              {/* Accordion 1: Riwayat Penyimpanan */}
              <Accordion
                id="reports"
                title="Riwayat Penyimpanan"
                icon={FolderIcon}
                isOpen={openAccordion === 'reports'}
                onToggle={handleAccordionToggle}
              >
                <ReportManager toast={toast} showConfirm={showConfirm} />
              </Accordion>

              {/* Accordion 2: Kop Surat (NEW - Separate) */}
              <Accordion
                id="kopSurat"
                title="Kop Surat (Letterhead)"
                icon={HeaderIcon}
                isOpen={openAccordion === 'kopSurat'}
                onToggle={handleAccordionToggle}
              >
                <KopSuratForm
                  data={formData.kopSurat}
                  onChange={handleKopSuratChange}
                  errors={errors.kopSurat || {}}
                />
              </Accordion>

              {/* Accordion 3: Penandatangan */}
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
                  errors={errors.penandatangan || {}}
                />
              </Accordion>

              {/* Accordion 4: Penerima */}
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
                  errors={errors.penerima || []}
                />
              </Accordion>

              {/* Accordion 5: Pekerjaan */}
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
                  error={errors.pekerjaan}
                />
              </Accordion>

              {/* Accordion 6: Info Surat */}
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
                  errors={errors.info || {}}
                />
              </Accordion>

            </div>

            {/* Preview Column - hidden on mobile when showPreview is false */}
            <div className={`preview-column ${!showPreview ? 'hidden-mobile' : ''}`}>
              {/* Action Buttons - Above Preview */}
              <ActionButtons
                onReset={handleReset}
                onDownload={handleDownloadPDF}
                isLoading={isGeneratingPDF}
              />
              <Preview formData={formData} />
            </div>
          </div>

          {/* Remove old action-buttons-container */}
        </main>

        {/* Floating Action Buttons (mobile only) */}
        <FloatingActions
          onDownload={handleDownloadPDF}
          onReset={handleReset}
          isLoading={isGeneratingPDF}
        />

        {/* Mobile View Toggle */}
        <MobileViewToggle
          showPreview={showPreview}
          onToggle={handleMobileToggle}
        />

        <Footer />
      </div>
    </>
  );
};

/**
 * App wrapper with FormProvider
 */
const App = () => {
  return (
    <SubscriptionGuard featureSlug="surat-perintah-kerja">
      <FormProvider>
        <AppContent />
      </FormProvider>
    </SubscriptionGuard>
  );
};

export default App;
