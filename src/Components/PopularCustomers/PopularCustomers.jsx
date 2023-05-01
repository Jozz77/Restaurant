import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import './PopularCustomers.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PopularCustomersCard from "./PopularCustomersCard";
import PopularNavButtons from "./PopularNavButtons";

export default function PopularCustomers() {
  return (
    <section className="py-[5vh]">
      <h1 className="text-[2.5em] font-Playfair text-center  font-semibold text-[#000000] leading-[56px]  ">
        What our popular customers are saying
      </h1>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={'auto'}
      >
        <SwiperSlide><PopularCustomersCard /></SwiperSlide>
        <SwiperSlide><PopularCustomersCard /></SwiperSlide>
        <SwiperSlide><PopularCustomersCard /></SwiperSlide>
        <SwiperSlide><PopularCustomersCard /></SwiperSlide>
        <PopularNavButtons />
      </Swiper>
     
    </section>
  );
}
