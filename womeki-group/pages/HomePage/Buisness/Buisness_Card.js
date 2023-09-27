import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from "./Buisness_Card.json";
import styles from "./Buisness_Card.module.css";
import Image from "next/Image";
import Link from "next/link";

const Buisness_Card = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className={` fluid mt-5 ${styles.BuisnessCardBgColor}`}>
        <div className="container"  data-aos="fade-up"  data-aos-duration="2000" >
        {data.Section1.map((BuisnessCardData,index) => {
          return (
            <div key={index} className="row">
              <h4 className={` text-center mt-3 ${styles.sectionHeading}`}>
                {BuisnessCardData.Heading}
              </h4>
              <p className={`text-center h6 mt-5 mb-5 ${styles.sectioncontent}`}>
                {BuisnessCardData.Content}
              </p>
            </div>
          );
        })}
        <div className={`row d-flex mt-3 ${styles.Img_Cards} `}>
          {data.Section2.map((BuisnessCardData,index) => {
            return (
              <div key={index} className={`col-4 text-center ${styles.Img_Card}`}>
                <Image
                  src={BuisnessCardData.Url}
                  alt="btn-img"
                  width={100}
                  height={100}
                />
                <p className={styles.businesshead1}>{BuisnessCardData.Heading1}</p>
                <p className={styles.KnowMoreBtn}>
                  <Link className={styles.businesscontent1} href={BuisnessCardData.link}>{BuisnessCardData.Content1}</Link>
                </p>
              </div>
            );
          })}
        </div>
        <div className={`text-center mt-5`}>
          <h6>
            <a className={`p-1 ${styles.Explorebtn}`} href="">
              Explore More
            </a>
          </h6>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Buisness_Card;