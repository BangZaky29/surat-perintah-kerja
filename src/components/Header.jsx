// src/components/Header.jsx
import React from 'react';
import { FileTextIcon } from '../icons/Icons';
import logo from '../assets/logo-1.jpeg';

const Header = () => {
  return (
    <header className="app-header no-print">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-title">
          <h1>GENERATOR SURAT PERINTAH KERJA</h1>
          <p>Surat Perintah Kerja</p>
        </div>
      </div>
    </header>
  );
};

export default Header;