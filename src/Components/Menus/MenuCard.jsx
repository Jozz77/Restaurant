// import React from 'react'
import './Menus.css'

export default function MenuCard(props) {
  return (
    <section className='Menucard w-[90%] px-[10%] py-[2vh] sm:py-[2vh] xl:py-[5vh] '>
        <div className='w-[100%] h-[10vh] ssm:h-[12vh] sm:h-[14vh] mb-[3vh] md:h-[13vh]  lg:h-[13vh] xl:h-[17vh]'><img src={props.img} className='w-full' alt="" /></div>
        <div className='flex justify-center '>
          <a href='' className="font-semibold text-[0.7rem] text-center font-Playfair h-[5vh] leading-[130%] ssm:h-[6vh] ssm:text-[0.9rem]  sm:text-[1.1rem]  sm:h-[4vh] md:text-[1rem] ">{props.title}</a>
        </div>
        <div className='flex justify-between items-center pt-[1.5vh] ssm:pt-[2vh] md:pt-[1.4vh] lg:pt-[2vh] '>
            <small className=' text-[0.5rem] font-medium text-[#191D23] sm:text-[0.8rem] ssm:text-[0.6rem] md:text-[0.7rem] '>$6.30</small>
            <button className='text-[0.5rem] font-medium text-[#FFFFFF] leading-[19px] bg-[#DF6751] hover:bg-[#FE8B75] px-[5%] py-[0.1vh] rounded-[30px] ssm:py-[0.3vh] md:rounded-[40px] ssm:text-[0.6rem]  sm:text-[0.8rem] md:ttext-[0.7rem] lg:py-[0.5vh] '>Order Now</button>
        </div>
    </section>
  )
}
