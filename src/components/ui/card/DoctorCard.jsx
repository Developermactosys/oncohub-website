import React from "react";
import { MapPin, GraduationCap } from "lucide-react";
import cn from "../../../utils/cn";

const DoctorCard = ({
  image,
  name,
  specialty,
  degrees,
  location,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "bg-white shadow-xl rounded-xl  text-center  shadow-[#e7f7ff]",
        className
      )}
    >
      <div className="flex justify-center ">
        <img
          src={image}
          alt={name}
          className=" w-[90%]  object-cover"
        />
      </div>
      <div className="py-4">
        <div className="">
          <h3 className="text-lg font-semibold text-primary">{name}</h3>
          <p className="text-sm text-gray-500">{specialty}</p>
        </div>

        <div className="flex items-center justify-center gap-5 text-primary text-xs my-2">
          <GraduationCap size={14} />
          <p>{degrees}</p>
        </div>

        <div className="flex items-center justify-center gap-1 text-primary text-xs">
          <MapPin size={14} />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
