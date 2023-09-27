import React from "react";
import data from "./OurCommitment.json";
import styles from "./OurCommitment.module.css";
import Image from "next/Image";

const OurCommitment = () => {
  return (
    <div>
      <div className="text-center mt-5">
        {" "}
        <h4 className={`${styles.OurCmtMainHead}`}> Our Commitment </h4>
      </div>
      <div className={`container ${styles.OurCmtMainDiv}`}>
          <div className={`row mt-5 ${styles.MobileView}`}>
            <div className={`col-4 mt-5 ${styles.ColDiv}`}>
              {data.Section1.map((NewData,index) => {
                return (
                  <div key={index} className={styles.OurCmtHeading}>
                    <h3 className="text-center">{NewData.Heading}</h3>
                    <p className={` ${styles.OurCmtContent}`}>
                      {NewData.Content}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className={`col-4 mt-4 ${styles.ColDiv}`}>
              <div className={styles.DivHover}>
                {data.Section2.map((NewData,index) => {
                  return (
                    <>
                      <h6 key={index} className={styles.OurCmtSubHead}>
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
                {data.Section3.map((NewData,index) => {
                  return (
                    <>
                      <h6 key={index} className={styles.OurCmtSubHead}>
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
            <div className={`col-4 mt-4 ${styles.ColDiv}`}>
              <div className={styles.DivHover}>
                {data.Section4.map((NewData,index) => {
                  return (
                    <>
                      <h6 key={index} className={styles.OurCmtSubHead}>
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
                {data.Section5.map((NewData,index) => {
                  return (
                    <>
                      <h6 key={index} className={styles.OurCmtSubHead}>
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
