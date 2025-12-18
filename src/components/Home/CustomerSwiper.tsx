import React, { useRef, useState } from 'react';
// Import Swiper React components
import customer1 from "../../assets/banner/avatar_1.png"
import customer2 from "../../assets/banner/avatar_2.png"
import customer3 from "../../assets/banner/avatar_3.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../Home/Swiper/Styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface FeedbackCard {
   title:string,
   image:string,
   description:string
}

const feedbackCards: FeedbackCard[] = [
  {
      title: "Kwame Osei / Customer",
      image: customer1,
      description:"Simple payment with swipe option. I can even save agent numbers for future. Highly recommended!.",
    },
    {
      title: "Amina Ndiaye / Merchant",
      image: customer3,
      description:
        "Easy to collect payments from customers. My business is booming and becoming very much popular!.",
    },
    {
      title: "Ousmane Camara / Agent",
      image: customer2,
      description:
        "Quick support from team. The design is top-notch, simple and safe. An easy-to-use digital wallet!",
    },
    {
      title: "Ousmane Camara / Agent",
      image: customer1,
      description:
        "Quick support from team. The design is top-notch, simple and safe. An easy-to-use digital wallet!",
    },
    {
      title: "Ousmane Camara / Agent",
      image: customer2,
      description:
        "Quick support from team. The design is top-notch, simple and safe. An easy-to-use digital wallet!",
    },
    
];


export default function CustomerSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

        {feedbackCards.map((card) => (
  <SwiperSlide>
            <div className="w-full -z-20 mb-10 h-ful text-cyan-800 bg-white hover:bg-cyan-800 hover:text-white shadow-md rounded-xl p-5 flex">
        <div className='grid grid-rows-2 gap-5'>
            
       <div className='flex  gap-5'>
        
      <p>{card.description}</p>

        </div> 
        <div className='w--full h-20 grid grid-cols-3 rounded-2xl'>
            <div className='w-20 h-20 rounded-2xl '>
                <img className='w-20 h-20 rounded-2xl bg-cover' src={card.image} alt="" />

            </div>
           <div className='col-span-2'>
                <h2 className="text-lg font-semibold">{card.title}</h2>
           </div>
           
        </div>

        </div>
        
      
    </div>
        </SwiperSlide>
))}

        
        
        
      </Swiper>
    </>
  );
}
