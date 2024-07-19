// components/atoms/Text.jsx
import React from 'react';

const Text = ({ children, className }) => {
  return (
    <p className={`text-sm ${className}`}>
      {children}
    </p>
  );
};

export default Text;
