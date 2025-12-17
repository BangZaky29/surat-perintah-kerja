// src/components/Accordion.jsx
import React from 'react';
import { ChevronDownIcon } from '../icons/Icons';

const Accordion = ({ id, title, icon: Icon, isOpen, onToggle, children }) => {
  return (
    <div className="accordion">
      <button
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={() => onToggle(id)}
      >
        <div className="accordion-header-left">
          <Icon />
          <span className="accordion-title">{title}</span>
        </div>
        <ChevronDownIcon />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;