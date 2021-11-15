import React from 'react';
import '../css/style.css';
import { Helmet } from 'react-helmet';
import SideBar from './SideBar';
import Widgets from './Widgets';
import Messages from './Messages';

function layout({ children, title }) {
  return (
    <div className="root">
      <div className="container-large app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${title} / Twitter`}</title>
        </Helmet>
        <SideBar />
        {children}
        <Widgets />
      </div>
      <Messages />
    </div>
  );
}

export default layout;
