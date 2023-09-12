import React from 'react'
import data from './HomeBlog.json'
import styles from './HomeBlog.module.css'
import Image from 'next/Image';

const HomeBlog = () => {
  return (
    <div className='container'>
       <div className='row'>
        {data.Section1.map((NewData) => {
            return(
              <div className='col-lg-8 col-sm-12'>
              <div className={`card shadow mb-2 rounded-0 border-white ${styles.bloghomecard}`}>
                  <div className={`row d-flex`}>
                  <div className={`col-md-6 col-sm-12 ${styles.cardblogimg}`}>
                  <Image width={400} height={360} alt='bloghome' className={`card-img ${styles.blogcardimg}`} src={NewData.Image}/>
                  </div> 
                  <div className={`col-md-6 col-sm-12 ${styles.card2blog}`}>
                  <h5 className={`card-title`}>{NewData.Heading}</h5>
                  <p className='card-text'>{NewData.Content}</p>
                  </div> 
                  </div>
              </div>
            </div>
            );
        })}

          {data.Section2.map((NewData) => {
            return(
              <div className={`col-lg-8 col-sm-12 ${styles.colsection2}`}>
              <div className={`card shadow mb-2 rounded-0 border-white ${styles.bloghomecard}`}>
                  <div className={`row d-flex`}>
                  <div className={`col-md-6 col-sm-12 ${styles.cardblogimg}`}>
                  <Image width={400} height={360} alt='bloghome' className={`card-img ${styles.blogcardimg}`} src={NewData.Image}/>
                  </div> 
                  <div className={`col-md-6 col-sm-12 ${styles.card2blog}`}>
                  <h5 className={`card-title`}>{NewData.Heading}</h5>
                  <p className='card-text'>{NewData.Content}</p>
                  </div> 
                  </div>
              </div>
            </div>
            );
          })}
        </div>
      
        </div>
    
       
    
  )
}

export default HomeBlog