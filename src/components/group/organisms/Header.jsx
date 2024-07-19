// components/organisms/Header.jsx
import React from 'react';
import Text from '../atoms/Text';

const Header = ({ title, amount }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow mb-4">
      <Text className="font-bold">{title}</Text>
      <Text className="text-green-500">{amount}</Text>
    </div>
  );
};

export default Header;
