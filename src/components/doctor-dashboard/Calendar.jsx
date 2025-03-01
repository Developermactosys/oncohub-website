import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate all days for the current month view
  const generateDays = () => {
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(currentMonth);
    const startDate = startOfWeek(startMonth);
    const endDate = endOfWeek(endMonth);
    const days = [];

    let day = startDate;
    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  return (
    <div className=" bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0183CE] p-3 text-white">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <FaChevronLeft />
        </button>
        <h2 className="text-lg font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <FaChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-7 text-gray-500 text-xs p-2 border-b border-b-[#0183CE]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="text-center font-semibold">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 p-2 text-center">
        {generateDays().map((day, index) => (
          <div
            key={index}
            className={`p-2 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer 
              ${isSameMonth(day, currentMonth) ? "text-gray-700" : "text-gray-400"}
              ${isSameDay(day, selectedDate) ? "bg-[#0183CE] text-white font-bold" : "hover:bg-gray-200"}
            `}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
