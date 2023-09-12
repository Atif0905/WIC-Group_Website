import React from 'react';
import data from './Sustainability.json';
import styles from './Sustainability.module.css';
import Image from 'next/Image';

const Sustainability = () => {
  return (
    <div>
      <div className="container">
        <div className={`row ${styles.SustainRowDiv}`}>
            <div className={` col-8 ${ styles.SustainDiv1}`}>
                {data.Section1.map((SustainData1) => {
                    return(
                        <div >
                            <div className={styles.sustain1}>
                            <h4 className={styles.sustain1Heading}>{SustainData1.Heading}</h4>
                            <p className={styles.sustain1Content}>{SustainData1.Content}</p>
                            </div>
                            <button class={styles.ViewMoreBtn}><span className={styles.BtnSpan}>View more </span></button>
                        </div>
                    );
                })}
                {data.Section2.map((SustainData2) => {
                    return(
                        <div className={`d-flex  ${styles.SustainDiv2}`}>
                            <div className="mt-2">
                                <Image  src={SustainData2.Image} alt='img' height={280} width={550} />
                            </div>
                            <div className={`mt-5  ms-3 p-2 `}>
                                <h4  className={styles.sustain1Heading}>{SustainData2.Heading}</h4>
                                <p className={`mt-1 ${styles.sustain1Content}`}>{SustainData2.Content}</p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <div className={`col-4 ${styles.SustainDiv2}`}>
                {data.Section3.map((SustainData3) => {
                    return(
                        <div className={styles.SustainDiv3}>
                            <div className="sustain3">
                            <Image  src={SustainData3.Image} alt='img' height={180} width={350} />
                            </div>
                            <div className="mt-5">
                                <h4  className={styles.sustain1Heading}>{SustainData3.Heading}</h4>
                                <p  className={styles.sustain1Content}>{SustainData3.Content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sustainability
