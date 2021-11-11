import React from 'react';
import { BsFillReplyFill } from '@react-icons/all-files/bs/BsFillReplyFill';
import { AiOutlineRetweet } from '@react-icons/all-files/ai/AiOutlineRetweet';
import { BiHeart } from '@react-icons/all-files/bi/BiHeart';
import { FiShare } from '@react-icons/all-files/fi/FiShare';
import Posts from '../api/post.json';

function Post() {
  return (
    <>
      {Posts.map((post) => (
        <div key={post.id}>
          <div className="post">
            <div className="post__avatar">
              <img src={post.avatar} alt="" />
            </div>
            <div className="post__body">
              <div className="post__header">
                <div className="post__headerText">
                  <h3>
                    {post.name}
                    <span className="post__headerSpecial">{post.userName}</span>
                    <span>{post.time}</span>
                  </h3>
                </div>
                <div className="post__headerDescription">
                  <p>{post.text}</p>
                </div>
              </div>
              <img src={post.photo} alt="" />
              <div className="post__footer">
                <BsFillReplyFill />
                <AiOutlineRetweet />
                <BiHeart />
                <FiShare />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
