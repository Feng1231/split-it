import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, placeholder, id, value, onChange, className, required = true }) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
    required={required}
  />
);

export default Input;
