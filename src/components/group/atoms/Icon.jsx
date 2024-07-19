// components/atoms/Icon.jsx
import React from 'react';

const Icon = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="w-8 h-8" />
  );
};

export default Icon;
