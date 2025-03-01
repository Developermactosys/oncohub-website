import React from "react";
import cn from "../../../../utils/cn";

const DashboardCards = ({ icon, value, label, bgColor, className = "" }) => {
  return (
    <div
      className={cn(
        `px-5 py-8 ${bgColor} rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-4 h-full`,
        className
      )}
    >
      {/* <div className="bg-white bg-opacity-20 p-3 rounded-full"> */}
      <img src={icon} alt="" className="" />
      {/* </div> */}
      <div>
        <h2 className="text-white text-2xl font-bold">{value}</h2>
        <p className="text-white text-sm">{label}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
