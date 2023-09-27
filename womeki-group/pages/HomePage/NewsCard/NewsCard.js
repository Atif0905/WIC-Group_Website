import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ title, cover, summary, createdAt, content }) => {
  return (
    <div>
     
      <div className="fluid mt-5">
        <div className="container">
          <div className="row">
            <div className="d-flex">
          <div className=" d-flex col-lg-12 col-md-12 mt-5">
                  <div
                    className={`card border-0 rounded-0 ${styles.businesscardbox}`}
                  >
                    <img
                      className={`card-img-top ${styles.businesscardimg}`}
                      height={300}
                      width={300}
                      src={"http://localhost:4000/" + cover}
                      alt="nn"
                    />
                    <div className="card-body">
                      <h5 className={`card-title ${styles.NewsBlogHead}`}>
                        {title}
                      </h5>
                      {/* <p className={`card-text ${styles.NewsBlogContent}`}>
                        {summary}
                      </p>
                      <p className={`card-text ${styles.NewsBlogContent}`}>
                        {createdAt}
                      </p>
                      <p className={`card-text ${styles.NewsBlogContent}`}>
                        {content}
                      </p> */}
                    </div>
                  </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
