// import { div } from "framer-motion/client";
// import React from "react";
// import innerImage from "../../../assets/images/image-inner.png";
// import cn from "../../../utils/cn";

// const SliderDoctorsCard = ({ image, name, specialty, className = "" }) => {
//   return (
//     <div className={cn("flex flex-col items-center", className)}>
//       <div
//         className="relative w-[230px] h-[230px] lg:w-[290px] lg:h-[300px] flex justify-center items-center rounded-t-full overflow-hidden shadow-lg"
//         style={{
//           backgroundImage: `url(${innerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <img
//           src={image}
//           alt={name}
//           className="max-w-[100%] h-[90%]  absolute bottom-0  object-cover"
//         />
//       </div>

//       <div className="flex flex-col items-center gap-2 py-4">
//         <h6 className="text-[#1B3C74] font-semibold text-lg lg:text-xl text-center">
//           {name}
//         </h6>
//         <p className="text-[#0183CE] font-medium text-sm lg:text-base">
//           {specialty}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SliderDoctorsCard;

import React, { useState } from "react";
import innerImage from "../../../assets/images/image-inner.png";
import cn from "../../../utils/cn";

const SliderDoctorsCard = ({ image, name, specialty, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("flex flex-col items-center relative group", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
          className="max-w-[100%] h-[90%] absolute bottom-0 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-500 transform ${
            hovered
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <button className="bg-white text-[#0183CE] font-semibold px-3 py-1 text-[14px] rounded-md shadow-lg">
            See Details
          </button>
        </div>
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
