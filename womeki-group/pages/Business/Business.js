'use client'
import React, { useState } from 'react'
import data from "./Business.json";
import styles from "./Business.module.css";
import Image from "next/Image";
import BusinessRealestate from './BusinessRealestate/BusinessRealestate';
import BusinessEducation from './BusinessEducation/BusinessEducation';
import BusinessTech from './BusinessTech/BusinessTech';


const Business = () => {
  const [active,setActive] = useState("Realestate");  

  return (
    <div className={` fluid ${styles.maindiv}`}>
  
         {data.Section1.map((NewData) => {
        return (
            <div>
            <div>
              <Image
                src={NewData.Image}
                height={600}
                width={1400}
              />
            </div>
            <h1 className={styles.bgImgHead}>{NewData.Heading}</h1>
            <h6 className={styles.bgImgText}>{NewData.Content}</h6>
            </div>
            );
      })}
      
      <div className={`container ${styles.maindiv2}`}>
    <div className='row p-5'>
{data.Section2.map((NewData) => {
        return (
            <div className='col-lg-12 mt-5'>
            <h4 className={styles.Head}>{NewData.Heading}</h4>
            <p className={styles.Text}>{NewData.Content}</p>
            </div>
            );
      })}
       </div>
      <div className={`row text-center ${styles.businessnav}`}>
        <div className={`col-4 p-2 border-end ${styles.businessnavcol}`}  onClick={ () => setActive("Realestate")}>Realestate</div>
        <div className={`col-4 p-2 border-end ${styles.businessnavcol}`} onClick={ () => setActive("Education")}>Education</div>
        <div className={`col-4 p-2 border-end ${styles.businessnavcol}`} onClick={ () => setActive("Tech")}>IT Solution</div>
      </div>
    </div>
    <div className={styles.lastdiv}>
    {active === "Realestate" && <BusinessRealestate/>}
        {active === "Education" && <BusinessEducation/>}
        {active === "Tech" && <BusinessTech/>}
</div>
</div>
  )
}

export default Business