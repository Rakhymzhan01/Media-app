import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
};

export default Post;
