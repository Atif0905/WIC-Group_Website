import React, { useEffect, useState } from 'react'
import News from './News/News'

const news = () => {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
        console.log(posts)
      });
    });
  }, []);
  return (
    <div className="pt-5">
    {posts.length > 0 ? (
      posts.map((newPost, index) => (
        <News key={index} {...newPost} />
      ))
    ) : (
      <p>No posts available.</p>
    )}
  </div>
  )
}

export default news
