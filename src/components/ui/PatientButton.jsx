import React from "react";
import cn from "../../utils/cn";

const PatientButton = ({ value,type ,onChange, className }) => {
  return (
    <button
     type={type}
     onChange={onChange}
      className={cn(`text-white rounded-xl  bg-[#0183CE] px-5 py-[10px]`, className)}
      
    >
      {value}
    </button>
  );
};

export default PatientButton;
