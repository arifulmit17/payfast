import React, { useRef } from "react";
import WalletCard from "./WalletCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import addMoneyImg from "../../assets/banner/addmoney.png";
import cashoutImg from "../../assets/banner/cashout.png";
import sendImg from "../../assets/banner/sendmoney.png";
import requestImg from "../../assets/banner/requestmoney.png";
import aiImg from "../../assets/banner/ai-brain.png";

import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function WalletCards() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cards = [
    { title: "Add Money", image: addMoneyImg, description: "Add money easily." },
    { title: "Cashout", image: cashoutImg, description: "Withdraw funds quickly." },
    { title: "Send Money", image: sendImg, description: "Send money instantly." },
    { title: "Request Money", image: requestImg, description: "Request payments easily." },
    { title: "AI & Automation", image: aiImg, description: "Smart automation tools." },
  ];

  return (
    <div className="relative w-full py-10">

      {/* Navigation Buttons
      <button
        ref={prevRef}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20
                  bg-white p-3 rounded-full shadow hover:scale-110 transition"
      >
        <IoIosArrowBack size={22} />
      </button>

      <button
        ref={nextRef}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                  bg-white p-3 rounded-full shadow hover:scale-110 transition"
      >
        <IoIosArrowForward size={22} />
      </button> */}
         
      <Swiper
        modules={[Navigation, Autoplay]}
  navigation
  spaceBetween={1}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <WalletCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      

    </div>
  );
}
