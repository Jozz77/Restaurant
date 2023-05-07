import { useSwiper } from 'swiper/react'
import Previous from './Assets/Previous.png'
import Next from './Assets/Next.png'
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";


export default function PopularNavButtons() {
    const swiper = useSwiper();
  return (
    <div className='flex justify-center gap-[1%] py-[3vh] '>
          <div onClick={() => swiper.slidePrev()} className=' cursor-pointer'>
            <BsArrowLeftCircle className='text-[1.5rem] text-[#DF6751] hover:text-[#FE8B75] ssm:text-[2rem] md:text-[1.5rem]  lg:text-[2rem] ' />
        </div>
        <div className='cursor-pointer' onClick={() => swiper.slideNext()} >
            <BsFillArrowRightCircleFill  className='text-[1.5rem] bg-[#FFFFFF] text-[#DF6751] ml-[20%] sm:ml-[0] ssm:text-[2rem] md:text-[1.5rem]  lg:text-[2rem] hover:text-[#FE8B75] ' />
        </div>
    </div>
  )
}
