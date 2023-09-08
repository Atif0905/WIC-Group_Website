import React from 'react'
import styles from './BlogsHome.module.css'
import data from './BlogsHome.json'
import Image from 'next/Image';

const BlogsHome = () => {
  return (
    <div> 
   <div className={styles.gallerydiv}>
      {
        data.Section1.map((NewData) => {
        return (
            <> 
            <div className={styles.container}>
            <Image width={800} height={400} src={NewData.Image} />
            <div className={styles.overlay}>
                <div className={styles.text}>
                  <p>{NewData.Heading}</p>
                </div>
              </div>
              </div>
            </> 
          );
        })}
        </div>

    </div>
  )
}

export default BlogsHome