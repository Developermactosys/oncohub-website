import React, { useState } from "react";

const Tabs = ({ availableDates }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div className=" rounded-lg">
      <div className="flex justify-between ">
        {availableDates?.map((day, index) => (
          <button
            key={index}
            className={`px-4 py-2 flex flex-col ${
              selectedDateIndex === index
                ? "border-b-2 border-[#0183CE] font-bold "
                : "text-gray-500"
            }`}
            onClick={() => {
              setSelectedDateIndex(index);
              setSelectedSlot(null);
            }}
          >
            {day.date}{" "}
            <span className="text-xs text-[#0183CE] text-gray-400">
              ({day.slotsAvailable} Slots Available)
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-3 my-6">
        {Object.entries(availableDates[selectedDateIndex].timeSlots)?.map(
          ([timePeriod, slots]) => (
            <div key={timePeriod} className="flex items-center gap-10">
              <h3 className="text-sm font-medium  w-16 text-gray-700">
                {timePeriod}
              </h3> 
              <div className="flex flex-wrap gap-2 mt-2">
                {slots?.map((slot,i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 text-sm border border-[#0183CE] rounded-lg ${
                      selectedSlot === slot
                        ? "bg-[#0183CE] text-white"
                        : "border-[#0183CE] text-[#0183CE]"
                    }`}
                    onClick={() => handleSlotSelect(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Tabs;
