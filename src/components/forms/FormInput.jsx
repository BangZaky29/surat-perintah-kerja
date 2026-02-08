// src/components/forms/FormInput.jsx
import React from 'react';

/**
 * Reusable input field with icon and label
 */
const FormInput = ({
    label,
    icon: Icon,
    value,
    onChange,
    placeholder,
    type = 'text',
    required = false,
    error = null
}) => {
    return (
        <div className="form-group">
            <label className="form-label">
                {label} {required && <span className="required">*</span>}
            </label>
            <div className="input-wrapper">
                {Icon && <Icon />}
                <input
                    type={type}
                    className={`form-input ${error ? 'input-error' : ''}`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default FormInput;
