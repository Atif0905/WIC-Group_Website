import React from "react";
import styles from "./CareerHome.module.css";
import data from "./CareerHome.json";
import Image from "next/Image";

const CareerHome = () => {
  return (
    <div className={styles.maindiv}>
      {data.Section1.map((NewData,index) => {
        return (
          <div key={index}>
            <Image width={1500} height={600} alt="tt" src={NewData.Image} />
                <h4 className={styles.bgImgHead}>{NewData.Heading}</h4>
              </div>
        );
      })}
<div className="container">
      <div className="row">
        <h4 className={`mt-5 ${styles.careerhead}`}>Life at Womeki</h4>
        {data.Section2.map((NewData,index) => {
          return (
            <div key={index} className="col-md-4 col-sm-12 mt-4">
              <div className={`card ${styles.cardbox}`}>
                <a className={styles.alink} href={NewData.Link}>
                  <Image
                    className={`card-img-top ${styles.careercardimg}`}
                    width={520}
                    height={230}
                    src={NewData.Image}
                    alt="pp"
                  />
                  <div className="card-body">
                    <h5 className={`card-title ${styles.careerhead}`}>{NewData.Heading}</h5>
                    <p className={`card-text ${styles.careertxt}`}>{NewData.Content}</p>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      </div>
  );
};

export default CareerHome;
