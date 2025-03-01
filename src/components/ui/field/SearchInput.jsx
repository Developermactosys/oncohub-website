import React from "react";
import search from  "../../../assets/images/search.svg"

const SearchInput = ({
  placeholder = "Search",
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full   bg-[#F0EEEE] px-4 py-3 pr-10 placeholder-[#000000] bg-gray-100  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0183CE]"
      />
      <button> 
         <img  src={search} className="absolute right-3 top-1/2 transform -translate-y-1/2  " />
      </button>
    </div>
  );
};

export default SearchInput;
