import React from 'react';
import data from './Sustainability.json';
import styles from './Sustainability.module.css';
import Image from 'next/Image';

const Sustainability = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className={`row ${styles.SustainRowDiv}`}>
            <div className={` col-md-8 col-sm-12 ${ styles.SustainDiv1}`}>
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
            </div>
            <div className={`col-md-4 col-sm-12 ${styles.SustainDiv2}`}>
                {data.Section3.map((SustainData3) => {
                    return(
                        <div className={styles.SustainDiv3}>
                            <div className="sustain3">
                            <Image  src={SustainData3.Image} alt='img' height={200} width={400} />
                            </div>
                            <div className="mt-5">
                                <h4  className={styles.sustain1Heading}>{SustainData3.Heading}</h4>
                                <p  className={styles.sustain1Content}>{SustainData3.Content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='row'>
                <div className={` col-lg-8 col-sm-12 ${styles.SustainDiv2}`}>
                {data.Section2.map((SustainData2) => {
                    return(
                        <div className=' d-md-flex'>
                            <div>
                                <Image  src={SustainData2.Image} alt='img' height={200} width={400} />
                            </div>
                            <div className='ms-3'>
                                <h4  className={styles.sustain1Heading}>{SustainData2.Heading}</h4>
                                <p className={`mt-2 ${styles.sustain1Content}`}>{SustainData2.Content}</p>
                            </div>
                        </div>
                    );
                })}
                </div>
                </div>
            {/* <div className={`col-md-4 col-sm-12 ${styles.SustainDiv2}`}>
                {data.Section3.map((SustainData3) => {
                    return(
                        <div className={styles.SustainDiv3}>
                            <div className="sustain3">
                            <Image  src={SustainData3.Image} alt='img' height={180} width={400} />
                            </div>
                            <div className="mt-5">
                                <h4  className={styles.sustain1Heading}>{SustainData3.Heading}</h4>
                                <p  className={styles.sustain1Content}>{SustainData3.Content}</p>
                            </div>
                        </div>
                    );
                })}
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Sustainability
