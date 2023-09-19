import React from "react";
import data from "../AboutUs.json";
import Image from "next/Image";
import styles from "../AboutUs.module.css";

const OneVission = () => {
  return (
    <div>
      {data.Section6.map((AboutSection6) => {
        return (
          <div className="container mt-5">
            <div className="row">
              <h3 className={` ${styles.AboutHeading}`}>{AboutSection6.Heading}</h3>
              <p className="mt-4">{AboutSection6.Content}</p>
            </div>
          </div>
        );
      })}
      <div className="container mt-5">
        <div className="row d-flex">
          {data.Section7.map((AboutData7) => {
            return (
              <div
                className={`col-md-3 mb-4  text-center ${styles.AboutCeoDiv} `}
              >
                <a href={AboutData7.Url}>
                  <Image
                    className="mt-2 "
                    src={AboutData7.Image}
                    alt="errr"
                    height={320}
                    width={350}
                  />
                  <p className={`p-1 mt-3 ${styles.CeoText} `}>
                    {AboutData7.Content}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OneVission;
