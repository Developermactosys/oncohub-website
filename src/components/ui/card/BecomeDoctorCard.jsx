import React from "react";

const BecomeDoctorCard = ({ image, subtitle, title,isClicked,onClick }) => {
  return (
    <div 
    onClick={onClick}
    className={`px-3 h-full rounded-lg lg:px-5 xl:px-3 shadow-xl pb-9 pt-7 border border-slate-200 transition-all  duration-300 ease-in-out transform ${
      isClicked 
        ? "bg-primary text-white shadow-lg scale-105 transition-transform duration-300 ease-in-out" 
        : "bg-white hover:shadow-md hover:scale-100"
    }`}
      >
      <div className="  ">
        <div className="flex justify-center items-center  mb-6 ">
          <img src={image} alt=""
           className={`rounded-full h-16 w-16 p-4 object-cover transition-transform duration-300 ease-in-out ${
            isClicked ? " bg-white" : "bg-[#0183CE] "
          }`}
           />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-base  lg:text-lg xl:text-base font-medium text-center">{title}</h4>
          <p 
           className={`text-sm   text-center ${
            isClicked ? " text-white" : "text-darkGray "
          }`}
          >{subtitle}</p>
        </div>
      </div>
    </div>    
  );
};

export default BecomeDoctorCard;
