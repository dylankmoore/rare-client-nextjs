import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../utils/data/PostData';
import PostsCard from '../components/Posts/PostsCard';

function Posts() {
  const [getPosts, setPosts] = useState([]);

  const getAllThePosts = () => {
    getAllPosts().then(setPosts);
  };
  useEffect(() => {
    getAllThePosts();
  }, []);

  return (
    <div className="post-page">
      {getPosts.map((post) => <PostsCard postObj={post} key={post.id} />)}
    </div>
  );
}

export default Posts;
