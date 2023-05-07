// import React from 'react'
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <section>
      <header className="hidden md:flex justify-between fixed max-w-[1440px] items-center z-10 w-full box-border text-[#FFFFFF] px-[5%] py-[2vh] ">
        <h2 className="font-semibold text-bold text-[1.4rem] leading-[36.31px] xl:text-[1.5rem] ">
          Foodgram
        </h2>
        <nav className="flex justify-between w-[70%] items-center lg:w-[60%]">
          <a
            href=""
            className="font-normal  text-[0.95rem] leading-[24.2px] xl:text-[1.1rem]"
          >
            Home
          </a>
          <a
            href=""
            className="font-normal text-[0.95rem] leading-[24.2px] xl:text-[1.1rem]"
          >
            Packages
          </a>
          <a
            href=""
            className="font-normal text-[0.95rem] leading-[24.2px] xl:text-[1.1rem]"
          >
            Review
          </a>
          <a
            href=""
            className="font-normal text-[0.95rem] leading-[24.2px]   xl:text-[1.1rem]"
          >
            About Us
          </a>
          <a
            href=""
            className="font-normal text-[0.95rem] leading-[24.2px] xl:text-[1.1rem]"
          >
            Contact Us
          </a>
          <button className="bg-[#DF6751] hover:bg-[#FE8B75] text-[#FFFFFF] text-[0.95rem] px-[3%] py-[1.5%] rounded-[43px] ">
            Contact us
          </button>
        </nav>
      </header>

      {/* mobile header */}
      <header className="flex justify-between fixed max-w-[1440px] w-full items-center z-10 text-[#FFFFFF] px-[5%] py-[1.5vh] sm:py-[2vh] md:hidden ">
        <h2 className="text-[1.4rem] ssm:text-[1.6rem] sm:text-[1.8rem]">
          Foodgram
        </h2>
        <GiHamburgerMenu className="text-[1.8rem] ssm:text-[1.9rem] sm:text-[2rem]"/>
      </header>
    </section>
  );
}
