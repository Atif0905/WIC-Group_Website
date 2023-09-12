import React from 'react'
import styles from './News.module.css'
import data from './News.json'
import Image from 'next/Image';


const News = () => {
  return (
    <div className='container'>
    <div className='row'>
    <div>
    <h1 className={styles.newstitle}>Womeki</h1>
    </div>
      {data.Section1.map((NewData) => {
        return( 
        <div className='col-lg-8 col-sm-12'>
       <Image width={650} height={450} src={NewData.Image}/>
       <h5 className={styles.headsec1}>{NewData.Heading}</h5>
       <p className={styles.paratxt}>{NewData.Content}</p>
       </div>
      
    
      );
      })}
<div className='col-lg-4 col-sm-12'>
    {data.Section2.map((NewData) => {
        return(
        <div className='row'>
            <div className={`col-lg-8 col-sm-12 ${styles.news}`}>
            <h5 className={styles.headsec2}>{NewData.Heading}</h5>
            <p className={styles.paratxt}>{NewData.Content}</p>
            </div>
            <div className='col-lg-4 col-sm-12'>
            <Image width={670} height={600} src={NewData.Image}/>
            </div>
            </div>    
        );
      })}
       </div>
      </div>

<div className='row'>
    {data.Section3.map((NewData) => {
            return(
                <div className={`d-lg-flex d-sm-block border-top`}>
                <div className='col-lg-5 col-sm-12 p-4 '> 
                <Image className={styles.newsimg} width={450} height={350}  src={NewData.Image}/>
                </div>
                <div className='col-lg-5 col-sm-12 p-5'>
                <h5 className={styles.headsec4}>{NewData.Heading}</h5>
                <p className={styles.paratxt}>{NewData.Content}</p>
                </div>
                </div>   
                    
            );
        })}
    
</div>
</div>
  )
}

export default News