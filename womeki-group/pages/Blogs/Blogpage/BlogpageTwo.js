import React from 'react'
import styles from './Blogpage.module.css'
import data from './BlogpageTwo.json'
import Image from 'next/Image';

const BlogpageOne = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
        {data.Section1.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h1 className={` text-center ${styles.bloghead}`}>{NewData.Heading}</h1>
               
                <div className='text-center'>
                <Image height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                <div className='text-center'>
                <Image height={350} width={1000} alt='blogimg' src={NewData.Image1}></Image>
                </div>
            </div>      
        )
    })}
     {data.Section2.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <p className={`${styles.blogcontent}`}>{NewData.Content1}</p>
            </div>      
        )
    })}
    {data.Section3.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <p className={`${styles.blogcontent}`}>{NewData.Content1}</p>
            </div>      
        )
    })}
    {data.Section4.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
            </div>      
        )
    })}
     {data.Section5.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <p className={`${styles.blogcontent}`}>{NewData.Content1}</p>
            </div>      
        )
    })}
     {data.Section6.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` nt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <p className={`${styles.blogcontent}`}>{NewData.Content1}</p>
            </div>      
        )
    })}
    {data.Section7.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
            </div>      
        )
    })}
     {data.Section8.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                
            </div>      
        )
    })}
    {data.Section9.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={` mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
            </div>      
        )
    })}
    {data.Section10.map((NewData, index) => {
            return(
            <div key={index} className='col-12 '>
                <h5 className={`mt-5 ${styles.blogsubhead}`}>{NewData.Subheading}</h5>
                <p className={`${styles.blogcontent}`}>{NewData.Content}</p>
                <div className='text-center'>
                <Image  height={350} width={1000} alt='blogimg' src={NewData.Image}></Image>
                </div>
                <p className={`${styles.blogcontent}`}>{NewData.Content1}</p>
            </div>      
        )
    })}
        </div>
    </div>
  )
}

export default BlogpageOne