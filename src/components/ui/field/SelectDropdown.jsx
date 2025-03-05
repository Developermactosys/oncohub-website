import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; 
import cn from "../../../utils/cn";

const SelectDropdown = ({ options, selected, onSelect ,className}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("relative ",className)}>
 
      <button
        className="w-full px-3 py-2 border text-xs border-[#0183CE] text-[#0183CE] font-semibold rounded-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected} <FiChevronDown />
      </button>

      {isOpen && (
        <div className="absolute mt-1 text-xs w-full bg-white border overflow-hidden border-[#0183CE80] border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full  text-left px-4 py-2 hover:bg-blue-100 border-b border-b-[#0183CE80]"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
