export default function PartSuccessCard(props) {
  return (
    <div className="text-left w-[100%] xl:w-[90%]">
      <h1 className="text-[1.2rem] text-left font-Playfair font-semibold text-[#000000] leading-[120%] ssm:text-[1.5rem] sm:text-[1.8rem] sm:leading-[150%] md:leading-[130%] md:text-[1.3rem] lg:leading-[150%] lg:text-[1.7rem] xl:text-[2rem] ">
        {props.title}
      </h1>
      <p className="text-[0.8rem] pt-[2vh] font-normal text-[#75797F] leading-[120%] ssm:text-[1rem] sm:text-[1.1rem]  md:pt-[1.5vh] md:text-[0.9rem] lg:text-[1rem] xl:pt-[3vh] ">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a comple I must
        explain to you how all this mistaken idea of denouncing pleasure and
        praising pain was bmplete account of the system....
      </p>
      <button className="text-[0.8rem]  font-medium text-[#FFFFFF] leading-[27px] bg-[#DF6751] hover:bg-[#FE8B75] px-[3%] mt-[3vh] py-[0.3vh] rounded-[40px] ssm:mt-[2vh] ssm:py-[0.5vh] ssm:px-[5%] ssm:text-[1rem] sm:mt-[3vh] sm:px-[3%] sm:text-[1.1rem]  md:mt-[2vh] md:text-[0.9rem] md:px-[5%]  lg:py-[0.7vh] lg:px-[3%] lg:text-[1rem] xl:py-[1vh] xl:mt-[3vh] xl:text-[1.2rem] ">{props.button}</button>
    </div>
  );
}
