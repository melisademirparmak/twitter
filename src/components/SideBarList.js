import React from 'react';
import { Link } from 'react-router-dom';

const SideBarList = ({ active, text, Icon }) => {
  return (
    <div className={`sideBarList ${active && 'sideBarList__Active'}`}>
      <Link to={`/${text?.toLowerCase()}`}>
        <Icon />
        <h2>{text}</h2>
      </Link>
    </div>
  );
};

export default SideBarList;
