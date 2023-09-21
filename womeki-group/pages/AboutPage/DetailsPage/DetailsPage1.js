import React from "react";
import data from "./DetailsPage.json";
import Image from "next/Image";
import styles from "./DetailsPage1.module.css";
const DetailsPage1 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.Section1.map((DetailData) => {
            return (
              <>
                <div className="col-md-3 col-sm-12 mt-5">
                  <Image
                    className={styles.DetailsPageDivImg}
                    src={DetailData.Image}
                    alt="err"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="col-md-9 col-sm-12 mt-5">
                  <h3>{DetailData.Heading}</h3>
                  <h6>{DetailData.SubHeading}</h6>
                  <p>{DetailData.Content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DetailsPage1;