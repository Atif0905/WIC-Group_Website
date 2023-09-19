import React from 'react'
import styles from './CareerHome.module.css'
import data from './CareerHome.json'
import Image from 'next/Image';

const CareerHome = () => {
  return (
    <div className='container'>
        {data.Section1.map((NewData) => {
            return(
                <div className='card'>
                <Image width={1100} height={400} src={NewData.Image}/>
                <div className='card-img-overlay'>
                <div className='card-body text-dark '>
                <h4 className='card-title' >{NewData.Heading}</h4>
                <h5 className='Card-text '>{NewData.Content}</h5>
                </div>
                </div>
                </div>
            );
        })}

    <div className='row'>
        <h4 className=' mt-5'>Life at Womeki</h4>
        {data.Section2.map((NewData) => {
            return(
        <div className='col-md-4 col-sm-12 mt-4'>
                        <div className={`card ${styles.cardbox}`}>
                        <a className={styles.alink}  href={NewData.Link}>
                        <Image className={`card-img-top ${styles.careercardimg}`} width={500} height={230}  src={NewData.Image}/>
                        <div className='card-body'>
                        <h5 className="card-title">{NewData.Heading}</h5>
                        <p className="card-text">{NewData.Content}</p>
                        </div></a>
                    </div>
                    </div>
                    )
                })}
            

              
       
    </div>


    </div>




  )
}

export default CareerHome