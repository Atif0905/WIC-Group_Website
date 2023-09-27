import React from 'react'
import data from "./Realestatecard2.json"
import styles from "./Realestatecards.module.css"
import Image from 'next/Image'


const Realestatecard2 = () => {
  return (
    <div>
    {data.Section1.map((NewData) => {
      return(
        <div>
          <Image width={1500} height={620} src={NewData.Image} alt="img" />
          <div className='container mt-5'>
            <h2 className={styles.realestatehead}>{NewData.Heading}</h2>
            <p className={styles.realestatecontent}>{NewData.Content}</p>
          </div>
        </div> 
      )
    })}

     <div className='container mt-5'>
     {data.Section2.map((NewData) => {
      return(
      <div className={`row mt-5 ${styles.realestatecardrow}`}>
        <div className='col-lg-4 col-sm-12'>
          <Image height={300} width={400} alt='aa' src={NewData.Image}/>
        </div>
        <div className='col-lg-8 col-sm-12'>
          <h2 className={styles.realestatehead}>{NewData.Heading}</h2>
          <p className={styles.realestatecontent}>{NewData.Content}</p>
        </div>
      </div>
       )
      })}

{data.Section3.map((NewData) => {
      return(
      <div className='row mt-5 d-flex flex-column-reverse flex-md-row'>
        <div className='col-lg-8 col-sm-12'>
        <h2 className={styles.realestatehead}>{NewData.Heading}</h2>
        <p className={styles.realestatecontent}>{NewData.Content}</p>
        </div>
        <div className='col-lg-4 col-sm-12'>
          <Image height={300} width={400} alt='aa' src={NewData.Image}/>
        </div>
      </div>
       )
      })}

{data.Section4.map((NewData) => {
      return(
        <div className='container mt-5'>
        <p className={styles.realestatecontent}>{NewData.Content}</p>
        </div>
       )
      })}
      </div>
    </div>
  )
}

export default Realestatecard2
