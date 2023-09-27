import React, { useEffect, useState } from 'react';
import News from './News/News'; // Assuming 'News' is another component you've imported

import styles from "../pages/News/News.module.css";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  
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
      <h1 className={styles.newswomekihead}>Womeki</h1>
      <h4 className={`${styles.newswomekisubhead}`}>Groups insider scoop Your passport to insights</h4>
      <h1 className={`text-center ${styles.newsmaintitle}`}>News</h1>
      {posts.length > 0 ? (
        posts.map((newPost, index) => (
          <News key={index} {...newPost} />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default NewsPage;
