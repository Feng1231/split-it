// components/molecules/ListItem.jsx
import React from 'react';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const ListItem = ({ iconSrc, iconAlt, title, subtitle, amount }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded shadow mb-2">
      <Icon src={iconSrc} alt={iconAlt} />
      <div className="ml-4">
        <Text className="font-bold">{title}</Text>
        <Text className="text-gray-600">{subtitle}</Text>
      </div>
      {amount && <Text className="ml-auto text-green-500">{amount}</Text>}
    </div>
  );
};

export default ListItem;
