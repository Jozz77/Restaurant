// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  let checkState = toggle ? "show" : "hide";
  let checkStates = toggle ? "hide" : "show";

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
      <header className="flex justify-between fixed h-[10vh] w-full items-center z-10 text-[#FFFFFF] px-[5%] py-[1.5vh] sm:py-[2vh] md:hidden ">
        <h2 className="text-[1.4rem] ssm:text-[1.6rem] sm:text-[1.8rem]">
          Foodgram
        </h2>
        <div>
          <div
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              handleClick();
            }}
            className={`${checkState}`}
          >
            <GiHamburgerMenu className="text-[1.8rem] ssm:text-[1.9rem] sm:text-[2rem]" />
          </div>
          <div
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              handleClick();
            }}
            className={`${checkStates}`}
          >
            <IoMdClose className="text-[1.8rem] text-[#FFFFFF] ssm:text-[1.9rem] sm:text-[2rem]" />
          </div>
        </div>

        <div
          className={
            isNavOpen
              ? "showMenuNav border-t-[#EAECF0] border-solid border-t-2 bg-white z-20 py-[3vh] px-[5%] text-[#344054] absolute flex flex-col h-[90vh] sm:h-[85vh]"
              : "hideMenuNav"
          }
        >
          <div className="links ">
            <Link
              to="/"
              onClick={() => {
                setIsNavOpen(false);
                handleClick();
              }}
            >
              {" "}
              <div className="hover:text-[#155EEF] font-semibold bg-[#eaecf09a] my-[1vh] text-[bold] rounded-[4px] px-[5%] py-[2vh] ">
                {" "}
                Home{" "}
              </div>
            </Link>
            <Link
              to="/"
              onClick={() => {
                setIsNavOpen(false);
                handleClick();
              }}
            >
              {" "}
              <div className="hover:text-[#155EEF] font-semibold bg-[#eaecf09a] my-[1vh] text-[bold] rounded-[4px] px-[5%] py-[2vh] ">
                {" "}
                Packages{" "}
              </div>
            </Link>
            <Link
              to=""
              onClick={() => {
                setIsNavOpen(false);
                handleClick();
              }}
            >
              <div className="hover:text-[#155EEF] font-semibold bg-[#eaecf09a] my-[1vh] text-[bold] rounded-[4px] px-[5%] py-[2vh]">
                {" "}
                Review
              </div>
            </Link>
            <Link
              to=""
              onClick={() => {
                setIsNavOpen(false);
                handleClick();
              }}
            >
              <div className="hover:text-[#155EEF] font-semibold bg-[rgba(6, 6, 6, 0.644)] my-[1vh] text-[bold] rounded-[4px] px-[5%] py-[2vh]">
                {" "}
                About Us
              </div>
            </Link>
            
            <Link
              to="/register"
              onClick={() => {
                setIsNavOpen(false);
                handleClick();
              }}
            >
              <button className="head_mobile_register_btn relative text-[#FFFFFF] font-semibold bg-[#DF6751] hover:bg-[#FE8B75] my-[1vh] text-[bold] rounded-lg px-[5%] py-[2vh] text-center ">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}
