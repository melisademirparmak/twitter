import React from 'react';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import Menu from './Menu';

const SideBar = () => {
  return (
    <div className="sideBar">
      <AiOutlineTwitter className="sideBar__TwitterIcon" />
      <Menu />
      <button className="sideBar__Btn">Tweet</button>
    </div>
  );
};

export default SideBar;

