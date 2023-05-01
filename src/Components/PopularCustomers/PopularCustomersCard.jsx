// import React from 'react'
import Image from "./Assets/Image.png";
import Star from "./Assets/Star.png"

export default function PopularCustomersCard() {
  return (
    <section>
      <div className="flex justify-center gap-[2%] mt-[5vh] items-center ">
        <div className="">
          <img className="[w-full]" src={Image} alt="" />
        </div>
        <div>
          <h3 className="text-[1.4em] font-Playfair text-center font-semibold text-[#000000] leading-[22px] pb-[0.5vh]  ">
            Serhiy Hipsky
          </h3>
          <small className="text-[0.95em] text-center font-medium text-[#A3A3A3] leading-[17px]  ">
            CEO Universal
          </small>
        </div>
      </div>
      <div className="text-center">
        <p className="px-[15%] py-[3vh] text-[1em] text-center font-normal text-[#A3A3A3] leading-[30px] ">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system idea of denouncing pleasure ...But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system idea of denouncing pleasure ...
        </p>
        <div className="flex justify-center gap-[0.1%] ">
            <div className="w-[1.5%]">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[1.5%]">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[1.5%]">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[1.5%]">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[1.5%]">
                <img className="w-full" src={Star} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}