import React from 'react'
import data from "./Techcard2.json"
import styles from "./Techcard.module.css"
import Image from 'next/Image'


const Techcard2 = () => {
  return (
    <div>
    {data.Section1.map((NewData) => {
      return(
        <div>
          <Image width={1500} height={620} src={NewData.Image} alt="img" />
          <div className='container mt-5'>
            <h2 className={styles.techhead}>{NewData.Heading}</h2>
            <p className={styles.techcontent}>{NewData.Content}</p>
          </div>
        </div>  
      )
    })}

     <div className='container mt-5'>
     {data.Section2.map((NewData) => {
      return(
      <div className={`row mt-5 ${styles.techcardrow}`}>
        <div className='col-md-4 col-sm-12'>
          <Image height={200} width={300} alt='aa' src={NewData.Image}/>
        </div>
        <div className='col-md-8 col-sm-12 '>
        <h2 className={styles.techhead}>{NewData.Heading}</h2>
        <p className={styles.techcontent}>{NewData.Content}</p>
        </div>
      </div>
       )
      })}

{data.Section3.map((NewData) => {
      return(
      <div className='row mt-5 d-flex flex-column-reverse flex-md-row'>
        <div className='col-md-8 col-sm-12'>
        <h2 className={styles.techhead}>{NewData.Heading}</h2>
        <p className={styles.techcontent}>{NewData.Content}</p>
        </div>
        <div className='col-md-4 col-sm-12'>
          <Image height={200} width={300} alt='aa' src={NewData.Image}/>
        </div>
      </div>
       )
      })}

{data.Section4.map((NewData) => {
      return(
        <div className='container mt-5'>
        <p className={styles.techcontent}>{NewData.Content}</p>
        </div>
       )
      })}
      </div>
    </div>
  )
}

export default Techcard2
