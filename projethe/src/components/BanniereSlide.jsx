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
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
        <SwiperSlide><div className="sectionBanniere">
        <img src="./img/BANNIERE.png" alt="img" />
        <button>DÉCOUVRIR</button>
      </div></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default BanniereSlide;