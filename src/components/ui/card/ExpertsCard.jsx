import React from "react";
import { Star } from "lucide-react";

const ExpertsCard = ({ DoctorImage, name, specialist, rating }) => {
  return (
    <div className="shadow-lg">
      <div className="flex bg-[#EEF9FF]  px-6  justify-center items-center">
        <img src={DoctorImage} alt="" className="" />
      </div>
      <div className="flex flex-col gap-1 py-4 text-center">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs font-bold">{specialist}</p>
        <div className="flex justify-center items-center gap-4 ">
          <div className="flex justify-center items-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={20} fill="#FCA70E" color="white" />
            ))}
          </div>

          <p  className="text-xs font-bold">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertsCard;
