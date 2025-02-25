import React from "react";
import calenderImage from "../../../assets/images/claender.png";
import arrow from "../../../assets/images/arrow.png";

const ServiceCards = ({ title, description }) => {
  return (
    
      <div className=" rounded-[20px] bg-white shadow-2xl h-full">
        <div className="px-4 ">
          <div className="flex justify-start">
            <div className="bg-primary flex justify-center items-center rounded-full p-3 my-5">
              <img src={calenderImage} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-2 xl:pb-5">
            <h2 className="text-[#0183CE] font-bold text-lg sm:text-xl">{title}</h2>
            <p className="text-[#27476085] font-normal ">{description}</p>
          </div>
        </div>

        <div className="flex justify-end items-end relative ">
          <button className="">
            <img src={arrow} alt="" className="max-w-12" />
          </button>
        </div>
    
    </div>
  );
};

export default ServiceCards;
