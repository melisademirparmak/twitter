import React from 'react';
import '../css/style.css';
import SideBar from './SideBar';
import Widgets from './Widgets';

function layout({ children }) {
  return (
    <div className="container-large app">
      <SideBar />
      {children}
      <Widgets />
    </div>
  );
}

export default layout;
