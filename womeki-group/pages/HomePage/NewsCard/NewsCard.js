import React from "react";
import data from "./NewsCard.json";
import styles from "./NewsCard.module.css";
import Image from "next/Image";

const NewsCard = ({ title, cover, summary, createdAt, content }) => {
  return (
    <div>
          <div className={`container mt-5 ${styles.maindiv}`}>
      <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
          <img className={styles.newsimg} src={"http://localhost:4000/" + cover} alt="nn" />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
          <h2 className={styles.newshead}>{title}</h2>
          <p className={styles.newscontent}>{summary}</p>
          <p className={`mt-5 ${styles.newspara}`}>{createdAt}</p>
          </div>
          {/* <p>{content}</p> */}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;