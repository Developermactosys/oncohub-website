import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/doctor-dashboard/Navbar";

const DoctorLayout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="ml-64">
        <div className="container mx-auto">
          <div className="py-5 bg-gray-100 rounded-lg bg-white  rounded-l-2xl ">
            <Navbar />
            <div className="py-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLayout;
