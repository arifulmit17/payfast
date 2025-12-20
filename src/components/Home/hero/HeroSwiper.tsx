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
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper '  >
        <SwiperSlide style={{ backgroundColor: "#4287f5" }} >
        
                <Hero></Hero>
               </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#42e9f5" }}>
            
                <Hero></Hero>
                
           
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#42f5b0" }}>
           
                <Hero></Hero>
                
                </SwiperSlide>
        
      </Swiper>
    </>
  );
}
