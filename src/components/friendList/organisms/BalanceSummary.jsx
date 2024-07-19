// components/organisms/BalanceSummary.js
import React from 'react';
import UserOwed from '../molecules/UserOwed';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const BalanceSummary = ({ overallOwed, users, onAddFriend }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <Text className="text-lg font-semibold mb-4">
      Overall, you are owed {overallOwed}
    </Text>
    {users.map(user => (
      <UserOwed key={user.name} user={user} amount={user.amount} />
    ))}
    <Button className="mt-4" onClick={onAddFriend}>
      Add Friend
    </Button>
  </div>
);

export default BalanceSummary;
