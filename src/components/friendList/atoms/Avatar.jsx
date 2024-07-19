// components/atoms/Avatar.js
import React from 'react';

const Avatar = ({ src, alt }) => (
  <img className="w-8 h-8 rounded-full" src={src} alt={alt} />
);

export default Avatar;
