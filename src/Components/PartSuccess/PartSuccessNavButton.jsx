import { useSwiper } from 'swiper/react'
import Previous from './Assets/Previous.png'
import Next from './Assets/Next.png'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


export default function PartSuccessNavButton() {
    const swiper = useSwiper();
  return (
    <div className='flex gap-[2%] py-[3vh] '>
        <div onClick={() => swiper.slidePrev()} className=' cursor-pointer'>
            {/* <img className='w-full' src={Previous} alt="" /> */}
            <BsArrowLeftCircle className='text-[2rem] text-[#DF6751] ' />
        </div>
        <div className='cursor-pointer' onClick={() => swiper.slideNext()} >
            {/* <img className='w-full' src={Next} alt="" /> */}
            <BsArrowRightCircle  className='text-[2rem] text-[#DF6751] hover:b ' />
        </div>
    </div>
  )
}