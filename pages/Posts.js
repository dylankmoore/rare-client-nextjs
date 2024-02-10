import React, { useEffect, useState } from 'react';
import getAllPosts from '../utils/data/PostData';

function Posts() {
  const [getPosts, setPosts] = useState([]);

  const getAllThePosts = () => {
    getAllPosts().then(setPosts);
  };
  useEffect(() => {
    getAllThePosts();
  }, []);

  console.warn(getPosts);

  return (
    <div>Posts</div>
  );
}

export default Posts;
