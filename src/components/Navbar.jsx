import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const location = useLocation(); // To get the current route path

  const isActive = (path) => location.pathname === path;
  return (
    <div className="container mx-auto shadow-md">
      <div className="flex items-center justify-between bg-white py-3  ">
        <div>
          <img src={logo} alt="" className="w-[100%]" />
        </div>

        <div className="hidden lg:block ">
          <ul className="flex gap-12">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/become-a-doctor", label: "Become a Doctor" },
              { path: "/contact", label: "Contact" },
             
            ].map((navItem) => (
              <li key={navItem.path} className="text-base font-medium">
                <Link
                  to={navItem.path}
                  className={`relative pb-1 ${
                    isActive(navItem.path)
                      ? "text-black after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[#0183CE] after:rounded-full"
                      : "text-gray-600"
                  }`}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
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
                <Link to={"/"} className="block  text-sm sm:text-base font-semibold">
                  Home
                </Link>
                <Link to={"/about"} className="block  text-sm sm:text-base font-semibold">
                  About
                </Link>
                <Link
                  to={"/become-a-doctor"}
                  className="block  text-sm sm:text-base font-semibold"
                >
                  Become a doctor
                </Link>
                <Link to={"/contact"} className="block  text-sm sm:text-base font-semibold">
                  Contact
                </Link>
              </nav>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="hidden lg:block">
          <ul className="flex gap-12">
            <li className="text-base font-medium">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-base font-medium">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="text-base font-medium">
              <Link to={"/become-a-doctor"}>Become a Doctor</Link>
            </li>
            <li className="text-base font-medium">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div> */
}
