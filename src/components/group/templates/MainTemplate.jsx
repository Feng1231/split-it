// components/templates/MainTemplate.jsx
import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import GroupSection from '../organisms/GroupSection';


const MainTemplate = ({ headerTitle, headerAmount, groups, onAddExpense }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={headerTitle} amount={headerAmount} />
      <GroupSection groups={groups} />
      <Footer onAddExpense={onAddExpense} />
    </div>
  );
};

export default MainTemplate;
