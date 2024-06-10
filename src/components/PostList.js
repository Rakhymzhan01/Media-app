import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import Post from './Post';

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
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
