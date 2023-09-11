import React from 'react';
import data from './Sustainability.json';
import styles from './Sustainability.module.css';
import Image from 'next/Image';

const Sustainability = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-8">
                {data.Section1.map((SustainData1) => {
                    return(
                        <div className="SustainMain1">
                            <div className={styles.sustain1}>
                            <h4>{SustainData1.Heading}</h4>
                            <p>{SustainData1.Content}</p>
                            </div>
                            <button class={styles.ViewMoreBtn}><span className={styles.BtnSpan}>View more </span></button>
                        </div>
                    );
                })}
                {data.Section2.map((SustainData2) => {
                    return(
                        <div className="SustainMain2 d-flex">
                            <div className="mt-2">
                                <Image src={SustainData2.Image} alt='img' height={280} width={550} />
                            </div>
                            <div className="mt-5  ms-3 p-2">
                                <h4>{SustainData2.Heading}</h4>
                                <p className='mt-1'>{SustainData2.Content}</p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <div className="col-4  ">
                {data.Section3.map((SustainData3) => {
                    return(
                        <div className="SustainMain3">
                            <div className="sustain3">
                            <Image  src={SustainData3.Image} alt='img' height={180} width={350} />
                            </div>
                            <div className="mt-5">
                                <h4>{SustainData3.Heading}</h4>
                                <p>{SustainData3.Content}</p>
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
