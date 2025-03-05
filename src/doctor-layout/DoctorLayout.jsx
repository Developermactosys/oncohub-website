import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/doctor-dashboard/Navbar";
import { useSidebar } from "../context/SidebarContext";


const DoctorLayout = () => {
  const { isCollapsed } = useSidebar();

  return (
    
    <div className="">
      <Sidebar />
      <div className={`transition-all duration-300 ${isCollapsed ? "ml-0 lg:ml-20" : " lg:ml-60   "}`}>
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
