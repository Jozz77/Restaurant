// import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import MenuCard from "./MenuCard";

export default function Menus() {
  return (
    <section className="pt-[25vh]">
      <div className="flex justify-center items-center gap-[6%] ">
        <h2 className="text-semibold text-[2.4em] text-[#191D23] font-Playfair leading-[38px] ">Our foods menus</h2>
        <p className="text-normal text-[1em] text-justify text-[#75797F] leading-[28px] w-[40%]  ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore
        </p>
      </div>
      <div className="px-[5%]">
        {/* <MenuCard /> */}
        <div className="py-[10vh]">
            <Swiper
            slidesPerView={4}
            spaceBetween={3}
            // spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
            <SwiperSlide> <MenuCard /></SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>
  );
}
