import React from 'react'
import styles from './BlogsHome.module.css'
import data from './BlogsHome.json'
import Image from 'next/Image';
import Link from "next/link";

const BlogsHome = () => {
  return (
    <div> 
   <div className={styles.gallerydiv}>
      {
        data.Section1.map((NewData,index) => {
        return (
            <> 
            <div key={index} className={`mt-5 ${styles.container}`}>
            <a href={NewData.url}>
            <Image width={800} height={400} src={NewData.Image} alt='l' />
            <div className={styles.overlay}>
                <div className={styles.text}>
                  <p>{NewData.Heading}</p>
                </div>
              </div>
              </a>
              </div>
            </> 
          );
        })}
        </div>

    </div>
  )
}

export default BlogsHome