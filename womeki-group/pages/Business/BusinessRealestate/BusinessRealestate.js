import React from 'react'
import data from "./BusinessRealestate.json";
import styles from "./BusinessRealestate.module.css";
import Image from "next/Image";

const BusinessRealestate = () => {
  return (
    <div className='container'>
         <div className='row bg-white'>
            {data.RealEstate.map((NewData) => {
                return(
                    <div className={`col-lg-4 col-md-6 mt-3`}>
                      <div className={`card border-0 rounded-0 ${styles.businesscardbox}`}>
                      <a className={styles.alink} href={NewData.Link}>
                        <Image className={`card-img-top rounded-1 ${styles.businesscardimg}`} width={500} height={350}  src={NewData.Image}/>
                        <div className='card-body'>
                        <h5 className={`card-title ${styles.Head}`}>{NewData.Heading}</h5>
                        <p className={`card-text ${styles.Text}`}>{NewData.Content}</p>
                        </div>
                      </a>
                      </div>
                    </div>
                )
            })}
           
        </div>

    </div>
  )
}

export default BusinessRealestate
