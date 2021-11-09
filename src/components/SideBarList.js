import React from 'react';

const SideBarList = ({ active, text, Icon }) => {
  return (
    <div className={`sideBarList ${active && 'sideBarList__Active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SideBarList;
