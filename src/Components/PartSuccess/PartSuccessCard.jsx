export default function PartSuccessCard(props) {
  return (
    <div className="text-left w-[90%]">
      <h1 className="text-[2rem] text-left font-Playfair w-[100%]  font-semibold text-[#000000] leading-[150%]  ">
        {props.title}
      </h1>
      <p className="text-[1rem] pt-[3vh] font-normal text-[#75797F] leading-[120%]  ">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a comple I must
        explain to you how all this mistaken idea of denouncing pleasure and
        praising pain was bmplete account of the system....
      </p>
      <button className="text-[1.2rem]  font-medium text-[#FFFFFF] leading-[27px] bg-[#DF6751] px-[3%] mt-[3vh] py-[1vh] rounded-[40px] ">{props.button}</button>
    </div>
  );
}
