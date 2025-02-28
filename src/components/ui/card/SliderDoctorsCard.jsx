import { div } from "framer-motion/client";
import React from "react";
import innerImage from "../../../assets/images/image-inner.png";
import cn from "../../../utils/cn";

const SliderDoctorsCard = ({ image, name, specialty, className = "" }) => {
  return (
    // <div className={cn('',className)}>
    //     <div
    //       className="relative bg-cover bg-center shadow-xl  "
    //       style={{ backgroundImage: `url(${innerImage})`}}
    //     >
    //       <div className="flex justify-center  items-center ">
    //         <img src={image} alt="" className="pt-4 max-w-[100%] "   />
    //       </div>
    //     </div>
    //   <div className="flex flex-col justify-center items-center gap-2 py-5">
    //     <h6 className="text-[#1B3C74] font-medium xl:text-xl">{name}</h6>
    //     <p className="text-[#0183CE] font-medium text-sm ">{specialty}</p>
    //   </div>
    // </div>

    <div className={cn("flex flex-col items-center", className)}>
      <div
        className="relative w-[230px] h-[230px] lg:w-[290px] lg:h-[300px] flex justify-center items-center rounded-t-full overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${innerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={image}
          alt={name}
          className="max-w-[100%] h-[90%]  absolute bottom-0  object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-2 py-4">
        <h6 className="text-[#1B3C74] font-semibold text-lg lg:text-xl text-center">
          {name}
        </h6>
        <p className="text-[#0183CE] font-medium text-sm lg:text-base">
          {specialty}
        </p>
      </div>
    </div>
  );
};

export default SliderDoctorsCard;
