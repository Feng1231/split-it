// components/atoms/Button.js
import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    className={`py-2 px-4 bg-green-500 text-white rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
