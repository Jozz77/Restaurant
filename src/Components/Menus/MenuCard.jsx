// import React from 'react'
import './Menus.css'

export default function MenuCard(props) {
  return (
    <section className='Menucard w-[90%] px-[10%] py-[5vh] '>
        <div className='w-[100%] h-[15vh] mb-[3vh]'><img src={props.img} className='w-full' alt="" /></div>
        <div className='flex justify-center '>
          <a href='' className="font-semibold text-[1rem] text-center font-Playfair leading-[38px] ">{props.title}</a>
        </div>
        <div className='flex justify-between items-center pt-[2vh] '>
            <small className=' text-[0.7rem] font-medium text-[#191D23] '>$6.30</small>
            <button className='text-[0.7rem] font-medium text-[#FFFFFF] leading-[19px] bg-[#DF6751] hover:bg-[#FE8B75] px-[5%] py-[0.5vh] rounded-[40px] '>Order Now</button>
        </div>
    </section>
  )
}
