import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-lg overflow-hidden shadow-md"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center w-full p-2.5 xl:p-4 text-white font-semibold text-base xl:text-lg transition-all duration-300 ${
              openIndex === index ? "bg-[#2e99d3]" : "bg-[#0183CE]"
            }`}
          >
            {item.question}
            {openIndex === index ? (
              <FaMinus className="text-white" />
            ) : (
              <FaPlus className="text-white" />
            )}
          </button>

          <div
            className={`transition-all ease-in overflow-hidden duration-300 ${
              openIndex === index
                ? "max-h-96 p-4 text-[#4b4b4b] bg-white text-gray-700"
                : "max-h-0 text-[#4b4b4b]"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
