// import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import Twitter from './Assets/Twitter.png'
// import Facebook from './Assets/Facebook.png'
// import Instagram from './Assets/Instagram.png'

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FB] px-[5%] py-[2vh] ">
      <section className="hidden md:flex justify-between pt-[3vh] ">
        <div className="w-[33%] md:w-[33%]">
          <h2 className="text-[1.5rem] font-semibold leading-[36px] text-[#444444] lg:text-[1.7rem]  ">
            Foodgram
          </h2>
          <p className="text-[0.9rem] pt-[1vh] text-justify font-normal leading-[150%] text-[#75797F] lg:text-[1rem]  xl:leading-[30px] w-90% ">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system idea of denouncing pleasure ...
          </p>
          <div className="flex items-center gap-[1%] pt-[2vh] ">
            <div className="w-[7%]">
              <a href="">
                <FaFacebook className="w-full text-[#DF6751] hover:text-[#FE8B75] " />
              </a>
            </div>
            <div className="w-[7%]">
              <a href="">
                <AiFillTwitterCircle className="w-full text-[#DF6751] hover:text-[#FE8B75]" />
              </a>
            </div>
            <div className="w-[7%]">
              <a href="">
                {" "}
                <AiFillInstagram className="w-full text-[#DF6751] hover:text-[#FE8B75]" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <hr className=" md:border-[#DDDDDD] border-x-[1px] border-solid h-full " />
        </div>
        <div>
          <h3 className="text-[1.5rem] pb-[1vh] font-Playfair font-semibold leading-[36px] text-[#444444] xl:pb-[2vh] lg:text-[1.7rem]  ">
            Quick links
          </h3>
          <p className="text-[0.9rem]  font-normal leading-[200%] text-[#75797F] lg:text-[1rem] lg:leading-[30px] ">
            Home
          </p>
          <p className="text-[0.9rem]  font-normal leading-[200%] text-[#75797F] lg:text-[1rem] lg:leading-[30px] ">
            Packages
          </p>
          <p className="text-[0.9rem]  font-normal leading-[200%] text-[#75797F] lg:text-[1rem] lg:leading-[30px] ">
            Review
          </p>
          <p className="text-[0.9rem]  font-normal leading-[200%] text-[#75797F] lg:text-[1rem] lg:leading-[30px] ">
            About Us
          </p>
          <p className="text-[0.9rem]  font-normal leading-[200%] text-[#75797F] lg:text-[1rem] lg:leading-[30px] ">
            Contact Us
          </p>
        </div>
        <div>
          <hr className=" md:border-[#DDDDDD] border-x-[1px] border-solid h-full " />
        </div>
        <div className="w-[30%]  lg:pr-0 lg:w-[25%]">
          <h3 className="text-[1.5rem] pb-[1vh] font-Playfair font-semibold leading-[36px] text-[#444444] xl:pb-[2vh] lg:text-[1.7rem] ">
            Contact Us
          </h3>
          <div className="flex pb-[1vh] gap-[5%]">
            <div className="w-[6%]">
              <BsTelephone className="w-full text-[#DF6751]" />
            </div>
            <p className="text-[0.9rem]  font-normal leading-[150%] text-[#75797F] lg:text-[1rem] xl:leading-[30px]">
              (209) 555-0104
            </p>
          </div>
          <div className="flex  pr-[5%] pb-[1vh] gap-[5%]">
            <div className="w-[10%]">
              <MdOutlineEmail className="w-full text-[#DF6751]" />
            </div>
            <p className="text-[0.9rem] w-[70%] mr-[15%] font-normal leading-[150%] text-[#75797F] lg:text-[1rem] xl:leading-[30px]">
              michelle.rivera@example.com
            </p>
          </div>
          <div className="flex  pb-[1vh] gap-[5%]">
            <div className="w-[10%]">
              <HiOutlineLocationMarker className="w-full text-[#DF6751]" />
            </div>
            <p className="text-[0.9rem] w-[70%]  font-normal leading-[150%] text-[#75797F] lg:text-[1rem] xl:leading-[30px]">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
        </div>
      </section>

      {/* mobile links */}
      <section className="pt-[1vh] ssm:pt-[3vh] md:hidden">
        <div className="">
          <h2 className="text-[1.2rem] font-semibold leading-[36px] text-[#444444] ssm:text-[1.5rem] sm:text-[2rem] ">
            Foodgram
          </h2>
          <p className="text-[0.8rem] pt-[1vh] font-normal leading-[150%] w-[95%] text-[#75797F] ssm:text-[0.9rem] ssm:w-[90%] sm:text-[1.1rem] ">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system idea of denouncing pleasure ...
          </p>
          <div className="flex items-center w-[20%] gap-[1%] pt-[2vh] ">
            <div className="w-[100%]">
              <a href="">
                <FaFacebook className="text-[1rem] text-[#DF6751] hover:text-[#FE8B75] " />
              </a>
            </div>
            <div className="w-[100%]">
              <a href="">
                <AiFillTwitterCircle className="text-[1rem] text-[#DF6751] hover:text-[#FE8B75]" />
              </a>
            </div>
            <div className="w-[100%]">
              <a href="">
                {" "}
                <AiFillInstagram className="text-[1rem] text-[#DF6751] hover:text-[#FE8B75]" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[3vh] ">
          <div className="w-[40%] sm:w-[50%]">
            <h3 className="text-[1.1rem] pb-[0.5vh] font-Playfair font-semibold leading-[36px] text-[#444444] ssm:pb-[1vh]">
              Quick links
            </h3>
            <p className="text-[0.7rem]  font-normal leading-[200%] text-[#75797F]  ">
              Home
            </p>
            <p className="text-[0.7rem]  font-normal leading-[200%] text-[#75797F]  ">
              Packages
            </p>
            <p className="text-[0.7rem]  font-normal leading-[200%] text-[#75797F]  ">
              Review
            </p>
            <p className="text-[0.7rem]  font-normal leading-[200%] text-[#75797F]  ">
              About Us
            </p>
            <p className="text-[0.7rem]  font-normal leading-[200%] text-[#75797F]  ">
              Contact Us
            </p>
          </div>
          <div className="w-[60%] sm:w-[50%] ">
            <h3 className="text-[1.1rem] pb-[1vh] font-Playfair font-semibold leading-[36px] text-[#444444] ssm:pb-[1.5vh] ">
              Contact Us
            </h3>
            <div className="flex pb-[1vh] gap-[3%]">
              <div className="w-[6%]">
                <BsTelephone className="text-[0.7rem] text-[#DF6751]" />
              </div>
              <p className="text-[0.7rem]  font-normal leading-[150%] text-[#75797F] ">
                (209) 555-0104
              </p>
            </div>
            <div className="flex  pr-[5%] pb-[1vh] gap-[3%]">
              <div className="w-[10%]">
                <MdOutlineEmail className="text-[0.7rem] text-[#DF6751]" />
              </div>
              <p className="text-[0.7rem] w-[70%] mr-[15%] font-normal leading-[150%] text-[#75797F]" >
                michelle.rivera@example.com
              </p>
            </div>
            <div className="flex  pb-[1vh] gap-[3%]">
              <div className="w-[10%]">
                <HiOutlineLocationMarker className="text-[0.7rem] text-[#DF6751]" />
              </div>
              <p className="text-[0.7rem] w-[70%]  font-normal leading-[150%] text-[#75797F]" >
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[3vh] md:pt-[5vh] lg:pt-[7vh]">
        <hr className="border-[#DDDDDD] border-y-[1px] border-solid " />
        <p className="text-[0.6rem] font-normal leading-[30px] text-[#75797F] text-center pt-[0.5vh] ssm:pt-[1vh]  ssm:text-[0.8rem] sm:text-[1rem]  ">
          © Copyright 2021 Besnik.All rights reserved.
        </p>
      </section>
    </footer>
  );
}
