import React from "react";
import styles from "./News.module.css";
import Image from "next/image";

const News = ({ title, cover, summary, createdAt, content }) => {
  return (
    <div >
    <div className="fluid">
      <div className={`container mt-5 ${styles.maindiv}`}>
        <div className="row">
          <div className="col-12 text-center">
            <div>
            <Image
              className={styles.newsimg}
              height={400}
              width={800}
              src={"http://localhost:4000/" + cover}
              alt="nn"
            />
            <div className={styles.overDiv}>
            <h4 className={ styles.newshead}>{title}</h4>
            <p className={styles.newscontent}>{summary}</p>
            <p className={`mt-5 ${styles.newspara}`}>{createdAt}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default News;
