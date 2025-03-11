import React, { useState } from "react";
import { Link } from "react-router-dom";

import icon7 from "../../src/assets/icon/Logout.svg";
import { useSidebar } from "../context/SidebarContext";
import { X } from "lucide-react";
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ menuItems }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  return (
    <>
      <div
        className={`h-screen  bg-[#0183CE] text-white fixed flex flex-col p-4 transition-all duration-300 z-50
      ${isCollapsed ? "w-20  border-white" : "w-64"}
      hidden lg:flex
    `}
      >
        <button
          className="p-2 text-white bg-[#5BAAD7] rounded-md mb-5 self-end"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FiMenu size={24} />
        </button>

        <nav className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setSelectedMenuItem(index)}
                className={`flex items-center justify-center lg:justify-normal gap-3 p-3     rounded-md transition ${
                  selectedMenuItem === index
                    ? "bg-[#5BAAD7] text-white"
                    : "hover:bg-[#5BAAD7]"
                }`}
              >
                <div className="w-[26px] h-[26px] object-cover ">
                  <img
                    src={item.icon}
                    className="text-xl w-full object-cover "
                  />
                </div>

                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            ))}
          </div>

          <div>
            <div
              className={`flex items-center gap-3 p-2 rounded-md transition ${
                selectedMenuItem === null
                  ? "bg-[#5BAAD7] text-white"
                  : "hover:bg-[#5BAAD7]"
              }`}
              onClick={() => setSelectedMenuItem(null)}
            >
              <img src={icon7} alt="" width={26} />
              {!isCollapsed && (
                <span className="text-sm font-medium">Logout</span>
              )}
            </div>
          </div>
        </nav>
      </div>

      <div className="lg:hidden fixed top-0 left-0 w-full p-4 bg-[#0183CE] text-white flex justify-between items-center z-50">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <button
          className="p-2 text-white bg-[#5BAAD7] rounded-md"
          onClick={() => setIsMobileOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black  bg-opacity-50 transition-opacity duration-300 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0    h-[100%] bg-[#0183CE] text-white flex flex-col p-4 transition-transform duration-300 z-50 
        ${
          isMobileOpen ? "translate-x-0 " : "-translate-x-full"
        } lg:hidden  w-[80%] max-w-[250px]`}
      >
        <button
          className="p-1 px-2 text-white bg-[#5BAAD7] rounded-md mb-5 self-end"
          onClick={() => setIsMobileOpen(false)}
        >
          <X />
        </button>

        <nav className="flex flex-col gap-16 bg-[#0183CE] ">
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 p-2 rounded-md transition hover:bg-[#5BAAD7]"
                onClick={() => setIsMobileOpen(false)}
              >
                <img src={item.icon} className="text-xl" width={26} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          <div>
            <Link
              to="/logout"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[#5BAAD7] transition"
              onClick={() => setIsMobileOpen(false)}
            >
              <img src={icon7} alt="" width={26} />
              <span className="text-sm font-medium">Logout</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
