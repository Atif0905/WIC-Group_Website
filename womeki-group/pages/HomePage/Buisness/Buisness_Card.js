import React from "react";
import data from "./Buisness_Card.json";
import styles from "./Buisness_Card.module.css";
import Image from "next/Image";

const Buisness_Card = () => {
  return (
    <div>
      <div className="Buisness_Card container mt-5 ">
        {data.Section1.map((BuisnessCardData) => {
          return (
            <div className="row">
              <h2 className={` text-center ${styles.sectionHeading}`}>
                {BuisnessCardData.Heading}
              </h2>
              <p className="text-center h6 mt-5 mb-5 ">
                {BuisnessCardData.Content}
              </p>
            </div>
          );
        })}
        <div className={`row d-flex ml-100 ${styles.Img_Cards} `}>
          {data.Section2.map((BuisnessCardData) => {
            return (
              <div className={`col-4 text-center ${styles.Img_Card}`}>
                <Image
                  src={BuisnessCardData.Url}
                  alt="btn-img"
                  width={100}
                  height={100}
                />
                <p>{BuisnessCardData.Heading1}</p>
                <p className={styles.KnowMoreBtn}>
                  <a href="">{BuisnessCardData.Content1}</a>
                </p>
              </div>
            );
          })}
        </div>
        <div className={`text-center mt-5`}>
          <p>
            <a className={`p-2 ${styles.Explorebtn}`} href="">
              Explore More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Buisness_Card;