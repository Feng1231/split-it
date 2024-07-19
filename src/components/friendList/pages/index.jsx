// pages/index.js
import React from 'react';
import BalanceSummary from '../organisms/BalanceSummary';

const users = [
  { name: 'Chen Feng', avatar: '/path/to/avatar1.png', amount: 'US$2.50' },
  { name: 'jk', avatar: '/path/to/avatar2.png', amount: 'no expenses' },
];

const IndexPage = () => {
  const handleAddFriend = () => {
    alert('Add Friend button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BalanceSummary overallOwed="US$2.50" users={users} onAddFriend={handleAddFriend} />
    </div>
  );
};

export default IndexPage;
