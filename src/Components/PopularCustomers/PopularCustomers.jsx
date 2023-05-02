import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './PopularCustomers.css'
import QouteBottom from './Assets/QouteBottom.png'
import QouteTop from './Assets/QouteTop.png'
import Image from "./Assets/Image.png";
import Image2 from "./Assets/Image2.png";
import Image3 from "./Assets/Image3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import PopularCustomersCard from "./PopularCustomersCard";
import PopularNavButtons from "./PopularNavButtons";

export default function PopularCustomers() {
  return (
    <section className="py-[5vh] relative ">
      <h1 className="text-[2.3rem] font-Playfair text-center  font-semibold text-[#000000] leading-[56px]  ">
        What our popular customers are saying
      </h1>
      <Swiper
        modules={[ EffectCoverflow, Pagination, Navigation]}
        // spaceBetween={30}
        // slidesPerView={'auto'}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <PopularCustomersCard 
            name="Serhiy Hipsky"
            title="CEO Universal"
            img={Image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCustomersCard 
            name="Sergio Gomez"
            title="Social Media Manager"
            img={Image2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCustomersCard 
            name="Grand Murray"
            title="Founder Bijackets"
            img={Image3}
          />
        </SwiperSlide>
        <PopularNavButtons />
      </Swiper>
      <div className="absolute top-[5%] left-[15%] ">
        <img className="w-full" src={QouteTop} alt="" />
      </div>
      <div className="absolute bottom-[20%] right-[15%] ">
        <img className="w-full" src={QouteBottom} alt="" />
      </div>
     
     
    </section>
  );
}
