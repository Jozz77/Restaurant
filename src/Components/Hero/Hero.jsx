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
    <section className=" Hero relative pb-[34vh]  w-full pt-[20vh]">
      <div className="w-[70%] mx-[15%] pt-[5vh] ">
        <h1 className="text-[#FFFFFF] font-Playfair text-center text-[4em] font-bold leading-[110%]  ">
          People who love to eat are always the best people.
        </h1>
        <p className="text-center text-[#EDEDED] pt-[5vh] px-[5%] text-[1.1em] font-normal leading-[130%] ">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni aspernatur aut odit aut fugit, sed
          quia consequuntur magni dolores...
        </p>
        <div className="flex justify-center items-center pt-[5vh] gap-[2%] ">
          <button className="bg-[#DF6751] text-[#FFFFFF]  px-[3%] py-[1%] rounded-[43px] ">
            Explore our Menu
          </button>
          <div className="flex justify-center gap-[3%] ">
            <div><img src={Star} alt="" className="w-full"/></div>
            <div><img src={Star} alt="" className="w-full"/></div>
            <div><img src={Star} alt="" className="w-full"/></div>
            <div><img src={Star} alt="" className="w-full"/></div>
            <div><img src={Star} alt="" className="w-full"/></div>
          </div>
        </div>
      </div>
      <div className="w-[20%] absolute top-[85%] bottom-[0%] left-[40%] ">
        <img src={MiddleFoodArray[currentImage]} className="w-full" alt="" />
      </div>
      <div className="w-[15%] absolute top-[75%] bottom-[0%] left-[10%] ">
        <img src={MiddleLeftArray[currentImage]} className="w-full" alt="" />
      </div>
      <div className="w-[15%] absolute top-[75%] bottom-[0%] right-[10%] ">
        <img src={MiddleRightArray[currentImage]} className="w-full" alt="" />
      </div>
      <div className="w-[15%] absolute top-[110%] bottom-[0%] left-[5%] ">
        <img src={Tomatoes} className="w-full" alt="" />
      </div>
      <div className="w-[8%] absolute top-[110%] bottom-[0%] right-[5%] ">
        <img src={Egglike} className="w-full" alt="" />
      </div>
    </section>
  );
}
