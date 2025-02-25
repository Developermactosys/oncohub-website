import React from "react";
import logo from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#0183CE] py-5 xl:py-2 flex flex-col xl:flex-row gap-10 justify-between items-center px-12 xl:mt-20 mt-16  ">
      <div>
        <img src={logo} alt="" className="max-w-72 object-cover " />
      </div>
      <div>
        <ul className="flex flex-col xl:flex-row gap-5 xl:gap-16">
          <li className="text-base font-normal text-white">
            Teams and conditions
          </li>
          <li className="text-base font-normal text-white">About Us</li>
          <li className="text-base font-normal text-white">
            © 2024 Oncohub.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
