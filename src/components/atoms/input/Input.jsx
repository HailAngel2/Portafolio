import React from 'react';
import './Input.css';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  multiline = false,
  rows = 4,
  estiloExtra = '',
  maxLength = 600 
}) => {
  return multiline ? (
    <textarea
      className={`input input-textarea ${estiloExtra}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      maxLength={maxLength}

    />
  ) : (
    <input
      className={`input input-${type} ${estiloExtra}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={200}
    />
  );
};

export default Input;