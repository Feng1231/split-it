// components/organisms/Footer.jsx
import React from 'react';
import Button from '../atoms/Button';

const Footer = ({ onAddExpense }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow">
      <Button onClick={onAddExpense} className="w-full">Add expense</Button>
    </div>
  );
};

export default Footer;
