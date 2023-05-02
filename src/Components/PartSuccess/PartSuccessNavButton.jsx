import { useSwiper } from 'swiper/react'
import Previous from './Assets/Previous.png'
import Next from './Assets/Next.png'


export default function PartSuccessNavButton() {
    const swiper = useSwiper();
  return (
    <div className='flex  gap-[2%] py-[3vh] '>
        <div onClick={() => swiper.slidePrev()} className='cursor-pointer'>
            <img className='w-full' src={Previous} alt="" />
        </div>
        <div className='cursor-pointer' onClick={() => swiper.slideNext()} >
            <img className='w-full' src={Next} alt="" />
        </div>
    </div>
  )
}