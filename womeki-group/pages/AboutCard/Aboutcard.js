import React from "react";
import styles from "./Aboutcard.module.css";
import data from "./Aboutcard.json";
import Image from "next/Image";
const Aboutcard = () => {
  return (
    <div className="container">
      <div className="row">
        {data.Section1.map((NewData) => {
          return (
            <div className="col-lg-4 col-12-sm">
              <div
                className={`card shadow mb-2 rounded-0 border-white ${styles.card1}`}
              >
                <div className="card-body">
                  <h5 className="card-title">{NewData.Heading}</h5>
                  <p className="card-text">{NewData.Content}</p>
                </div>
              </div>
            </div>
          );
        })}
        {data.Section2.map((NewData) => {
          return (
            <div className="col-lg-8 col-sm-12">
              <div className={`card shadow mb-2 rounded-0 border-white`}>
                <div className={`row d-flex`}>
                  <div className={`col-md-6 col-sm-12 ${styles.card2}`}>
                    <h5 className={`card-title p-4`}>{NewData.Heading}</h5>
                    <p className="card-text p-4">{NewData.Content}</p>
                  </div>
                  <div className={`col-md-6 col-sm-12 ${styles.cardarrow}`}>
                    <Image
                      width={500}
                      height={585}
                      className={`card-img`}
                      src={NewData.Image}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Aboutcard;