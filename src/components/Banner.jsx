import React from "react";
import baanersidrimage from "../assets/images/hro-doctor.png";
import bgImage from "../assets/images/hero-bg.png";
import Button from "./ui/button/Button";
import cn from "../utils/cn";

const Banner = ({ title = "", subtitle = "", className = "" }) => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          <div className="flex items-center pt-10 sm:pt-0">
            <div>
              <h1 className="text-2xl font-medium text-white sm:text-3xl xl:text-[44px] xl:leading-[65px]">
                {title}
              </h1>
              <p className="text-sm lg:text-base  font-normal text-white py-5 xl:py-8 xl:text-xl">
                {subtitle}
              </p>
              <div>
                <Button
                  children={"Sign Up"}
                  className="text-sm px-3 py-2 xl:text-[22px]  xl:px-9 xl:py-3"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img
              src={baanersidrimage}
              alt=""
              className={cn(`w-full max-w-lg`, className)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
