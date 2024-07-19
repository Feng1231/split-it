// components/molecules/GroupList.jsx
import React from 'react';
import ListItem from './ListItem';

const GroupList = ({ groups = [] }) => {
  return (
    <div>
      {groups.map((group, index) => (
        <ListItem
          key={index}
          iconSrc={group.iconSrc}
          iconAlt={group.iconAlt}
          title={group.title}
          subtitle={group.subtitle}
          amount={group.amount}
        />
      ))}
    </div>
  );
};

export default GroupList;
