import React from "react";
import fuelbodimage from "../assets/images/fuelYourBody.jpg";
import PatientButton from "./ui/PatientButton";

const FuelYourBody = () => {
  return (
    <div className=" py-6 sm:py-10 xl:py-8">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10   lg:gap-16 ">
        <div>
          <img
            src={fuelbodimage}
            alt=""
            className="h-full xl:h-auto object-cover "
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <PatientButton
              className="  text-sm xl:text-base py-1.5 px-3 xl:py-2 font-medium"
              type={"button"}
              value={"Cancer - Fighting Foods"}
              onChange={() => console.log("")}
            />
            <h1 className="  text-3xl sm:text-2xl  xl:text-4xl font-bold py-5  xl:py-7 xl:pr-20  ">
              Fuel your body with foods that {"  "}
              <span className="font-normal border-b-2 border-b-[#0183CE] text-[#0183CE]">
                fight cancer{" "}
              </span>
              and promote longevity.
            </h1>
            <p className="font-normal text-base xl:text-lg pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div>
            <PatientButton
              className=" px-5 py-2 text-sm xl:text-base   xl:px-9 xl:py-3 font-medium"
              type={"button"}
              value={"Read More"}
              onChange={() => console.log("")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelYourBody;
