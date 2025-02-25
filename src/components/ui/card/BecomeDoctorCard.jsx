import React from "react";

const BecomeDoctorCard = ({ image, subtitle, title,isClicked,onClick }) => {
  return (
    <div onClick={onClick}  className={`px-3 h-full lg:px-5 xl:px-3 shadow-xl pb-9 pt-7 border border-slate-200 transition-all ${
      isClicked ? "bg-primary text-white" : "bg-white"
    }`}>
      <div className="  ">
        <div className="flex justify-center items-center  mb-6 ">
          <img src={image} alt="" className="bg-[#0183CE] rounded-full p-4" />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-base  lg:text-lg xl:text-base font-medium text-center">{title}</h4>
          <p className="text-sm  text-darkGray text-center">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default BecomeDoctorCard;
