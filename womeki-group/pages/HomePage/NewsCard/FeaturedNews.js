import React from "react";
import data from "./NewsCard.json";
import styles from "./NewsCard.module.css";
import Image from "next/image";

const FeaturedNews = () => {
  return (
    <div>
      <div className="fluid mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg mt-5">
              <div className="row">
                {data.FeaturedTopic.map((NewData,index) => {
                  return (
                    <div key={index}>
                      <h4 className={` text-center ${styles.FeatureHeading}`}>
                        {NewData.Heading}
                      </h4>
                    </div>
                  );
                })}
                {data.Section2.map((NewData,index) => {
                  return (
                    <div key={index} className="col-lg-6 col-md-12">
                      <div
                        className={`card border-0 rounded-0 ${styles.businesscardbox}`}
                      >
                        <Image
                          className={`card-img-top ${styles.businesscardimg}`}
                          width={500}
                          height={250}
                          src={NewData.Image}
                          alt="oo"
                        />
                        <div className="card-body">
                          <h5 className={`card-title ${styles.NewsBlogHead}`}>
                            {NewData.Heading}
                          </h5>
                          <p className={`card-text ${styles.NewsBlogContent}`}>
                            {NewData.Content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                {data.Section3.map((NewData,index) => {
                  return (
                    <div key={index} className="col-lg-6 col-md-12 mt-5">
                      <div
                        className={`card border-0 rounded-0 ${styles.businesscardbox}`}
                      >
                        <Image
                          className={`card-img-top ${styles.businesscardimg}`}
                          width={500}
                          height={250}
                          src={NewData.Image}
                          alt="pp"
                        />
                        <div className="card-body">
                          <h5 className={`card-title ${styles.NewsBlogHead}`}>
                            {NewData.Heading}
                          </h5>
                          <p className={`card-text ${styles.NewsBlogContent}`}>
                            {NewData.Content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                {data.Section4.map((NewData,index) => {
                  return (
                    <div key={index} className="col-lg-6 col-md-12 mt-5">
                      <div
                        className={`card border-0 rounded-0 ${styles.businesscardbox}`}
                      >
                        <Image
                          className={`card-img-top ${styles.businesscardimg}`}
                          width={500}
                          height={250}
                          src={NewData.Image}
                          alt="po"
                        />
                        <div className="card-body">
                          <h5 className={`card-title ${styles.NewsBlogHead}`}>
                            {NewData.Heading}
                          </h5>
                          <p className={`card-text ${styles.NewsBlogContent}`}>
                            {NewData.Content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
