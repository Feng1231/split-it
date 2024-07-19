// pages/index.jsx
import React from 'react';
import MainTemplate from '../templates/MainTemplate';

const groups = [
  {
    iconSrc: '/path/to/icon1.png',
    iconAlt: 'Icon 1',
    title: '7july jb',
    subtitle: 'no expenses',
    amount: '',
  },
  {
    iconSrc: '/path/to/icon2.png',
    iconAlt: 'Icon 2',
    title: 'Test split it',
    subtitle: 'Chen F. owes you US$2.50',
    amount: 'US$2.50',
  },
  {
    iconSrc: '/path/to/icon3.png',
    iconAlt: 'Icon 3',
    title: 'Non-group expenses',
    subtitle: 'no expenses',
    amount: '',
  },
];

const IndexPage = () => {
  const handleAddExpense = () => {
    // Handle add expense action
  };

  return (
    <MainTemplate

      headerTitle="Overall, you are owed"
      headerAmount="US$2.50"
      groups={groups}
      onAddExpense={handleAddExpense}
    />
  );
};

export default IndexPage;
