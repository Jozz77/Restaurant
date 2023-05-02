// import React from 'react'
import { FaFacebook} from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { MdOutlineEmail} from "react-icons/md";
import Twitter from './Assets/Twitter.png'
import Facebook from './Assets/Facebook.png'
import Instagram from './Assets/Instagram.png'

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FB] px-[5%] py-[2vh] ">
      <section className="flex justify-between pt-[3vh]">
        <div className="w-[33%]">
          <h2 className="text-[1.7rem] font-semibold leading-[36px] text-[#444444] ">Foodgram</h2>
          <p className="text-[1rem] pt-[1vh] text-justify font-normal leading-[30px] text-[#75797F] w-90% ">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system idea of denouncing pleasure ...
          </p>
          <div className='flex gap-[2%] pt-[2vh] '>
            <div className='w-[7%]'><a href=""><FaFacebook className='w-full text-[#DF6751] hover:text-[#FE8B75] ' /></a></div>
            <div className='w-[7%]'><a href=""><AiFillTwitterCircle className='w-full text-[#DF6751] hover:text-[#FE8B75]'/></a></div>
            <div className='w-[7%]'><a href=""> <AiFillInstagram className='w-full text-[#DF6751] hover:text-[#FE8B75]' /></a></div>
          </div>
          
        </div>
        <div>
          <hr className="border-[#DDDDDD] border-x-[1px] border-solid h-full "/>
        </div>
        <div>
            <h3 className="text-[1.7rem] pb-[2vh] font-Playfair font-semibold leading-[36px] text-[#444444]">Quick links</h3>
            <p className="text-[1rem]  font-normal leading-[30px] text-[#75797F] ">Home</p>
            <p className="text-[1rem]  font-normal leading-[30px] text-[#75797F] ">Packages</p>
            <p className="text-[1rem]  font-normal leading-[30px] text-[#75797F] ">Review</p>
            <p className="text-[1rem]  font-normal leading-[30px] text-[#75797F] ">About Us</p>
            <p className="text-[1rem]  font-normal leading-[30px] text-[#75797F] ">Contact Us</p>
        </div>
        <div>
            <hr className="border-[#DDDDDD] border-x-[1px] border-solid h-full "/>
        </div>
        <div className='w-[25%]'>
            <h3 className="text-[1.7rem] pb-[2vh] font-Playfair font-semibold leading-[36px] text-[#444444]">Contact Us</h3>
            <div className='flex pb-[1vh] gap-[5%]'>
                <div className='w-[9%]'><MdOutlineEmail className='w-full' /></div>
                <p className="text-[1rem]  font-normal leading-[30px] text-[#75797F]">(209) 555-0104</p>
            </div>
            <div className='flex pb-[1vh] gap-[5%]'>
                <div className='w-[9%]'><img className='w-full' src={Instagram} alt="" /></div>
                <p className="text-[1rem]  font-normal leading-[30px] text-[#75797F]" >michelle.rivera@example.com</p>
            </div>
            <div className='flex pb-[1vh] gap-[5%]'>
                <div className='w-[9%]'><img className='w-full' src={Twitter} alt="" /></div>
                <p className="text-[1rem] w-[70%]  font-normal leading-[30px] text-[#75797F]">2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
        </div>
      </section>
      <section className="pt-[7vh]">
        <hr className="border-[#DDDDDD] border-y-[1px] border-solid " />
        <p className="text-[1rem] font-normal leading-[30px] text-[#75797F] text-center pt-[3vh] " >© Copyright 2021 Besnik.All rights reserved.</p>
      </section>
    </footer>
  );
}
