import React from "react";

const HowItWorksMidBanner = ({
  title,
  description,
  image,
  spanData,
  fullDescription,
}) => {
  return (
    <div className="">
      <div>
        <h1 className="text-2xl lg:text-3xl  xl:text-4xl font-bold text-center">
          {title} <span className="text-[#0183CE]">{spanData}</span>
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-7  lg:gap-10 lg:flex-row sm:justify-between  my-10 xl:my-14 ">
        <p className="xl:max-w-[50%] text-[#666666]  leading-[30.38px]  xl:text-lg font-normal xl:pt-7">{description}</p>
        <img src={image} alt="" className="" />
      </div>  
      <div className="text-[#666666] leading-[30.38px]  xl:text-lg font-normal">{fullDescription}</div>
    </div>
  );
};

export default HowItWorksMidBanner;
