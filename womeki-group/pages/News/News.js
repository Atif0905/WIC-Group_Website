import React from "react";
import styles from "./News.module.css";
import data from "./News.json";



      

const   News = ({ title, cover, summary, createdAt, content }) => {
  return (
    <div className="container mt-5">
      <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
          <img className={styles.newsimg} height={300} width={300} src={"http://localhost:4000/" + cover} alt="nn" />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
          <h2 className={styles.newshead}>{title}</h2>
          <p className={styles.newscontent}>{summary}</p>
          <p className={`mt-5 ${styles.newspara}`}>{createdAt}</p>
          </div>
          {/* <p>{content}</p> */}
        </div>
      </div>
  );
};

export default News;
