import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper"
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import 'bootstrap/dist/css/bootstrap.min.css';
import SliderProduit from './SliderProduit';

const Slider = () => {
    return (
      <div className="container py-2 px-2 justify-content-center bg-dark">
        <Swiper
        freeMode={true}
        grabCursor={true}
        pagination={{
            clickable: true,
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={10}
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