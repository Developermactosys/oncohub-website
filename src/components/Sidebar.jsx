import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import icon7 from "../../src/assets/icon/Logout.svg";
import { useSidebar } from "../context/SidebarContext";
import { X } from "lucide-react";
import { FiMenu } from "react-icons/fi";

const Sidebar = ({menuItems}) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isCollapsed, setIsCollapsed } = useSidebar();


  // const [menuItems] = useState([
  //   { name: "Dashboard", icon: icon3, path: "/dashboard" },
  //   { name: "Patient List", icon: icon5, path: "/patients" },
  //   { name: "Appointment", icon: icon1, path: "/appointments" },
  //   { name: "Prescription", icon: icon6, path: "/prescriptions" },
  //   { name: "Chat Patient", icon: icon2, path: "/chat" },
  //   { name: "Earning", icon: icon4, path: "/earning" },
  // ]);

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
                className={`flex items-center justify-center lg:justify-normal gap-3 p-2 rounded-md transition ${
                  location.pathname === item.path
                    ? "bg-[#5BAAD7] text-white"
                    : "hover:bg-[#5BAAD7]"
                }`}
              >
                <img src={item.icon} className="text-xl" width={26} />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            ))}
          </div>

          <div>
            <Link
              to="/logout"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[#5BAAD7] transition"
            >
              <img src={icon7} alt="" width={26} />
              {!isCollapsed && (
                <span className="text-sm font-medium">Logout</span>
              )}
            </Link>
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

// <div
//   className={`h-screen bg-[#0183CE] text-white  fixed flex flex-col p-4 transition-all duration-300 ${
//     isCollapsed ? "w-20 border-r-8 border-white " : "w-64 "
//   }`}
// >
//   <button
//     className="p-2 text-white bg-[#5BAAD7] rounded-md mb-5   self-end"
//     onClick={() => setIsCollapsed(!isCollapsed)}
//   >
//     <FiMenu size={24} />
//   </button>

//   <nav className="flex flex-col gap-16 ">
//     <div className="flex flex-col  gap-4 ">
//       {menuItems.map((item, index) => (
//         <Link
//           key={index}
//           to={item.path}
//           className={`flex items-center gap-3 p-2 rounded-md transition ${
//             location.pathname === item.path
//               ? "bg-[#5BAAD7] text-white"
//               : "hover:bg-[#5BAAD7]"
//           }`}
//         >
//           <img src={item.icon} className="text-xl" width={26} />
//           {!isCollapsed && (
//             <span className="text-sm font-medium">{item.name}</span>
//           )}
//         </Link>
//       ))}
//     </div>

//     <div className="">
//       <Link
//         to="/logout"
//         className="flex items-center gap-3 p-2  rounded-md hover:bg-[#5BAAD7] transition"
//       >
//         <img src={icon7} alt="" width={26} />
//         {!isCollapsed && (
//           <span className="text-sm font-medium">Logout</span>
//         )}
//       </Link>
//     </div>
//   </nav>
// </div>
