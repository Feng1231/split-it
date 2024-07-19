// components/atoms/Button.jsx
import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`py-2 px-4 bg-green-500 text-white rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
