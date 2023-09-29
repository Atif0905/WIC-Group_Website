import React from "react";
import data from "./NewsCard.json";
import styles from "./NewsCard.module.css";
import Image from "next/Image";

const LatestNews = () => {
  return (
    <div>
      <div className="fluid mt-5">
        <div className="container">
            
          <div className="row">
            <div className={`col-12 col-md-12 mt-5 ms-3 ${styles.News_Card}`}>
              {data.LatestNews.map((NewData,index) => {
                return (
                  <div key={index}>
                    <h4 className={` text-center ${styles.NewsHeading}`}>
                      {NewData.Heading}
                    </h4>
                    
                  </div>
                );
              })}
              {data.Section1.map((NewsCardData,index) => {
                return (
                  <div key={index} className={`mt-5 ${styles.NewsSection}`}>
                    <p className={styles.newspara}>
                      <Image
                        src={NewsCardData.Image}
                        alt="News-img"
                        width={20}
                        height={20}
                      />
                      {NewsCardData.Content}
                    </p>
                    <p className={styles.newspara1}>
                      <a className={styles.TextLink} href="">
                        {NewsCardData.Content1}
                        <span className="ms-3">
                          <Image
                            src={NewsCardData.Image1}
                            alt="News-img"
                            width={12}
                            height={12}
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestNews;