// components/molecules/UserOwed.js
import React from 'react';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';

const UserOwed = ({ user, amount }) => (
  <div className="flex items-center justify-between p-2">
    <div className="flex items-center">
      <Avatar src={user.avatar} alt={user.name} />
      <Text className="ml-2">{user.name}</Text>
    </div>
    <Text className="text-green-500">{amount}</Text>
  </div>
);

export default UserOwed;
