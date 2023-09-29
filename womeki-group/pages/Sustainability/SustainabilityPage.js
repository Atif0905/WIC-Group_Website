import React, { useState } from "react";
import data from "./SustainabilityPage.json";
import styles from "./SustainabilityPage.module.css";
import Image from "next/Image";
import img from "../../public/SlideDown.png";
import img1 from "../../public/SlideUp.png";

const SustainabilityPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      {data.Section1.map((AboutData, index) => {
        return (
          <div key={index}>
            <div>
              <Image
                src={AboutData.Image}
                alt="img"
                height={600}
                width={1500}
              />
            </div>
            <h3 className={styles.bgImgText}>{AboutData.Heading}</h3>
          </div>
        );
      })}

      {data.Section2.map((AboutData1, index) => {
        return (
          <div key={index} className="container mt-5">
            <div className="row">
              <h3 className={styles.AboutHeading}>{AboutData1.Heading}</h3>
            </div>
            <div className="row">
              <p className={`mt-4 ${styles.FontsAndColor}`}>
                {isExpanded
                  ? AboutData1.Content1 + AboutData1.Content2
                  : AboutData1.Content1 + "..."}
              </p>
              <div className="d-flex align-items-center">
                <button onClick={toggleReadMore} className={styles.UpDownBtn}>
                  {isExpanded ? "Read less" : "Read more"}
                </button>

                <Image
                  onClick={toggleReadMore}
                  className={styles.UpDownBtnImg}
                  src={isExpanded ? img1 : img}
                  alt="err"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        );
      })}
      {data.Section5.map((AboutSection5, index) => {
        return (
          <div key={index} className="container mt-5">
            <div className="row">
              <h3 className={styles.AboutHeading}>{AboutSection5.Heading}</h3>
              <p className={`mt-4 ${styles.FontsAndColor}`}>{AboutSection5.Content}</p>
            </div>
          </div>
        );
      })}
      {data.Section6.map((AboutSection6, index) => {
        return (
          <div key={index} className="container mt-5">
            <div className="row">
              <h3 className={styles.AboutHeading}>{AboutSection6.Heading}</h3>
              <p className={`mt-4 ${styles.FontsAndColor}`}>{AboutSection6.Content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SustainabilityPage;
