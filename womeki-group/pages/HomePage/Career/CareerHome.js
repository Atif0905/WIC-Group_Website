import React from 'react'
import styles from './CareerHome.module.css'
import data from './CareerHome.json'
import Image from 'next/Image';

const CareerHome = () => {
  return (
    <div className='container'>
        {data.Section1.map((NewData) => {
            return(
                <div>
                <Image width={1100} height={400}  src={NewData.Image}/>
                <h4>{NewData.Heading}</h4>
                <p>{NewData.Content}</p>
                </div>
            );
        })}

        <>
       
      <div className='container'>
       {data.Section2.map((NewData) => {
        return (
            <div className={styles.careerdiv}>
            <Image width={500} height={400} src={NewData.Image}/>
           
            </div>
        );
      })}
      </div>
        </>
    </div>



  )
}

export default CareerHome