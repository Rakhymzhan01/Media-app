import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`https://dummyjson.com/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostPage;
