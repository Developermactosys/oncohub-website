import React from "react";
import testimonials from "./const/DoctorLoveData";
import { div } from "framer-motion/client";

const DoctorLove = () => {
  const DoctorLoveCard = ({ description, doctor, hospital, specialty }) => {
    return (
      <div className="bg-white rounded-[10px] font-normal text-base p-6 sm-8 xl:p-8 shadow-lg h-full ">
        <p className="text-center">{description}</p>
        <div className="text-center mt-10 ">
          <h6 className="font-bold">{doctor}</h6>
          <h6 className="">{hospital}</h6>
          <h6 className="">{specialty}</h6>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 ">
        {testimonials.map((item) => (
          <DoctorLoveCard
            description={item.description}
            doctor={item.doctor}
            hospital={item.hospital}
            specialty={item.specialty}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorLove;
