// src/styles/styles.js

export const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: linear-gradient(135deg, #FFF8E1 0%, #FFFFFF 50%, #FFF9C4 100%);
    min-height: 100vh;
  }

  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Header */
  .app-header {
    background: linear-gradient(135deg, #FFC107 0%, #FFB300 100%);
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
  }

  .header-title p {
    font-size: 14px;
    opacity: 0.9;
    margin: 2px 0 0 0;
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
    background: linear-gradient(135deg, #FFC107 0%, #FFB300 100%);
    color: white;
  }

  .accordion-header:hover:not(.active) {
    background: #FFF8E1;
  }

  .accordion-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .accordion-icon {
    width: 22px;
    height: 22px;
    color: #FFC107;
  }

  .accordion-header.active .accordion-icon {
    color: white;
  }

  .accordion-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .accordion-header.active .accordion-title {
    color: white;
  }

  .accordion-chevron {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    color: #666;
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
    color: #333;
    margin-bottom: 8px;
  }

  .form-label .required {
    color: #f44336;
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
    color: #999;
    width: 18px;
    height: 18px;
  }

  .form-input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s ease;
  }

  .form-input:focus {
    outline: none;
    border-color: #FFC107;
    box-shadow: 0 0 0 3px rgba(255,193,7,0.1);
  }

  .form-input::placeholder {
    color: #999;
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
    color: #666;
  }

  .pekerjaan-input {
    flex: 1;
    padding: 10px 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s ease;
  }

  .pekerjaan-input:focus {
    outline: none;
    border-color: #FFC107;
    box-shadow: 0 0 0 3px rgba(255,193,7,0.1);
  }

  .btn-delete {
    padding: 10px;
    background: white;
    border: 2px solid #f44336;
    border-radius: 8px;
    color: #f44336;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-delete:hover {
    background: #f44336;
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
    background: #FFF8E1;
    border: 2px solid #FFC107;
    border-radius: 8px;
    color: #F57C00;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .btn-add:hover {
    background: #FFC107;
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
    color: #333;
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
    background: linear-gradient(135deg, #FFC107 0%, #FFB300 100%);
    border: none;
    color: white;
    box-shadow: 0 2px 4px rgba(255,193,7,0.3);
  }

  .btn-download:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255,193,7,0.4);
  }

  .action-info {
    margin-top: 12px;
    text-align: center;
    font-size: 12px;
    color: #999;
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
    border-bottom: 4px solid #030303ff;
  }

  .preview-header h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: -8px;
  }

  .preview-header p {
    font-size: 14px;
    color: #2c2c2cff;
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
    border-top: 2px solid #333;
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
    background: #f5f5f5;
    border-top: 1px solid #e0e0e0;
    padding: 24px;
    text-align: center;
    margin-top: 40px;
  }

  .app-footer p {
    margin: 4px 0;
    font-size: 14px;
    color: #666;
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
    .no-print {
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
`;
