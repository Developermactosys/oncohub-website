import React from "react";
import cn from  "../../../utils/cn"

const AboutCard = ({ data, className = "" }) => {
  return (
    <div className="mt-12 xl:mt-0 rounded-[20px] overflow-hidden shadow-lg">
      <div className="bg-cover bg-center bg-no-repeat bg-gradient-to-t from-[#71B4DA66] to-[#3DA6E399] ">
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5  gap-10 xl:gap-6 px-10 py-12 xl:px-16 xl:py-20 ",
            className
          )}
        >
          {data.map((healthcare, index) => (
            <div key={index} className="text-center ">
              <h1 className="text-[#274760] font-bold text-3xl xl:text-[40px] pb-4 xl:pb-2">
                {healthcare.value}
              </h1>
              <p className="text-[#274760] font-medium text-base">
                {healthcare.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
