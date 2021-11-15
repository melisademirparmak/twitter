import React from 'react';
import { BiSearchAlt2 } from '@react-icons/all-files/bi/BiSearchAlt2';
import { FiMoreHorizontal } from '@react-icons/all-files/fi/FiMoreHorizontal';
import { FiSettings } from '@react-icons/all-files/fi/FiSettings';
import trends from '../api/trends.json';
import Follow from './Follow';
import Button from '../ui/Button';

function Widgets() {
  return (
    <>
      <div className="widgest">
        <div className="widgest__input">
          <BiSearchAlt2 size={20} className="widgest__searchIcon" />
          <input type="text" placeholder="Search Twitter" />
        </div>

        <div className="widgest__container">
          <div className="widgest__title">
            <h2>Trends for you</h2>
            <FiSettings />
          </div>

          {trends.map((trend) => (
            <div className="widgest__top">
              <div className="widgest__trend">
                <span>{trend.trend}</span>
                <h4>{trend.hastag}</h4>
                <span>{trend.tweets}</span>
              </div>
              <div className="widgest__more">
                <FiMoreHorizontal />
              </div>
            </div>
          ))}
          <Button />
        </div>
        <Follow />
      </div>
    </>
  );
}

export default Widgets;
