// import React from 'react'
import "./FoodMonth.css";

import FoodMonthCard from "./FoodMonthCard";

export default function FoodMonth() {
  return (
    <div className="FoodMonth px-[7.5%] pt-[10vh] mt-[5vh] ">
      <h1 className="text-[#000000] font-semibold font-Playfair text-[2.5em] text-center leading-[53px] ">
        Food of the Month
      </h1>
      <p className="text-[#75797F] font-normal text-[1.1em] text-center leading-[28px] px-[20%] pt-[2vh] ">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system
      </p>
      <section className="pt-[5vh] flex justify-between ">
        <FoodMonthCard name="Little Caesars Crazy Bread" img="Image.png" />
        <FoodMonthCard name="Two-Piece Fish Meal" img="Image2.png" />
        <FoodMonthCard name="Dunkin' Munchkins" img="Image3.png" />
      </section>
      <div className="text-center py-[7vh] ">
        <button className="text-[1.3em]  font-medium text-[#FFFFFF] leading-[19px] bg-[#DF6751] px-[2%] py-[1.8vh] rounded-[40px] ">
            Explore our Menu
        </button>
      </div>
    </div>
  );
}
