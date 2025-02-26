import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const PatientNavbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  console.log(location.pathname)

  const navItems = [
    { path: "/patient/home", label: "Home" },
    {
      path: "/*",
      label: "How It Works",
      submenu: [
        { path: "/patient/cancer-support", label: "Cancer Support" },
        { path: "/patient/cancer-fighter", label: "Cancer Fighter" },
        { path: "/patient/cancer-food", label: "Cancer Food" },
      ],
    },
    { path: "/patient/about", label: "About" },
    { path: "/patient/our-experts", label: "Our Experts" },
  ];


  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between  py-3  ">
        <div>
          <img src={logo} alt="" className="w-[100%]" />
        </div>

        <div className="hidden lg:block ">
       
          <ul className="space-y-2 flex items-center gap-12 ">
            {navItems.map((navItem, index) =>
              navItem.submenu ? (
                <li key={index} className="relative">
                  <Link>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-base font-medium pb-1 text-gray-600 hover:text-[#0183CE]"
                  >
                    {navItem.label}
                  </button>
                  </Link>
               
                  {dropdownOpen && (
                    <ul className="absolute  left-0 mt-2 bg-white shadow-xl rounded-md border border-[#C4D2F1] w-40">
                      {navItem.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className=" last:border-0 border-b-[#C4D2F1]">
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#0183CE]"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index} className="text-base font-medium">
                  <Link
                    to={navItem.path}
                    className={`relative pb-1 ${
                      isActive(navItem.path)
                        ? "text-[#0183CE]  after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[#0183CE] after:rounded-full"
                        : "text-gray-600"
                    }`}
                  >
                    {navItem.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <button className="block px-6 py-2 text-white rounded-full bg-[#0183CE] hover:bg-gray-100 hover:text-[#0183CE]  hover:bg-white  text-base font-medium">Login</button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <div className="relative">
            <button
              onClick={() => setMenuClicked(true)}
              className="p-2  rounded-md"
            >
              <Menu size={24} />
            </button>

            {menuClicked && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setMenuClicked(false)}
              ></div>
            )}

            <motion.div
              initial={{ x: -250 }}
              animate={{ x: menuClicked ? 0 : -250 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 -left-4 h-full w-64 bg-white shadow-lg z-50 "
            >
              <button
                onClick={() => setMenuClicked(false)}
                className="absolute top-4 right-4"
              >
                <X size={24} />
              </button>

              <nav className="mt-10 px-10 space-y-4 ">
                <Link to={"patient/"} className="block  text-sm font-semibold">
                  Home
                </Link>
                <Link
                  to={"/patient/about "}
                  className="block  text-sm font-semibold"
                >
                  About
                </Link>
                <div className="relative inline-block">
                  <Link>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="block  text-sm font-semibold"
                    >
                      How It Works
                    </button>
                  </Link>

                  {isOpen && (
                    <div className="absolute left-0 mt-2  w-48 bg-white border rounded-lg shadow-lg">
                      <Link
                        to="/cancer-support"
                        className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-100"
                      >
                        Cancer Support
                      </Link>
                      <Link
                        to="/cancer-fighter"
                        className="block px-4 py-2 text-black border-t hover:bg-gray-100"
                      >
                        Cancer Fighter
                      </Link>
                      <Link
                        to="/cancer-food"
                        className="block px-4 py-2 text-black border-t hover:bg-gray-100"
                      >
                        Cancer Food
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to={"patient/our-experts"}
                  className="block  text-sm font-semibold"
                >
                  Our Experts
                </Link>
              </nav>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientNavbar;


   {/* <ul className="flex items-center gap-12">
            {[
              { path: "/patient/home", label: "Home" },
              { path: "/patient/how-it-work", label: "How It Works",
                submenu: [
                  { path: "/patient/cancer-support", label: "Cancer Support" },
                  { path: "/patient/cancer-fighter", label: "Cancer Fighter" },
                  { path: "/patient/cancer-food", label: "Cancer Food" },
                ],
               },
              { path: "/patient/about", label: "About" },
              { path: "/patient/our-experts", label: "Our Experts" },
            ].map((navItem) => (
              <>
                <li key={navItem.path} className="text-base font-medium">
                  <Link
                    to={navItem.path}
                    className={`relative pb-1 ${
                      isActive(navItem.path)
                        ? " after:absolute text-[#0183CE] after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[#0183CE] after:rounded-full"
                        : "text-gray-600"
                    }`}
                  >
                    {navItem.label}
                  </Link>
                </li>
              </>
            ))}
            <li>
              <button className="text-[#FFFFFF] rounded-[10px] text-base font-medium bg-[#0183CE] px-7 py-2">
                Login
              </button>
            </li>
          </ul> */}
