import "./PartSuccess.css";
import Complete from "./Assets/Complete.png";
import PartSuccessCard from "./PartSuccessCard";
import Flower from "./Assets/Flower.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PartSuccessNavButton from "./PartSuccessNavButton";

export default function PartSuccess() {
  return (
    <section className="flex justify-between py-[5vh] relative ">
      <div className="PartSuccess1 w-[50%] pt-[3vh]  ">
        <div className="  ">
          <img className="w-full" src={Complete} alt="" />
        </div>
      </div>
      <div className="w-[50%] px-[5%] pt-[13vh] ">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={"auto"}
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
      <div className="absolute bottom-[10%] right-[5%] w-[15%] ">
        <img className="w-full" src={Flower} alt="" />
      </div>
    </section>
  );
}
