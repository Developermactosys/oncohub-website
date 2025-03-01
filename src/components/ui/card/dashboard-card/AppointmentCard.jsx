import React from "react";

const AppointmentCard = ({ name, initials, time, type, bgColor, textColor, timeBg }) => {
  return (
    <div className="flex justify-between items-center  p-3 bg-white rounded-lg shadow-md ">
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${bgColor}`}>
          {initials}
        </div>
        <div>
          <h2 className="text-gray-900 font-semibold">{name}</h2>
          <p className={`text-sm ${textColor}`}>{type}</p>
        </div>
      </div>

      {/* Time Section */}
      <span className={`px-3 py-1 text-xs font-bold rounded-full ${timeBg}`}>
        {time}
      </span>
    </div>
  );
};

export default AppointmentCard;
