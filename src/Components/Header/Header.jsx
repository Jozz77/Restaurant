// import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="hidden md:flex justify-between fixed max-w-[1440px] items-center z-10 w-full box-border text-[#FFFFFF] px-[5%] py-[2vh] ">
      <h2 className="font-semibold text-bold text-[1.5em] leading-[36.31px] ">
        Foodgram
      </h2>
      <nav className="flex justify-between w-[60%] items-center">
        <a href='' className="font-normal  text-[1.1em] leading-[24.2px]">Home</a>
        <a href='' className="font-normal text-[1.1em] leading-[24.2px]">Packages</a>
        <a href='' className="font-normal text-[1.1em] leading-[24.2px]">Review</a>
        <a href='' className="font-normal text-[1.1em] leading-[24.2px]">About Us</a>
        <a href='' className="font-normal text-[1.1em] leading-[24.2px]">Contact Us</a>
        <button className="bg-[#DF6751] text-[#FFFFFF] px-[3%] py-[1.5%] rounded-[43px] ">
          Contact us
        </button>
      </nav>
    </header>
  );
}
