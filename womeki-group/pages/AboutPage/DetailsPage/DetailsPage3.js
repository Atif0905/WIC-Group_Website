import React from 'react';
import data from "./DetailsPage.json";
import Image from "next/Image";
import styles from "./DetailsPage1.module.css";

const DetailsPage3 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
        <h1 className={`text-center ${styles.Head}`}>Sales Director</h1>
          {data.Section3.map((DetailData) => {
            return (
              <>
                <div className={` col-lg-3 col-md-4 col-sm-12 ${styles.aboutimg}`}>
                  <Image
                    src={DetailData.Image}
                    alt="err"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12">
                <h3 className={styles.Head}>{DetailData.Heading}</h3>
                    <h6 className={styles.SubHead}>{DetailData.SubHeading}</h6>
                    <p className={styles.text}>{DetailData.Content}</p>
                </div>
  
              </>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default DetailsPage3
