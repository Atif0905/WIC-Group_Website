import React, { useEffect, useState } from "react";
import News from "./News/News";
import styles from "../pages/News/News.module.css";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);

  return (
    <div className="pt-5">
      <div className={`d-flex ms-5 ${styles.responsivediv}`}>
        <div className={` text-center ${styles.newswomekihead}`}>
          <h1 className={` text-center ${styles.newswomekiheading}`}>Womeki Times</h1>
        </div>
        <div className={`text-center ${styles.borderDiv}`}>
          <span className={styles.hiddenText}>aaaaaaaaaaaaaaaaaa</span>
        </div>
      </div>
      {/* <h4 className={`${styles.newswomekisubhead}`}>
        Groups insider scoop Your passport to insights
      </h4> */}
      <h1 className={`text-center ${styles.newsmaintitle}`}>News</h1>
      {posts.length > 0 ? (
        posts.map((newPost, index) => <News key={index} {...newPost} />)
      ) : (
        <p>No posts available.</p>
      )}
      <div className="d-flex ms-5 mt-5">
        <div className={`text-center ${styles.borderDiv1}`}>
          <span className={styles.hiddenText1}>aaaaaaaaaaaaaaaaaa</span>
        </div>
        <div className={` text-center ${styles.newswomekihead1}`}>
          <span>
            <h1 className={` text-center ${styles.newswomekiheading}`}>
              Womeki
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
