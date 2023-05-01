import { useSwiper } from 'swiper/react'
import Previous from './Assets/Previous.png'
import Next from './Assets/Next.png'


export default function PopularNavButtons() {
    const swiper = useSwiper();
  return (
    <div className='flex justify-center gap-[1%] py-[3vh] '>
        <div onClick={() => swiper.slidePrev()} className='cursor-pointer'>
            <img className='w-full' src={Previous} alt="" />
        </div>
        <div className='cursor-pointer' onClick={() => swiper.slideNext()} >
            <img className='w-full' src={Next} alt="" />
        </div>
    </div>
  )
}
