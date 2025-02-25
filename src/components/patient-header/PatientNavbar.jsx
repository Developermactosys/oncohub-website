import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const PatientNavbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between bg-white py-3  ">
        <div>
          <img src={logo} alt="" className="w-[100%]" />
        </div>

        <div className="hidden lg:block ">
          <ul className="flex items-center gap-12">
            {[
              { path: "patient/", label: "Home" },
              { path: "patient/how-it-work", label: "How It Works" },
              { path: "patient/about", label: "About" },
              { path: "patient/our-experts", label: "Our Experts" },
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
                <Link
                  to={"/patient/how-it-work"}
                  className="block  text-sm font-semibold"
                >
                  How It Works
                </Link>
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
