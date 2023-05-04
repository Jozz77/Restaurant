// import React from 'react'

import Star from "./Assets/Star.png"

export default function PopularCustomersCard(props) {
  return (
    <section>
      <div className="flex justify-center gap-[0%] z-[-1] mt-[2vh] items-center sm:gap-[2%] ssm: sm:mt-[1vh] md:mt-[2vh]  xl:mt-[5vh] ">
        <div className="">
          <img className="w-[80%] ssm:w-[80%] sm:w-full" src={props.img} alt="" />
        </div>
        <div>
          <h3 className="text-[0.9rem] font-Playfair text-center font-semibold text-[#000000] leading-[22px] pb-[0.5vh] ssm:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem]  ">
            {props.name}
          </h3>
          <small className="text-[0.6rem] text-center font-medium text-[#A3A3A3] leading-[17px] ssm:text-[0.75rem] sm:text-[0.85rem] lg:text-[0.95rem] ">
            {props.title}
          </small>
        </div>
      </div>
      <div className="text-center">
        <p className="px-[5%] py-[2vh] text-[0.75rem] text-center font-normal text-[#A3A3A3] leading-[170%] ssm:text-[0.8rem]  sm:px-[10%] sm:leading-[30px] sm:text-[1rem] lg:py-[3vh] lg:px-[15%] ">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system idea of denouncing pleasure ...But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system idea of denouncing pleasure ...
        </p>
        <div className="flex justify-center gap-[0.1%] ">
            <div className="w-[4%] ssm:w-[3%] sm:w-[1.5%] ">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[4%] ssm:w-[3%] sm:w-[1.5%] sm:">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[4%] ssm:w-[3%] sm:w-[1.5%] sm:">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[4%] ssm:w-[3%] sm:w-[1.5%] sm:">
                <img className="w-full" src={Star} alt="" />
            </div>
            <div className="w-[4%] ssm:w-[3%] sm:w-[1.5%] sm:">
                <img className="w-full" src={Star} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}
