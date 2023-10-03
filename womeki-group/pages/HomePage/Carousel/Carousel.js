import React from 'react';
import styles from './Carousel.module.css';
import {  Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from './Carousel.json'
import Image from 'next/Image'

const Carousel = () => {
  return (
    <div className={` ${styles.maindiv} `}>
        <Swiper
     modules={[ Pagination, A11y, Autoplay]}
     spaceBetween={5}
     slidesPerView={1}
     loop={true}
     speed={1500}
     autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
     pagination={{ clickable: true }}>
    
    </Swiper>
    {
        data.map((Newdata,index) =>{
           return(
            
            <div key={index} >
                <Image className={styles.videobg} width={1500} height={700} src={Newdata.Image} alt="kk" />
                <div className={styles.bgoverlay}></div>
                <div className={styles.hometext}>
                <h3 className={styles.bannerheading} >{Newdata.Heading}</h3>
                <a href='about' className={styles.btn} ><span>Explore With Us</span></a>
                </div>
            </div>
          
           )})}
    </div>
  )}
export default Carousel