// import React from 'react'
import Image from './Assets/Image.png'
import './Menus.css'

export default function MenuCard() {
  return (
    <section className='Menucard w-[90%] px-[10%] py-[5vh] '>
        <div className='w-[100%]'><img src={Image} className='w-full' alt="" /></div>
        <a href='' className="font-semibold text-center font-Playfair leading-[38px] ">Chicken roast recipe</a>
        <div className='flex justify-between items-center pt-[2vh] '>
            <small className=' text-[0.7em] font-medium text-[#191D23] '>$6.30</small>
            <button className='text-[0.7em] font-medium text-[#FFFFFF] leading-[19px] bg-[#DF6751] px-[5%] py-[0.5vh] rounded-[40px] '>Order Now</button>
        </div>
    </section>
  )
}
