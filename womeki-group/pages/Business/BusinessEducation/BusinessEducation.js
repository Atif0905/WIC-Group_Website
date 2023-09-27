import React from 'react'
import data from "./BusinessEducation.json";
import styles from "./BusinessEducation.module.css";
import Image from "next/Image";


const BusinessEducation = () => {
  return (
    <div>
      <h3 className={styles.BSEdiv}>Education</h3>
    <div className='container mt-5'>
         <div className='row bg-white'>
            {data.Education.map((NewData,index) => {
                return(
                    <div key={index} className={`col-lg-4 col-md-6 mt-3`}>
                    
                      <div className={`card border-0 rounded-0 ${styles.businesscardbox}`}>
                      <a className={styles.alink} href={NewData.Link}>
                        <Image className={`card-img-top ${styles.businesscardimg}`} width={500} height={250} alt='pp' src={NewData.Image}/>
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
    </div>
  )
}

export default BusinessEducation
