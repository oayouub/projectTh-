import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper"
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";


import SliderProduit from './SliderProduit';

const Slider = () => {
    return (
      <div className="container py-2 px-2 justify-content-center  ">
        <Swiper
      
        grabCursor={true}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        modules={[Navigation,Pagination]}
        className="mySwiper"
        breakpoints={{
            1900: { slidesPerView:5,
                spaceBetween:0
            },
            1400:{slidesPerView:4,
                spaceBetween:0},
            1000: { slidesPerView:3,
                spaceBetween:0},
                600:{slidesPerView:2,
                    spaceBetween:0},
                
          }}
        
      
        >
            <SwiperSlide>
                <SliderProduit />
            </SwiperSlide>
            <SwiperSlide>
                <SliderProduit />
            </SwiperSlide>
            <SwiperSlide>
                <SliderProduit />
            </SwiperSlide>
            <SwiperSlide>
                <SliderProduit />
            </SwiperSlide>
            <SwiperSlide>
                <SliderProduit />
            </SwiperSlide>
        </Swiper>
      </div>
       
    );
};

export default Slider;