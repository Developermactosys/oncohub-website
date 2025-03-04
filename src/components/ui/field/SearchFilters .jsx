import React from "react";

const SearchFilters = () => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  gap-2 items-center   rounded-md ">
      <select
        a
        className=" text-sm lg:text-base font-semibold  p-2 border border-primary rounded-md   focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-700"
      >
        <option> Location1</option>
        <option> Location2</option>
        <option> Location3</option>
      </select>

      <select className="   text-sm lg:text-base p-2 border placeholder-[#27476085] border-primary rounded-md focus:outline-none bg-white text-gray-700">
        <option> Department1</option>
        <option> Department1</option>
        <option> Department3</option>
      </select>

      <select
        color="#27476085"
        className="   text-sm lg:text-base p-2 border placeholder-[#27476085] focus:outline-none border-primary rounded-md  bg-white text-gray-700"
      >
        <option className="">Doctor1</option>
        <option className="">Doctor2</option>
        <option className="">Doctor3</option>
        <option className="">Doctor4</option>
      </select>
      <div className="w-full">
      
        <button className="px-3 border-primary border py-2 w-full sm:w-20 xl:w-full text-sm lg:text-base  placeholder-[#27476085] bg-white text-primary font-semibold rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
