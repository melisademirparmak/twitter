import React from 'react';

function Follow() {
  return (
    <>
      <div className="widgest">
        <div className="widgest__container">
          <div className="widgest__title">
            <h2>Who to follow</h2>
          </div>
          <div className="follow">
            <div className="follow__avatar">
              <img
                src="https://p.kindpng.com/picc/s/78-786678_avatar-hd-png-download.png"
                alt=""
              />
              <div className="follow__user">
                <h4>Adam</h4>
                <span>@adam</span>
              </div>
            </div>
            <button className="follow__followBtn">Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Follow;
