import React, { useState } from "react";

const SearchFilter = () => {
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 my-10  p-3 rounded-md">
      {/* Location Dropdown */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-[250px] h-14 ring-2 focus:ring-[#0183CE] px-4 py-2 bg-white text-gray-700 rounded-md focus:outline-none focus:ring-2"
      >
        <option value="">Select Location</option>
        <option value="new-york">New York</option>
        <option value="boston">Boston</option>
        <option value="chicago">Chicago</option>
      </select>

      {/* Department Dropdown */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="w-[250px] h-14 ring-2 focus:ring-[#0183CE] px-4 py-2 bg-white text-gray-700 rounded-md focus:outline-none focus:ring-2 "
      >
        <option value="">Select Department</option>
        <option value="cardiology">Cardiology</option>
        <option value="neurology">Neurology</option>
        <option value="pediatrics">Pediatrics</option>
      </select>

      {/* Doctor Dropdown */}
      <select
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        className="w-[250px] h-14 ring-2 focus:ring-[#0183CE] px-4 py-2 bg-white text-gray-700 rounded-md focus:outline-none focus:ring-2"
      >
        <option value="">Select Doctor</option>
        <option value="dr-aaron">Dr. Aaron Bemis</option>
        <option value="dr-emily">Dr. Emily Johnson</option>
        <option value="dr-nicholas">Dr. Nicholas Fox</option>
      </select>

      {/* Search Button */}
      <button className="px-9 py-4 bg-[#0183CE] text-white font-medium rounded-md hover:bg-[#379eda] transition">
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
