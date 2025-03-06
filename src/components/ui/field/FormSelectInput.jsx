
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import cn from "../../../utils/cn";

const FormSelectInput = ({ options = [], placeholder = "Select", className = "" }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full max-w-full `}>
      
      <div
        className={cn( "placeholder-[#727272] mt-2 border  focus:outline-none focus:ring-2 focus:ring-[#0183CE] rounded-lg px-2 py-2 sm:px-4 sm:py-3 flex justify-between items-center cursor-pointer",className)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? "text-gray-900" : "text-gray-500"}>
          {selected || placeholder}
        </span>
        <ChevronDown size={16} className="text-gray-500" />
      </div>

      {isOpen && (
        <ul className="absolute z-10 bg-white border border-[#DBDBDB] rounded-lg mt-1 w-full shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormSelectInput;
