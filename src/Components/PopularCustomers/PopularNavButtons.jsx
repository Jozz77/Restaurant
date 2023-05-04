import { useSwiper } from 'swiper/react'
import Previous from './Assets/Previous.png'
import Next from './Assets/Next.png'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


export default function PopularNavButtons() {
    const swiper = useSwiper();
  return (
    <div className='flex justify-center gap-[1%] py-[3vh] '>
        <div onClick={() => swiper.slidePrev()} className=' cursor-pointer'>
            {/* <img className='w-full' src={Previous} alt="" /> */}
            <BsArrowLeftCircle className='text-[1.5rem] text-[#DF6751] ssm:text-[2rem] md:text-[1.5rem]  lg:text-[2rem] ' />
        </div>
        <div className='cursor-pointer' onClick={() => swiper.slideNext()} >
            {/* <img className='w-full' src={Next} alt="" /> */}
            <BsArrowRightCircle  className='text-[1.5rem] text-[#DF6751] ssm:text-[2rem] md:text-[1.5rem]  lg:text-[2rem] hover:b ' />
        </div>
    </div>
  )
}
