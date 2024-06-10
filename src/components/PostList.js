import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import Post from './Post';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const allPosts = await fetchPosts();
      setPosts(allPosts);
    };
    getPosts();
  }, []);

  return (
    <div className="container">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
