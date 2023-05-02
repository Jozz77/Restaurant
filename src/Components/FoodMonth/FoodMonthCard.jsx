// import React from 'react'

export default function FoodMonthCard(props) {
  return (
    <div className="FoodMonthCard w-[30%] ">
      <div>
        <img src={`/FoodCardAssets/${props.img}`} className="w-full img" alt="" />
      </div>
      <div className="px-[10%] py-[3vh] ">
        <h3 className="text-[#191D23] font-medium font-Playfair text-[1.4rem] pl-[3%] leading-[32px] ">{props.name} </h3>
        <p className="text-[#75797F] font-normal text-[1rem] leading-[26px] pt-[1vh] ">
            But I must explain to you how all this mistaken idea of will give you a
            complete account of the system
        </p>
        <div className='flex justify-between items-center pt-[2vh]  '>
                <small className=' text-[0.8rem] font-semibold text-[#191D23] '>$6.30</small>
                <button className='text-[0.7rem] font-medium text-[#FFFFFF] leading-[19px] bg-[#DF6751] hover:bg-[#FE8B75] px-[5%] py-[0.5vh] rounded-[40px] '>Order Now</button>
            </div>
      </div>
    </div>
  );
}
