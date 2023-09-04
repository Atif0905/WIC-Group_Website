import React from 'react';
import styles from './Carousel.module.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from './Carousel.json'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div>
        <Swiper
     modules={[Navigation, Pagination, A11y, Autoplay]}
     spaceBetween={10}
     slidesPerView={1}
     loop={true}
     speed={1000}
     autoplay={{
        delay: 2000,
        disableOnInteraction: false
    }}
     navigation
     pagination={{ clickable: true }}
    >
     {
        data.map((Newdata) =>{
           return(
            <SwiperSlide>
            <div>
                <Image width={1500} height={550} src={Newdata.Image} alt="kk" />
                <h3 className={styles.bannerheading} >{Newdata.Heading}</h3>
                <p>{Newdata.Description}</p>
            </div>
            </SwiperSlide>
           )
        })
     }
    </Swiper>
    </div>
  )
}

export default Carousel