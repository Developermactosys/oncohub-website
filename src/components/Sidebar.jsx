import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartPie,
  FaUser,
  FaCalendarAlt,
  FaPrescriptionBottle,
  FaComments,
  FaMoneyBill,
  FaPowerOff,
} from "react-icons/fa";
import icon1 from "../../src/assets/icon/appointment.svg";
import icon2 from "../../src/assets/icon/Chat-Patient.svg";
import icon3 from "../../src/assets/icon/dashboard.svg";
import icon4 from "../../src/assets/icon/earning.svg";
import icon5 from "../../src/assets/icon/patient.svg";
import icon6 from "../../src/assets/icon/prescription.svg";
import icon7 from "../../src/assets/icon/Logout.svg";

import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [menuItems] = useState([
    { name: "Dashboard", icon: icon3, path: "/dashboard" },
    { name: "Patient List", icon: icon5, path: "/patients" },
    { name: "Appointment", icon: icon1, path: "/appointments" },
    { name: "Prescription", icon: icon6, path: "/prescriptions" },
    { name: "Chat Patient", icon: icon2, path: "/chat" },
    { name: "Earning", icon: icon4, path: "/earning" },
  ]);

  return (
    <div
      className={`h-screen bg-[#0183CE] text-white  fixed flex flex-col p-4 transition-all duration-300 ${
        isCollapsed ? "w-20 border-r-8 border-white " : "w-64 "
      }`}
    >
      <button
        className="p-2 text-white bg-[#5BAAD7] rounded-md mb-5   self-end"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FiMenu size={24} />
      </button>

      <nav className="flex flex-col gap-16 ">
        <div className="flex flex-col  gap-4 ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-md transition ${
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

        <div className="">
          <Link
            to="/logout"
            className="flex items-center gap-3 p-2  rounded-md hover:bg-[#5BAAD7] transition"
          >
            <img src={icon7} alt="" width={26} />
            {!isCollapsed && (
              <span className="text-sm font-medium">Logout</span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

// <div className="h-screen w-64 bg-[#0183CE] text-white  fixed  flex flex-col p-5">
//   <nav className="flex flex-col gap-4">
//     {menuItems.map((item, index) => (
//       <Link
//         key={index}
//         to={item.path}
//         className={`flex items-center gap-3 p-3 rounded-md transition ${
//           location.pathname === item.path ? "bg-[#5BAAD7] text-white" : "hover:bg-[#5BAAD7]"
//         }`}
//       >
//         <img src={item.icon} className="text-xl" width={26}/>
//         <span className="text-sm font-medium">{item.name}</span>
//       </Link>
//     ))}

//     <div className="mt-auto">
//       <Link
//         to="/logout"
//         className="flex items-center gap-3 p-3 rounded-md hover:bg-[#0183CE] transition"
//       >
//          <img src={icon7} alt="" className=""  width={26} />
//         <span className="text-sm font-medium">Logout</span>
//       </Link>
//     </div>
//   </nav>
// </div>
