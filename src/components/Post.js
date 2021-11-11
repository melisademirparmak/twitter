import React from 'react';
import Posts from '../api/post.json';

function Post() {
  return (
    <div classNmae="post">
      {Posts.map((post) => (
        <div key={post.id}>
          <div className="d-flex">
            <img src={post.avatar} className="post__avatar" alt="Avatar" />
            <h4 className="post__name">{post.name}</h4>
            <h5 className="post__userName">{post.userName}</h5>
          </div>

          <div className="post__text">{post.text}</div>
          <img src={post.photo} className="post__photo" alt="PostPhoto" />
        </div>
      ))}
    </div>
  );
}

export default Post;
