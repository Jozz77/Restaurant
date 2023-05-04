// import React from 'react'

export default function FoodMonthCard(props) {
  return (
    <div className="FoodMonthCard w-[90%] mt-[3vh] mx-[5%] sm:w-[80%] sm:mt-[5vh] sm:mx-[10%]  md:mt-[0vh]  md:mx-[0] md:w-[31%] lg:w-[30%] ">
      <div>
        <img src={`/FoodCardAssets/${props.img}`} className="w-full img" alt="" />
      </div>
      <div className="px-[7%] py-[3vh] md:py-[1.5vh] sm:px-[10%] lg:py-[2vh]  xl:py-[3vh] ">
        <h3 className="text-[#191D23] font-semibold font-Playfair text-[1rem] leading-[120%] h-[3vh] ssm:text-[1.2rem] sm:text-[1.5rem]  md:text-[0.9rem]  lg:h-[3vh]  lg:leading-[32px] lg:text-[1.1rem] xl:h-[5vh] xl:text-[1.3rem] ">{props.name} </h3>
        <p className="text-[#75797F] font-normal text-[0.7rem] leading-[150%] pt-[1.5vh] ssm:text-[0.9rem] ssm:pt-[1vh] sm:text-[1rem] md:text-[0.8rem]  lg:leading-[26px]  lg:text-[0.9rem]  xl:text-[1rem] ">
            But I must explain to you how all this mistaken idea of will give you a
            complete account of the system
        </p>
        <div className='flex justify-between items-center pt-[2vh] ssm:pt-[2.5vh] md:pt-[1.5vh] xl:pt-[2vh] '>
                <small className=' text-[0.7rem] font-semibold text-[#191D23] ssm:text-[0.9rem] md:text-[0.7rem]  xl:text-[0.8rem] '>$6.30</small>
                <button className='text-[0.7rem] font-medium text-[#FFFFFF] leading-[19px] bg-[#DF6751] hover:bg-[#FE8B75] px-[5%] py-[0.5vh] rounded-[40px] ssm:py-[0.7vh]  ssm:text-[0.9rem] sm:py-[0.5vh] sm:text-[0.85rem]  md:text-[0.6rem] xl:text-[0.7rem] '>Order Now</button>
            </div>
      </div>
    </div>
  );
}
