// components/organisms/GroupSection.jsx
import React from 'react';
import GroupList from '../molecules/GroupList';

const GroupSection = ({ groups }) => {
  return (
    <div className="p-4">
      <GroupList groups={groups} />
    </div>
  );
};

export default GroupSection;
