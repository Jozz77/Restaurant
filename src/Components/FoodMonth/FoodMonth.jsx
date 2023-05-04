// import React from 'react'
import "./FoodMonth.css";

import FoodMonthCard from "./FoodMonthCard";

export default function FoodMonth() {
  return (
    <div className="FoodMonth px-[5%] pt-[10vh] mt-[5vh] ssm:pt-[9vh]  sm:px-[7.5%] sm:pt-[5vh] lg:pt-[7vh]  xl:pt-[10vh]  ">
      <h1 className="text-[#000000] font-semibold font-Playfair text-[1.5rem] text-center leading-[53px] ssm:text-[1.7rem]  md:text-[2rem] lg:text-[2.5rem] ">
        Food of the Month
      </h1>
      <p className="text-[#75797F] font-normal text-[0.8rem] text-center leading-[150%] px-[5%] pt-[0vh] ssm:pt-[1vh] ssm:leading-[28px] ssm:text-[1rem] md:pt-[1.5vh] lg:px-[10%] lg:text-[1.1rem] xl:pt-[2vh] xl:px-[20%] ">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system
      </p>
      <section className="pt-[0vh] flex flex-wrap justify-center md:pt-[3vh] md:justify-between  lg:pt-[5vh] ">
        <FoodMonthCard name="Little Caesars Crazy Bread" img="Image.png" />
        <FoodMonthCard name="Two-Piece Fish Meal" img="Image2.png" />
        <FoodMonthCard name="Dunkin' Munchkins" img="Image3.png" />
      </section>
      <div className="text-center py-[5vh] ssm:py-[3vh] sm:py-[5vh] md:py-[4vh]  lg:py-[5vh] xl:py-[7vh] ">
        <button className="text-[0.7rem]  font-medium text-[#FFFFFF] leading-[19px] bg-[#DF6751] hover:bg-[#FE8B75] px-[4%] py-[1.2vh] rounded-[40px] ssm:text-[0.9rem] sm:py-[2vh] sm:text-[1rem] md:px-[2%] md:py-[1.5vh] lg:text-[1.1rem]   xl:py-[1.8vh]  xl:text-[1.3rem] ">
            Explore our Menu
        </button>
      </div>
    </div>
  );
}
