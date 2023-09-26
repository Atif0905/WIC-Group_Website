import React from "react";
import data from "./NewsCard.json";
import styles from "./NewsCard.module.css";
import Image from "next/Image";

const NewsCard = () => {
  return (
    <div>
      <div className="fluid mt-5">
        <div className="container">
        <div className="row">
          <div className="col-12 col-lg mt-5">
            <div className="row">
              {data.FeaturedTopic.map((NewData) => {
                return (
                  <div>
                    <h4 className={`mb-5 text-center ${styles.FeatureHeading}`}>{NewData.Heading}</h4>
                  </div>
                );
              })}
              {data.Section2.map((NewData) => {
                return (
                  <div className="col-lg-6 col-md-12">
                    <div
                      className={`card border-0 rounded-0 ${styles.businesscardbox}`}
                    >
                      <Image
                        className={`card-img-top ${styles.businesscardimg}`}
                        width={500}
                        height={250}
                        src={NewData.Image}
                      />
                      <div className="card-body">
                        <h5 className={`card-title ${styles.NewsBlogHead}`}>{NewData.Heading}</h5>
                        <p className={`card-text ${styles.NewsBlogContent}`}>{NewData.Content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              {data.Section3.map((NewData) => {
                return (
                  <div className="col-lg-6 col-md-12 mt-5">
                    <div
                      className={`card border-0 rounded-0 ${styles.businesscardbox}`}
                    >
                      <Image
                        className={`card-img-top ${styles.businesscardimg}`}
                        width={500}
                        height={250}
                        src={NewData.Image}
                      />
                      <div className="card-body">
                        <h5 className={`card-title ${styles.NewsBlogHead}`}>{NewData.Heading}</h5>
                        <p className={`card-text ${styles.NewsBlogContent}`}>{NewData.Content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              {data.Section4.map((NewData) => {
                return (
                  <div className="col-lg-6 col-md-12 mt-5">
                    <div
                      className={`card border-0 rounded-0 ${styles.businesscardbox}`}
                    >
                      <Image
                        className={`card-img-top ${styles.businesscardimg}`}
                        width={500}
                        height={250}
                        src={NewData.Image}
                      />
                      <div className="card-body">
                        <h5 className={`card-title ${styles.NewsBlogHead}`}>{NewData.Heading}</h5>
                        <p className={`card-text ${styles.NewsBlogContent}`}>{NewData.Content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`col-lg-4 col-md-12 mt-5 ms-3 ${styles.News_Card}`}>
          {data.LatestNews.map((NewData) => {
                return (
                  <div>
                    <h4 className={`mb-5 text-center ${styles.NewsHeading}`}>{NewData.Heading}</h4>
                  </div>
                );
              })}
            {data.Section1.map((NewsCardData) => {
              return (
                <div className={`mt-5 ${styles.NewsSection}`}>
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

export default NewsCard;
