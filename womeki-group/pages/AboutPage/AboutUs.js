import React, { useState } from "react";
import data from "./AboutUs.json";
import styles from "./AboutUs.module.css";
import Image from "next/Image";
import img from "../../public/SlideDown.png";
import img1 from "../../public/SlideUp.png";

const AboutUs = () => {
  return (
    <div>
      {data.Section1.map((AboutData) => {
        return (
          <div className="bg-about">
            <div className="about-img">
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

      {data.Section2.map((AboutData1) => {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleReadMore = () => {
          setIsExpanded(!isExpanded);
        };
        return (
          <div className="container mt-5">
            <div className="row">
              <h3 className={styles.AboutHeading}>{AboutData1.Heading}</h3>
            </div>
            <div className="row">
              <p className="mt-4">
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
      {data.Section3.map((HeadingAbout) => {
        return (
          <div className={`container mt-5 ${styles.GlanceHeading}`}>
            <div className="row">
              <h3 className={styles.AboutHeading}>{HeadingAbout.Heading}</h3>
            </div>
          </div>
        );
      })}

      <div className="container mt-5">
        <div className={`row d-flex ${styles.GlanceDiv}`}>
          {data.Section4.map((AboutData3) => {
            return (
              <div className={`col-3 text-center ${styles.AboutCard}`}>
                <Image
                  className={` ${styles.TeamImg} `}
                  src={AboutData3.Image}
                  alt="errr"
                  height={70}
                  width={80}
                />
                <h3 className="p-1">{AboutData3.Number}</h3>
                <p className="p-1">{AboutData3.Content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {data.Section5.map((AboutSection5) => {
        return (
          <div className="container mt-5">
            <div className="row">
              <h3 className={styles.AboutHeading}>{AboutSection5.Heading}</h3>
              <p className="mt-4">{AboutSection5.Content}</p>
            </div>
          </div>
        );
      })}
      {data.Section6.map((AboutSection6) => {
        return (
          <div className="container mt-5">
            <div className="row">
              <h3 className={styles.AboutHeading}>{AboutSection6.Heading}</h3>
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
                <a href={AboutData7.Url} className={styles.AboutDivAnchor}>
                  <Image
                    className=" mt-2 "
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
      <div className={`text-center mt-5`}>
        <p>
          <a className={`p-2 ${styles.ViewMoreBtn}`} href="">
            View More
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
