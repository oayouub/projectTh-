import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper"
import 'swiper/css';
import "swiper/css/free-mode";

import 'bootstrap/dist/css/bootstrap.min.css';
import SliderProduit from './SliderProduit';

const Slider = () => {
    return (
      <div className="container py-2 px-2 justify-content-center bg-dark">
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
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