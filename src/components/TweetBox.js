import React from 'react';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <picture>
            <img
              src="https://www.mothermary.rw/images/img/lady.jpg"
              alt="Avatar"
            />
          </picture>
          <input type="text" placeholder="What's happening ?" />
        </div>

        <button className="tweetBox__btn">Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;
