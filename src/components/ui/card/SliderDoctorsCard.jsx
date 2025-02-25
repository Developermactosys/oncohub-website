import { div } from "framer-motion/client";
import React from "react";
import innerImage from "../../../assets/images/image-inner.png";
import cn from "../../../utils/cn";

const SliderDoctorsCard = ({ image, name, specialty, className="" }) => {
  return (
    <div className={cn('',className)}>
      <div className=" shadow-xl rounded-t-full ">
        <div
          className="relative bg-cover bg-center   "
          style={{ backgroundImage: `url(${innerImage})` }}
        >
          <div className="flex justify-center items-center">
            <img src={image} alt="" className="pt-4 max-w-[100%]"   />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 py-5">
        <h6 className="text-[#1B3C74] font-medium xl:text-xl">{name}</h6>
        <p className="text-[#0183CE] font-medium text-sm ">{specialty}</p>
      </div>
    </div>
  );
};

export default SliderDoctorsCard;
