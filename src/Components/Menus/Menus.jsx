// import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image1 from './Assets/Image1.png'
import Image2 from './Assets/Image2.png'
import Image3 from './Assets/Image3.png'
import Image4 from './Assets/Image4.png'
import Image5 from './Assets/Image5.png'
import Image6 from './Assets/Image6.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import MenuCard from "./MenuCard";
// import MenuNavContoller from "./MenuNavContoller";css

export default function Menus() {
  return (
    <section className="pt-[7vh] sm:pt-[10vh] md:pt-[15vh] lg:pt-[20vh] xl:pt-[25vh] ">
      <div className="flex-column justify-center px items-center gap-[6%] md:flex">
        <h2 className="text-semibold text-[1.3rem] text-center text-[#191D23] font-Playfair leading-[38px] ssm:text-[2rem] sm:text-[2.4rem] ">Our foods menus</h2>
        <p className="text-normal text-[0.8rem] text-center text-[#75797F] leading-[130%] pt-[1vh] px-[5%] w-[100%] sm:text-[1rem] sm:pt-[2vh] sm:px-[10%] md:pt-[0] md:text-justify md:px-[0] md:w-[40%] lg:leading-[28px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore
        </p>
      </div>
      <div className="px-[5%]">
        {/* large and above menucards */}
        <div className="sm:hidden lg:py-[7vh] xl:py-[10vh]">
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
              // el: 'slider-controler',
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
               <MenuCard
                img={Image1}
                title="Barbecue Chicken Fried"
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Mutton biryani recipe"
                img={Image2}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Chicken roast recipe"
                img={Image3}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Great Pasta"
                img={Image4}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Barbecue Chicken Cooked"
                img={Image5}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Vegetable Pizza "
                img={Image6}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Barbecue Chicken Fried"
                img={Image1}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Mutton biryani recipe"
                img={Image2}
              />
            </SwiperSlide>
            
            {/* <MenuNavContoller 
              className='slider-controler'
            /> */}
        </Swiper>
        </div>

        {/* medium and below menucards */}
        <div className="flex py-[7vh] lg:hidden">
            <Swiper
            slidesPerView={3}
            spaceBetween={3}
            // spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
              // el: 'slider-controler',
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
               <MenuCard
                img={Image1}
                title="Barbecue Chicken Fried"
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Mutton biryani recipe"
                img={Image2}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Chicken roast recipe"
                img={Image3}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Great Pasta"
                img={Image4}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Barbecue Chicken Cooked"
                img={Image5}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Vegetable Pizza "
                img={Image6}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Barbecue Chicken Fried"
                img={Image1}
              />
            </SwiperSlide>
            <SwiperSlide>
               <MenuCard
               title="Mutton biryani recipe"
                img={Image2}
              />
            </SwiperSlide>
            
            {/* <MenuNavContoller 
              className='slider-controler'
            /> */}
        </Swiper>
        </div>
      </div>
    </section>
  );
}
