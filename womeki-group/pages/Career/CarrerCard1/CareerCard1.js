import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import styles from './CareerCard1.module.css'
import data from './CareerCard1.json'
import Image from 'next/Image';


const CareerCard1 = () => {
  return (
    <div className='container'>
      <div className='row'>
       
        {data.Section1.map((NewData) => {
            return(
            <div className='d-lg-flex d-sm-block'>
            <div className='col-lg-6 col-sm-12 p-4'> 
            <Image className={styles.cardimg} width={800} height={500}  src={NewData.Image}/>
            </div>
            <div className='col-lg-6 col-sm-12 p-5'>
            <h5 className={styles.card1head}>{NewData.Heading}</h5>
            <p className={styles.card1text}>{NewData.Content}</p>
            </div>
            </div>      
        )
        })}
      </div>
      
      <h4 className={`p-3 ${styles.card1head}`}>Caring for our employees</h4>
      <Swiper className=" Carouseldiv "
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        >
        <div className='row'>
         {data.Section2.map((NewData) => {
            return(
              <SwiperSlide>
          <div className=" d-lg-flex">
              <div className="col-lg-6  col-md-12">
                <div className='p-4'>
              <Image width={600} height={400}
                      className="Carousel-img1"
                      src={NewData.Image}
                      alt=""
                    />
                  </div>
              </div>
              <div className="col-lg-6 col-md-12 p-5">
                <div className={styles.carouselcard1head}>
                <h5 className={`text-center ${styles.card1head}`}>{NewData.Heading}</h5>
                </div>
                <div className={styles.carouselcard1text}>
                <p className={`carousel-content ${styles.card1text}`}>{NewData.Content}</p>
                </div>
              </div>
              </div>
            </SwiperSlide>
           )
          })}
      </div>
    
      </Swiper>
    
  </div>
    
  );
};

export default CareerCard1
