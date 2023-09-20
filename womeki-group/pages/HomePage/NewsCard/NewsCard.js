import React from "react";
import data from "./NewsCard.json";
import styles from "./NewsCard.module.css";
import Image from "next/Image";

const NewsCard = () => {
  return (
    <div>
      <div className="container mt-5">
        {data.Section.map((NewsCardData) => {
          return (
            <div className="row">
              <h2 className={`text-center ${styles.NewsHeading} `} >{NewsCardData.Heading}</h2>
            </div>
          );
        })}

        <div className={` d-flex mt-3 ${styles.News_Card} `}>
          {data.Section1.map((NewsCardData, index) => {
            return (
              <div className={`col-3 p-3 ${styles.NewsSection} `}>
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
                    <span className=" ms-3 ">
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
  );
};

export default NewsCard;
