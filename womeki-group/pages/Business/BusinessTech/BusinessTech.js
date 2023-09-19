import React from 'react'
import data from "./BusinessTech.json";
import styles from "./BusinessTech.module.css";
import Image from "next/Image";

const BusinessTech = () => {
  return (
    <div className='container'>
         <div className='row bg-white'>
            {data.Tech.map((NewData) => {
                return(
                    <div className={`col-lg-4 col-md-6 mt-3`}>
                    
                      <div className={`card border-0 rounded-0 ${styles.businesscardbox}`}>
                        <Image className={`card-img-top ${styles.businesscardimg}`} width={500} height={250}  src={NewData.Image}/>
                        <div className='card-body'>
                        <h5 className="card-title">{NewData.Heading}</h5>
                        <p className="card-text">{NewData.Content}</p>
                        </div>
                      </div>
                      
                    </div>
                )
            })}
           
        </div>
      
    </div>
  )
}

export default BusinessTech