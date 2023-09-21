import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import styles from "./CareerCard3.module.css";
import data from "./CareerCard3.json";
import Image from "next/Image";
const CareerCard3 = () => {
  return (
    <div className="container">
      <div className="row">
        {data.Section1.map((NewData) => {
          return (
            <div className="d-lg-flex d-sm-block">
              <div className="col-lg-6 col-sm-12 p-4">
                <Image
                  className="cardimg"
                  width={800}
                  height={500}
                  src={NewData.Image}
                />
              </div>
              <div className="col-lg-6 col-sm-12 p-5">
                <h5 className={styles.card3head}>{NewData.Heading}</h5>
                <p className={styles.card3text}>{NewData.Content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Swiper
        className=" Carouseldiv "
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
        <div className="row">
          {data.Section2.map((NewData) => {
            return (
              <SwiperSlide>
                <div className=" d-flex">
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="p-4">
                      <Image
                        width={500}
                        height={300}
                        className="Carousel-img1"
                        src={NewData.Image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                    <div className={styles.carouselcard3head}>
                      <h5 className="text-center">{NewData.Heading}</h5>
                    </div>
                    <div className={styles.carouselcard3text}>
                      <p className="carousel-content">{NewData.Content}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
export default CareerCard3;