import "./PartSuccess.css";
import Complete from "./Assets/Complete.png";
import PartSuccessCard from "./PartSuccessCard";
import Flower from "./Assets/Flower.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import PartSuccessNavButton from "./PartSuccessNavButton";

export default function PartSuccess() {
  return (
    <section className="flex-column justify-between py-[1vh] relative md:flex lg:py-[3vh] xl:py-[5vh] ">
      <div className="PartSuccess1 w-[100%] pt-[3vh] md:w-[50%] ">
        <div className="  ">
          <img className="w-full" src={Complete} alt="" />
        </div>
      </div>
      <div className="w-[100%] px-[5%] pt-[5vh] sm:pt-[5vh] md:pt-[3vh] md:w-[50%] lg:pt-[7vh] xl:pt-[13vh]  ">
        <Swiper
          modules={[EffectCube, Pagination, Navigation]}
          // spaceBetween={30}
          // slidesPerView={"auto"}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
        >
          <SwiperSlide>
            <PartSuccessCard
              title="Part of the secret of
                success is to eat what you
                like and let the food fight it
                out inside."
              button="Learn More"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartSuccessCard
              title="Food is best consumed when it's fresh which energizes the body to be healthy."
              button="See More"
            />
          </SwiperSlide>
          <PartSuccessNavButton />
        </Swiper>
      </div>
      <div className="absolute bottom-[3%] right-[5%] w-[35%] ssm:bottom-[5%]  ssm:w-[30%] sm:bottom-[3%] sm:w-[25%]  md:bottom-[10%] md:right-[5%] md:w-[15%] ">
        <img className="w-full" src={Flower} alt="" />
      </div>
    </section>
  );
}
