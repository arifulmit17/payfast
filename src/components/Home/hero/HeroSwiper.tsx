import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './herostyles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Hero from '../Hero';

export default function HeroSwiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Hero></Hero></SwiperSlide>
        <SwiperSlide><Hero></Hero></SwiperSlide>
        <SwiperSlide><Hero></Hero></SwiperSlide>
        
      </Swiper>
    </>
  );
}
