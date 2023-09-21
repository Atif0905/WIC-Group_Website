import React from "react";
import styles from "./News.module.css";
import data from "./News.json";

const News = ({ title, cover, summary, createdAt, content }) => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <img src={"http://localhost:4000/" + cover} alt="nn" />
          <h1 className={styles.newstitle}>{title}</h1>
          <h1>{summary}</h1>
          <h1>{createdAt}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
