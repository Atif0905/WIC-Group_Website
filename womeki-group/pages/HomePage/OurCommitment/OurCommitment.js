import React from "react";
import data from "./OurCommitment.json";
import styles from "./OurCommitment.module.css";
import Image from "next/Image";

const OurCommitment = () => {
  return (
    <div>
      <div className="container  bg-light text-dark ">
        <div className={`row mt-5 mb-5 ${styles.MobileView}`}>
          <div className={`col-4 mt-4 ${styles.ColDiv}`}>
            {data.Section1.map((NewData) => {
              return (
                <div className={styles.OurCmtHeading}>
                  <h3 className="text-center mt-2">{NewData.Heading}</h3>
                  <p>{NewData.Content}</p>
                </div>
              );
            })}
          </div>
          <div className={`col-4 ${styles.ColDiv}`}>
            <div className={styles.DivHover}>
              {data.Section2.map((NewData) => {
                return (
                  <>
                    <h6>
                      {NewData.Heading}{" "}
                      <Image
                        className="mt-1"
                        src={NewData.Image}
                        alt="err"
                        width={40}
                        height={40}
                      />
                    </h6>
                    <p className={styles.RealEstateContent}>
                      {NewData.Content}
                    </p>
                  </>
                );
              })}
            </div>
            <div className={styles.DivHover}>
              {data.Section3.map((NewData) => {
                return (
                  <>
                    <h6>
                      {NewData.Heading}{" "}
                      <Image
                        className="mt-2"
                        src={NewData.Image}
                        alt="err"
                        width={40}
                        height={40}
                      />
                    </h6>
                    <p className={styles.RealEstateContent}>
                      {NewData.Content}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
          <div className={`col-4 ${styles.ColDiv}`}>
            <div className={styles.DivHover}>
              {data.Section4.map((NewData) => {
                return (
                  <>
                    <h6>
                      {NewData.Heading}{" "}
                      <Image
                        src={NewData.Image}
                        alt="err"
                        width={40}
                        height={40}
                      />
                    </h6>
                    <p className={styles.RealEstateContent}>
                      {NewData.Content}
                    </p>
                  </>
                );
              })}
            </div>
            <div className={styles.DivHover}>
              {data.Section5.map((NewData) => {
                return (
                  <>
                    <h6>
                      {NewData.Heading}{" "}
                      <Image
                        className="mt-2"
                        src={NewData.Image}
                        alt="err"
                        width={40}
                        height={40}
                      />
                    </h6>

                    <p className={styles.RealEstateContent}>
                      {NewData.Content}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
