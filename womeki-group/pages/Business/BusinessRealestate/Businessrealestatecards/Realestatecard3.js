import React from 'react'
import data from "./Realestatecard3.json"
import styles from "./Realestatecards.module.css"
import Image from 'next/Image'


const Realestatecard1 = () => {
  return (
    <div>
    {data.Section1.map((NewData,index) => {
      return(
        <div key={index}>
          <Image width={1500} height={620} src={NewData.Image} alt="img" />
          <div className='container mt-5'>
            <h2 className={styles.realestatehead}>{NewData.Heading}</h2>
            <p className={styles.realestatecontent}>{NewData.Content}</p>
          </div>
        </div> 
      )
    })}

     <div className='container mt-5'>
     {data.Section2.map((NewData,index) => {
      return(
      <div key={index} className={`row mt-5 ${styles.realestatecardrow}`}>
        <div className='col-lg-4 col-sm-12'>
          <Image height={200} width={300} alt='aa' src={NewData.Image}/>
        </div>
        <div className='col-lg-8 col-sm-12'>
          <h2 className={styles.realestatehead}>{NewData.Heading}</h2>
          <p className={styles.realestatecontent}>{NewData.Content}</p>
        </div>
      </div>
       )
      })}

{data.Section3.map((NewData,index) => {
      return(
      <div key={index} className='row mt-5 d-flex flex-column-reverse flex-md-row'>
        <div className='col-lg-8 col-sm-12'>
        <h2 className={styles.realestatehead}>{NewData.Heading}</h2>
        <p className={styles.realestatecontent}>{NewData.Content}</p>
        </div>
        <div className='col-lg-4 col-sm-12'>
          <Image height={200} width={300} alt='aa' src={NewData.Image}/>
        </div>
      </div>
       )
      })}

{data.Section4.map((NewData,index) => {
      return(
        <div key={index} className='container mt-5'>
        <p className={styles.realestatecontent}>{NewData.Content}</p>
        </div>
       )
      })}
      </div>
    </div>
  )
}

export default Realestatecard1
