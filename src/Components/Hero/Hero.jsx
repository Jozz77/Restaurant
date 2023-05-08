// import React from 'react'
import "./Hero.css";
import Star from "./Assets/Star.png";
import MiddleFood from './Assets/MiddleFood.png'
import MiddleLeft from './Assets/MiddleLeft.png'
import MiddleRight from './Assets/MiddleRight.png'
import Egglike from './Assets/Egglike.png'
import Tomatoes from './Assets/Tomatoes.png'
import { useState, useEffect } from "react";

const MiddleFoodArray = [MiddleFood, MiddleRight, MiddleLeft]
const MiddleLeftArray = [MiddleLeft, MiddleFood, MiddleRight]
const MiddleRightArray = [MiddleRight, MiddleLeft, MiddleFood]

export default function Hero() {
 
  const [currentImage, setCurrentImage] = useState(0);

   // switching the Middle food image 
  useEffect(() => {
    const switchImage = setInterval(() => {
      if (currentImage === MiddleFoodArray.length - 1) {
          setCurrentImage(0)
      } else (
        setCurrentImage(currentImage + 1)
      )
    }, 1500);
    return (() => clearInterval(switchImage))
  },[currentImage])

  // switching the Left food image 
  useEffect(() => {
    const switchImage = setInterval(() => {
      if (currentImage === MiddleLeftArray.length - 1) {
          setCurrentImage(0)
      } else (
        setCurrentImage(currentImage + 1)
      )
    }, 1500);
    return (() => clearInterval(switchImage))
  },[currentImage])

  // switching the Right food image 
  useEffect(() => {
    const switchImage = setInterval(() => {
      if (currentImage === MiddleRightArray.length - 1) {
          setCurrentImage(0)
      } else (
        setCurrentImage(currentImage + 1)
      )
    }, 1500);
    return (() => clearInterval(switchImage))
  },[currentImage])

  return (
    <section className=" Hero relative pb-[12vh] w-full pt-[12vh] ssm:pb-[12vh] sm:pb-[15vh] sm:pt-[15vh] md:pt-[20vh] lg:pt-[20vh] lg:pb-[20vh] xl:pb-[34vh] ">
      <div className="w-[90%] mx-[5%] pt-[0vh] lg:w-[86%] lg:mx-[7%] lg:pt-[3vh]  xl:w-[70%] xl:mx-[15%] xl:pt-[5vh] ">
        <h1 className="text-[#FFFFFF] font-Playfair text-center text-[1.8rem] font-bold leading-[100%] sm:leading-[110%] sm:text-[3rem] md:text-[3.2rem] lg:leading-[100%] lg:text-[3.5rem] xl:text-[4rem] ">
          People who love to eat are always the best people.
        </h1>
        <p className="text-center text-[#EDEDED] mx-[0%] pt-[3vh] px-[5%] text-[0.75rem] font-normal leading-[130%] sm:mx-[1%] sm:text-[1rem] md:mx-[3%] md:text-[1.1rem] lg:mx-[0%] lg:pt-[5vh] ">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni aspernatur aut odit aut fugit, sed
          quia consequuntur magni dolores...
        </p>
        <div className="flex justify-center items-center pt-[3vh] gap-[0%] sm:gap-[2%] lg:pt-[5vh] ">
          <button className="bg-[#DF6751] hover:bg-[#FE8B75] cursor-pointer text-[0.8rem] text-[#FFFFFF]  px-[3%] py-[1%] rounded-[43px] sm:text-[1rem] ">
            Explore our Menu
          </button>
          <div className="flex justify-center gap-[1%] ml-[2%] sm:ml-[0] sm:gap-[3%] ">
            <div><img src={Star} alt="" className="w-[70%] sm:w-full"/></div>
            <div><img src={Star} alt="" className="w-[70%] sm:w-full"/></div>
            <div><img src={Star} alt="" className="w-[70%] sm:w-full"/></div>
            <div><img src={Star} alt="" className="w-[70%] sm:w-full"/></div>
            <div><img src={Star} alt="" className="w-[70%] sm:w-full"/></div>
          </div>
        </div>
      </div>
      <div className="w-[20%] absolute top-[92%] left-[40%] ssm:top-[85%] ssm:left-[40%] sm:top-[90%] sm:left-[40%] md:top-[85%] md:left-[40%] xl:top-[85%] xl:left-[40%] ">
        <img src={MiddleFoodArray[currentImage]} className="w-full" alt="" />
      </div>
      <div className="w-[15%] absolute top-[87%] left-[10%] ssm:top-[77%] ssm:left-[10%] sm:top-[83%] sm:left-[10%] md:top-[80%] md:left-[10%] lg:left-[10%] lg:top-[77%] xl:top-[75%] xl:left-[10%] ">
        <img src={MiddleLeftArray[currentImage]} className="w-full" alt="" />
      </div>
      <div className="w-[15%] absolute top-[87%] right-[10%] ssm:top-[77%] ssm:right-[10%] sm:top-[83%] sm:right-[10%] md:top-[80%] md:right-[10%] lg:top-[77%] lg:right-[10%] xl:top-[75%] xl:right-[10%] ">
        <img src={MiddleRightArray[currentImage]} className="w-full" alt="" />
      </div>
      <div className="w-[15%] absolute top-[105%] left-[5%] xl:top-[110%] xl:left-[5%] ">
        <img src={Tomatoes} className="w-full" alt="" />
      </div>
      <div className="w-[8%] absolute top-[105%] right-[5%] xl:top-[110%] xl:right-[5%] ">
        <img src={Egglike} className="w-full" alt="" />
      </div>
    </section>
  );
}
