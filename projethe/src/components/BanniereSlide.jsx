import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BanniereSlide = () => {
    return (
        <div>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <div className='banniereVert'>
        <div className='Right'>
          <img src="./img/banniere_img_vert.png" alt="" />
        </div>
        <div className='Left'>
        <h4>Selection de</h4>
        <h2>THÉ VÉRT</h2>
        <button id='vert'>DÉCOUVRIR</button>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE_noir.png" alt="img" />
        <div className='banniereVert'>
        <div className='Right'>
          <img src="./img/banniere_img_noir.png" alt="" />
        </div>
        <div className='Left'>
        <h4>Selection de</h4>
        <h2>THÉ NOIR</h2>
        <button id='noir'>DÉCOUVRIR</button>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE_blanc.png" alt="img" />
        <div className='banniereVert'>
        <div className='Right'>
          <img src="./img/banniere_img_blanc.png" alt="" />
        </div>
        <div className='Left'>
        <h4 id='h4blanc'>Selection de</h4>
        <h2 id='h2blanc'>THÉ BLANC</h2>
        <button id='blanc'>DÉCOUVRIR</button>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE_jaune.png" alt="img" />
        <div className='banniereVert'>
        <div className='Right'>
          <img src="./img/banniere_img_jaune.png" alt="" />
        </div>
        <div className='Left'>
        <h4 id='h4jaune'>Selection de</h4>
        <h2 id='h2jaune'>THÉ JAUNE</h2>
        <button id='jaune'>DÉCOUVRIR</button>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE_mate.png" alt="img" />
        <div className='banniereVert'>
        <div className='Right'>
          <img src="./img/banniere_img-mate.png" alt="" />
        </div>
        <div className='Left'>
        <h4>Selection de</h4>
        <h2>THÉ MATÉ</h2>
        <button id='maté'>DÉCOUVRIR</button>
        </div>
        </div>
      </div></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default BanniereSlide;