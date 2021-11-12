import React from 'react';
import { GoFileMedia } from '@react-icons/all-files/go/GoFileMedia';
import { AiOutlineFileGif } from '@react-icons/all-files/ai/AiOutlineFileGif';
import { BiPoll } from '@react-icons/all-files/bi/BiPoll';
import { GrEmoji } from '@react-icons/all-files/gr/GrEmoji';

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
        <div className="tweetBox__footer">
          <div className="tweetBox__icon">
            <GoFileMedia size={17} />
            <AiOutlineFileGif size={17} />
            <BiPoll size={17} />
            <GrEmoji size={17} />
          </div>
          <button className="tweetBox__btn">Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
