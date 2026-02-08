// src/styles/styles.js

export const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Space Grotesk', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial;
    min-height: 100vh;
  }

  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--gradient-secondary);
  }

  /* Header */
  .app-header {
    background: var(--gradient-primary);
    color: white;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    position: static;
    top: 0;
    z-index: 100;
  }

  .header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .header-icon {
    width: 32px;
    height: 32px;
  }

  .header-logo {
    width: 70px;
    height: 70px;
    border-radius: 8px;
    object-fit: cover;
  }

  .header-title h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: var(--text-dark);
  }

  .header-title p {
    font-size: 14px;
    opacity: 0.9;
    margin: 2px 0 0 0;
    color: var(--gray-600);
  }

  /* Main Content */
  .main-content {
    flex: 1;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* Accordion */
  .accordion {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .accordion:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }

  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;
    border: none;
    background: white;
    width: 100%;
    text-align: left;
    transition: all 0.3s ease;
  }

  .accordion-header.active {
    background: var(--gradient-primary);
    color: white;
  }

  .accordion-header:hover:not(.active) {
    background: var(--blue-50);
  }

  .accordion-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .accordion-icon {
    width: 22px;
    height: 22px;
    color: var(--blue-600);
  }

  .accordion-header.active .accordion-icon {
    color: white;
  }

  .accordion-title {
    font-size: 18px;
    font-weight: bold;
    color: var(--text-dark);
  }

  .accordion-header.active .accordion-title {
    color: white;
  }

  .accordion-chevron {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    color: var(--text-muted);
  }

  .accordion-header.active .accordion-chevron {
    transform: rotate(180deg);
    color: white;
  }

  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .accordion-content.open {
    max-height: 2000px;
  }

  .accordion-body {
    padding: 20px;
    background: white;
  }

  /* Form */
  .form-group {
    margin-bottom: 16px;
  }

  .form-label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 8px;
  }

  .form-label .required {
    color: var(--purple-300);
    margin-left: 4px;
  }

  .input-wrapper {
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light);
    width: 18px;
    height: 18px;
  }

  .form-input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    border: 2px solid var(--gray-300);
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s ease;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--blue-400);
    box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
  }

  .form-input::placeholder {
    color: var(--text-light);
  }

  /* Spesifikasi Pekerjaan */
  .pekerjaan-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .pekerjaan-item {
    display: flex;
    gap: 8px;
    align-items: flex-start;
  }

  .pekerjaan-number {
    min-width: 28px;
    padding-top: 10px;
    font-weight: 600;
    color: var(--text-muted);
  }

  .pekerjaan-input {
    flex: 1;
    padding: 10px 12px;
    border: 2px solid var(--gray-300);
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s ease;
  }

  .pekerjaan-input:focus {
    outline: none;
    border-color: var(--blue-400);
    box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
  }

  .btn-delete {
    padding: 10px;
    background: white;
    border: 2px solid var(--purple-400);
    border-radius: 8px;
    color: var(--purple-400);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-delete:hover {
    background: var(--purple-400);
    color: white;
  }

  .btn-delete:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-add {
    margin-top: 12px;
    width: 100%;
    padding: 12px;
    background: var(--blue-50);
    border: 2px solid var(--blue-300);
    border-radius: 8px;
    color: var(--blue-600);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .btn-add:hover {
    background: var(--blue-600);
    color: white;
  }
  
  .penerima-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .penerima-item {
    padding-bottom: 6px;
    border-bottom: 1px dashed #e0e0e0;
  }
  .penerima-item:last-child {
    border-bottom: none;
  }
  .penerima-item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .penerima-title {
    font-weight: 700;
    color: var(--text-dark);
  }

  /* Action Buttons */
  .action-buttons {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 20px;
    margin-top: 16px;
  }

  .button-group {
    display: flex;
    gap: 12px;
  }

  .btn {
    flex: 1;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-reset {
    background: white;
    border: 2px solid #ddd;
    color: #666;
  }

  .btn-reset:hover:not(:disabled) {
    background: #f5f5f5;
    border-color: #999;
  }

  .btn-download {
    background: var(--gradient-primary);
    border: none;
    color: white;
    box-shadow: 0 2px 4px rgba(59,130,246,0.3);
  }

  .btn-download:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(59,130,246,0.4);
  }

  .action-info {
    margin-top: 12px;
    text-align: center;
    font-size: 12px;
    color: var(--text-muted);
  }

  /* Preview */
  .preview-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    padding: 60px;
    max-width: 794px;
    margin: 0 auto;
    font-family: Georgia, serif;
    line-height: 1.6;
  }

  .preview-header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 4px solid var(--text-dark);
  }

  .preview-header h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: -8px;
  }

  .preview-header p {
    font-size: 14px;
    color: var(--text-dark);
    font-weight: bold;
  }

  .preview-content {
    font-size: 14px;
  }

  .preview-section {
    margin-bottom: 24px;
  }

  .preview-section p {
    margin-bottom: 8px;
  }
  .preview-recipient {
    margin-bottom: 10px;
    page-break-inside: avoid;
  }
  .preview-recipient-title {
    font-weight: bold;
    margin-bottom: 6px;
  }

  .preview-table {
    width: 100%;
    margin-bottom: 20px;
  }

  .preview-table td {
    padding: 4px 0;
    vertical-align: top;
  }

  .preview-table td:first-child {
    width: 120px;
  }

  .preview-table td:nth-child(2) {
    width: 20px;
  }

  .preview-pekerjaan {
    margin: 20px 0;
  }

  .preview-pekerjaan-title {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .preview-pekerjaan ol {
    margin-left: 24px;
  }

  .preview-pekerjaan li {
    margin-bottom: 8px;
  }

  .preview-closure {
    margin: 24px 0;
    text-align: justify;
  }

  .preview-signature {
    margin-top: 40px;
  }
  .preview-signature-area {
    position: absolute;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    min-height: 120px;
    margin-top: -30px;
  }
  .preview-ttd-image {
    position: absolute;
    top: 50px;
    left: 0;
    width: 220px;
    height: auto;
    object-fit: contain;
  }
  .preview-stamp-image {
    position: absolute;
    top: 15px;
    left: 100px;
    width: 120px;
    height: 120px;
    object-fit: contain;
    opacity: 0.85;
  }

  .preview-signature-line {
    margin-top: 90px;
    padding-top: 8px;
    border-top: 2px solid var(--text-dark);
    max-width: 200px;
  }

  .preview-signature-name {
    font-weight: bold;
  }

  .preview-signature-title {
    font-size: 13px;
  }
  
  .signature-pad {
    border: 2px dashed #e0e0e0;
    border-radius: 8px;
    padding: 12px;
  }
  .signature-canvas {
    width: 100%;
    border-radius: 6px;
    background: #fff;
    border: 1px solid #eee;
    touch-action: none;
  }
  .signature-actions {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }
  .signature-preview {
    margin-top: 10px;
    max-width: 300px;
    height: auto;
    border: 1px solid #eee;
    border-radius: 6px;
  }
  .stempel-preview {
    margin-top: 10px;
    width: 120px;
    height: 120px;
    object-fit: contain;
    background: transparent;
  }

  /* Footer */
  .app-footer {
    background: var(--gradient-primary);
    border-top: 1px solid var(--gray-200);
    padding: 24px;
    text-align: center;
    margin-top: 40px;
  }

  .app-footer p {
    margin: 4px 0;
    font-size: 14px;
    color: var(--text-dark);
  }
    .app-footer p.subText{
      font-size: 120px;
      color: var(--gray-600);
    }

  .app-footer p:first-child {
    font-weight: 600;
  }

  .app-footer p:last-child {
    font-size: 12px;
  }

  /* Icons SVG */
  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  /* Responsive */
  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .preview-column {
      position: sticky;
      top: 100px;
      align-self: start;
    }
  }

  @media (max-width: 768px) {
    .header-content {
      justify-content: center;
    }

    .header-title h1 {
      font-size: 20px;
    }

    .preview-container {
      padding: 30px;
    }

    .button-group {
      flex-direction: column;
    }

    .action-buttons {
      position: sticky;
      bottom: 0;
      z-index: 50;
      margin-bottom: 0;
      border-radius: 0;
    }
  }

  /* Print Styles */
  @media print {
    body {
      background: white;
    }

    .app-header,
    .forms-column,
    .action-buttons,
    .app-footer,
    .no-print,
    .mobile-view-toggle {
      display: none !important;
    }

    .grid-container {
      grid-template-columns: 1fr;
    }

    .preview-container {
      box-shadow: none;
      padding: 0;
      max-width: 100%;
    }

    @page {
      size: A4;
      margin: 2cm;
    }
  }

  /* ===== NEW STYLES ===== */

  /* Inline Validation Errors */
  .input-error {
    border-color: #ef4444 !important;
  }
  .error-message {
    display: block;
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
  }

  /* Label Hint */
  .label-hint {
    display: block;
    font-size: 11px;
    font-weight: 400;
    color: var(--text-muted);
    margin-top: 2px;
  }

  /* File Input Wrapper */
  .file-input-wrapper {
    background: var(--gray-50);
    border: 2px dashed var(--gray-300);
    border-radius: 8px;
    padding: 12px;
    transition: all 0.2s ease;
  }
  .file-input-wrapper:hover {
    border-color: var(--blue-400);
    background: var(--blue-50);
  }
  .file-input-wrapper .form-input {
    border: none;
    padding-left: 30px;
    background: transparent;
  }

  /* Kop Surat Preview */
  .kop-surat-preview {
    margin-top: 12px;
    padding: 12px;
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .kop-surat-preview img {
    max-width: 200px;
    max-height: 80px;
    object-fit: contain;
    border-radius: 4px;
  }
  .btn-remove-preview {
    padding: 6px 12px;
    background: white;
    border: 1px solid #ef4444;
    color: #ef4444;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-remove-preview:hover {
    background: #ef4444;
    color: white;
  }
  .stempel-preview-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
  }

  /* Preview Kop Surat */
  .preview-kop-surat {
    width: 100%;
    max-height: 100px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  /* Mobile View Toggle */
  .mobile-view-toggle {
    display: none;
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--gradient-primary);
    border: none;
    color: white;
    box-shadow: 0 4px 15px rgba(59,130,246,0.4);
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .mobile-view-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(59,130,246,0.5);
  }
  .mobile-view-toggle .icon {
    width: 24px;
    height: 24px;
  }
  .toggle-label {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (max-width: 1023px) {
    .mobile-view-toggle {
      display: flex;
    }
    .forms-column.hidden-mobile,
    .preview-column.hidden-mobile {
      display: none !important;
    }
  }

  /* Report Manager */
  .report-manager {
    padding: 8px 0;
  }
  .report-message {
    padding: 10px 14px;
    border-radius: 8px;
    margin-bottom: 12px;
    font-size: 13px;
    font-weight: 500;
  }
  .report-message.success {
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #6ee7b7;
  }
  .report-message.error {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fca5a5;
  }
  .report-save-form {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
  .report-name-input {
    flex: 1;
    padding: 10px 14px;
    border: 2px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.2s;
  }
  .report-name-input:focus {
    outline: none;
    border-color: var(--blue-400);
    box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
  }
  .btn-save-report {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    background: var(--gradient-primary);
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-save-report:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59,130,246,0.3);
  }
  .report-import {
    margin-bottom: 16px;
  }
  .btn-import {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 10px;
    background: var(--gray-100);
    border: 2px dashed var(--gray-300);
    border-radius: 8px;
    color: var(--gray-600);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-import:hover {
    background: var(--blue-50);
    border-color: var(--blue-300);
    color: var(--blue-600);
  }
  .reports-list-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 12px;
  }
  .no-reports {
    text-align: center;
    color: var(--text-muted);
    font-size: 13px;
    padding: 20px;
  }
  .reports-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .report-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background: var(--gray-50);
    border-radius: 8px;
    transition: all 0.2s;
  }
  .report-item:hover {
    background: var(--blue-50);
  }
  .report-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .report-name {
    font-weight: 600;
    font-size: 14px;
    color: var(--text-dark);
  }
  .report-date {
    font-size: 11px;
    color: var(--text-muted);
  }
  .report-actions {
    display: flex;
    gap: 6px;
  }
  .btn-report-action {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-report-action .icon {
    width: 16px;
    height: 16px;
  }
  .btn-load {
    background: var(--blue-100);
    color: var(--blue-600);
  }
  .btn-load:hover {
    background: var(--blue-600);
    color: white;
  }
  .btn-export {
    background: var(--purple-100);
    color: var(--purple-400);
  }
  .btn-export:hover {
    background: var(--purple-400);
    color: white;
  }
  .btn-delete-report {
    background: #fee2e2;
    color: #ef4444;
  }
  .btn-delete-report:hover {
    background: #ef4444;
    color: white;
  }

  /* ===== TOAST NOTIFICATIONS ===== */
  .toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
  }
  .toast {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15), 0 2px 10px rgba(0,0,0,0.1);
    animation: slideIn 0.3s ease-out;
  }
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .toast-success {
    border-left: 4px solid #10b981;
  }
  .toast-success .toast-icon {
    color: #10b981;
  }
  .toast-error {
    border-left: 4px solid #ef4444;
  }
  .toast-error .toast-icon {
    color: #ef4444;
  }
  .toast-info {
    border-left: 4px solid var(--blue-500);
  }
  .toast-info .toast-icon {
    color: var(--blue-500);
  }
  .toast-icon {
    flex-shrink: 0;
  }
  .toast-icon .icon {
    width: 20px;
    height: 20px;
  }
  .toast-message {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-dark);
  }
  .toast-close {
    flex-shrink: 0;
    padding: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;
  }
  .toast-close:hover {
    opacity: 1;
  }
  .toast-close .icon {
    width: 16px;
    height: 16px;
  }

  /* Loading Spinner Animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .icon-spin {
    animation: spin 1s linear infinite;
  }

  /* ===== UPDATED PREVIEW STYLES FOR MOBILE ===== */
  @media (max-width: 1023px) {
    .preview-container {
      padding: 25px 20px;
      max-width: 100%;
      margin: 0;
      font-size: 12px;
    }
    .preview-header h1 {
      font-size: 18px;
    }
    .preview-header p {
      font-size: 12px;
    }
    .preview-table td:first-child {
      width: 80px;
    }
    .preview-signature-area {
      min-height: 80px;
    }
    .preview-ttd-image {
      width: 150px;
    }
    .preview-stamp-image {
      width: 80px;
      height: 80px;
      left: 60px;
    }
    .preview-signature-line {
      margin-top: 70px;
    }
  }

  /* Mobile toast position adjustment */
  @media (max-width: 768px) {
    .toast-container {
      top: 10px;
      right: 10px;
      left: 10px;
      max-width: none;
    }
    .toast {
      padding: 12px 14px;
    }
    .toast-message {
      font-size: 13px;
    }
  }

  /* ===== CONFIRM DIALOG ===== */
  .confirm-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .confirm-dialog {
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 90%;
    animation: scaleIn 0.2s ease;
  }
  @keyframes scaleIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .confirm-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--gray-200);
  }
  .confirm-header h3 {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-dark);
    margin: 0;
  }
  .confirm-close {
    padding: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;
  }
  .confirm-close:hover {
    opacity: 1;
  }
  .confirm-close .icon {
    width: 20px;
    height: 20px;
  }
  .confirm-body {
    padding: 20px;
  }
  .confirm-body p {
    font-size: 14px;
    color: var(--text-dark);
    margin: 0;
    line-height: 1.5;
  }
  .confirm-actions {
    display: flex;
    gap: 10px;
    padding: 16px 20px;
    border-top: 1px solid var(--gray-200);
    justify-content: flex-end;
  }
  .btn-confirm-cancel {
    padding: 10px 20px;
    background: var(--gray-100);
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-confirm-cancel:hover {
    background: var(--gray-200);
  }
  .btn-confirm-ok {
    padding: 10px 20px;
    background: var(--gradient-primary);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-confirm-ok:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  /* ===== FLOATING ACTION BUTTONS (MOBILE) ===== */
  .floating-actions {
    display: none;
    position: fixed;
    top: 100px;
    right: 15px;
    z-index: 999;
    flex-direction: column;
    gap: 10px;
  }
  .fab {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  .fab:hover {
    transform: scale(1.1);
  }
  .fab:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  .fab .icon {
    width: 20px;
    height: 20px;
  }
  .fab-label {
    font-size: 8px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .fab-reset {
    background: white;
    color: var(--gray-700);
    border: 1px solid var(--gray-300);
  }
  .fab-reset:hover {
    background: var(--gray-100);
  }
  .fab-download {
    background: var(--gradient-primary);
    color: white;
  }
  .fab-download:hover {
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }

  @media (max-width: 1023px) {
    .floating-actions {
      display: flex;
      /* Position above the Form/Preview toggle button */
      bottom: 160px;
      top: auto;
      right: 20px;
    }
    /* Hide desktop action buttons on mobile */
    .action-buttons {
      display: none !important;
    }
  }

  /* ===== KOP SURAT TOGGLE SWITCH ===== */
  .kop-toggle-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: var(--gray-50);
    border-radius: 10px;
    margin-bottom: 16px;
  }
  .kop-toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
  }
  .kop-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .kop-toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray-300);
    transition: 0.3s;
    border-radius: 26px;
  }
  .kop-toggle-slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .kop-toggle input:checked + .kop-toggle-slider {
    background: var(--gradient-primary);
  }
  .kop-toggle input:checked + .kop-toggle-slider:before {
    transform: translateX(24px);
  }
  .kop-toggle-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-dark);
  }
  .kop-fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 8px;
    animation: fadeIn 0.3s ease;
  }
  .kop-logo-preview {
    margin-top: 12px;
    padding: 12px;
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .kop-logo-preview img {
    max-width: 120px;
    max-height: 60px;
    object-fit: contain;
    border-radius: 4px;
  }
  .form-textarea {
    width: 100%;
    padding: 12px 14px;
    border: 2px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
    font-family: inherit;
    resize: vertical;
    transition: all 0.2s ease;
  }
  .form-textarea:focus {
    outline: none;
    border-color: var(--blue-400);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }

  /* Kop Surat Preview - Standard Letterhead Format */
  /* Logo on left, text centered in middle */
  .preview-kop-surat-container {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 12px;
    margin-bottom: 15px;
    border-bottom: 3px double #000;
  }
  .preview-kop-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    flex-shrink: 0;
  }
  .preview-kop-text {
    flex: 1;
    text-align: center;
  }
  .preview-kop-nama {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 4px 0;
    letter-spacing: 2px;
    color: #000;
  }
  .preview-kop-alamat {
    font-size: 12px;
    margin: 4px 0;
    line-height: 1.4;
    color: #333;
  }
  .preview-kop-contact {
    font-size: 11px;
    margin: 4px 0 0 0;
    color: #333;
  }

  /* ===== ACTION BUTTONS BAR (ABOVE PREVIEW) ===== */
  .action-buttons-bar {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 16px;
    padding: 12px 16px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    border: 1px solid var(--gray-200);
  }
  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }
  .action-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .action-btn .icon {
    width: 16px;
    height: 16px;
  }
  .action-btn-reset {
    background: white;
    color: var(--gray-700);
    border: 1px solid var(--gray-300);
  }
  .action-btn-reset:hover:not(:disabled) {
    background: var(--gray-100);
    border-color: var(--gray-400);
  }
  .action-btn-download {
    background: var(--gradient-primary);
    color: white;
  }
  .action-btn-download:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 1023px) {
    .action-buttons-bar {
      display: none;
    }
  }
`;
