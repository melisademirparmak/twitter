import React from 'react';
import { BiSearchAlt2 } from '@react-icons/all-files/bi/BiSearchAlt2';
import { FiMoreHorizontal } from '@react-icons/all-files/fi/FiMoreHorizontal';

function Widgets() {
  return (
    <div className="widgest">
      <div className="widgest__input">
        <BiSearchAlt2 size={20} className="widgest__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgest__container">
        <h2>Trends for you</h2>
        <div className="widgest__top">
          <div className="widgest__trend">
            <span>melisa</span>
            <h4>#frontend</h4>
            <span>21k Tweets</span>
          </div>
          <div className="widgest__more">
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
