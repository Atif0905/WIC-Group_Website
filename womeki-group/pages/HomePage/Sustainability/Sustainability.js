import React from "react";
import Link from "next/link";
import data from "./Sustainability.json";
import styles from "./Sustainability.module.css";
import Image from "next/Image";

const Sustainability = () => {
  return (
    <div>
      <div>
        <h4 className={`text-center ${styles.sustainMainHeading}`}>
          Sustainability
        </h4>
      </div>
      <div className={`fluid d-lg-flex ${styles.sustainMainDiv2}`}>
        <div className="container">
          <div className={`row ${styles.SustainRowDiv}`}>
            <div className={`col-lg-8  ${styles.SustainDiv1}`}>
              {data.Section1.map((SustainData1,index) => {
                return (
                  <div key={index}>
                    <div className={`col-sm-12 ${styles.sustain1}`}>
                      <p className={styles.sustain1Content}>
                        {SustainData1.Content}
                      </p>
                    </div>
                    <Link href={"/Sustainability/SustainabilityPage"}>
                    <button className={styles.ViewMoreBtn}>
                      <span className={styles.BtnSpan}>View more</span>
                    </button>
                    </Link>
                  </div>
                );
              })}
              <div className="row">
                {data.Section2.map((SustainData2,index) => {
                  return (
                    <div key={index} className={` mt-3 ${styles.SustainDiv2}`}>
                      <div className="d-lg-flex">
                        <div className="col-lg-6 col-sm-12">
                          <Image
                            src={SustainData2.Image}
                            alt="img"
                            height={200}
                            width={400}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-12 ms-2 mt-1 p-4">
                          <h4 className={styles.sustain1Heading}>
                            {SustainData2.Heading}
                          </h4>
                          <p className={`mt-3 ${styles.sustain1Content}`}>
                            {SustainData2.Content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`col-lg-4  ${styles.SustainDiv2}`}>
              {data.Section3.map((SustainData3,index) => {
                return (
                  <div key={index} className={styles.SustainDiv3}>
                    <div className="sustain3 ">
                      <Image
                        src={SustainData3.Image}
                        alt="img"
                        height={200}
                        width={400}
                      />
                    </div>
                    <div className="col-sm-12 p-4">
                      <h4 className={`mt-5 ${styles.sustain1Heading}`}>
                        {SustainData3.Heading}
                      </h4>
                      <p className={styles.sustain1Content}>
                        {SustainData3.Content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
