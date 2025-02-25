import React from "react";
import wellness from "../assets/images/wellness-image.png";
import cancerSupport from "../assets/images/cancer-support.png";
import PatientButton from "./ui/PatientButton";
import FuelYourBody from "./FuelYourBody";

const CreatingWellness = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:gap-4 xl:gap-7 justify-center items-center xl:pb-10">
        <h1 className=" text-center text-3xl xl:text-4xl font-bold">
          Creating <span className="font-normal text-[#0183CE]">Wellness</span>{" "}
          Together.
        </h1>
        <p className="max-w-[460px] text-center xl:text-lg font-normal ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>

      <div className=" py-6 sm:py-10 xl:py-8">
        <div className=" grid grid-cols-1  sm:grid-cols-2 gap-8 sm:gap-10   lg:gap-16 ">
          <div>
            <img src={wellness} alt="" className="sm:h-full  object-cover " />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <PatientButton
                className="  text-sm xl:text-base py-1.5 px-3 xl:py-2 font-medium"
                type={"button"}
                value={"Popular in Cancer Support"}
                onChange={() => console.log("")}
              />
              <h1 className="  text-3xl sm:text-2xl  xl:text-4xl font-bold py-5  xl:py-7 xl:pr-20  xl:flex flex-col gap-2">
                How to cope with {""}
                <span className="font-normal border-b-0 border-b-[#0183CE] text-[#0183CE]">
                  Chemotherapy Fatigue.
                </span>{" "}
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

      <div className="py-6 sm:py-10 xl:py-8">
        <div className=" flex  flex-col-reverse sm:flex-row   sm:grid-cols-2 gap-8 sm:gap-10   lg:gap-16 ">
          <div className="flex flex-col justify-between">
            <div>
              <PatientButton
                className="text-sm xl:text-base py-1.5 px-2.5 xl:py-2  font-medium"
                type={"button"}
                value={"Supportive Reads for Cancer Fighters"}
                onChange={() => console.log("")}
              />
              <h1 className="text-3xl sm:text-2xl  xl:text-4xl font-bold py-5 xl:py-7  ">
                Popular in{" "}
                <span className="font-normal border-b-2  border-b-[#0183CE] text-[#0183CE]">
                  cancer support .
                </span>
              </h1>
              <p className="font-normal text-base xl:text-lg sm:max-w-[464px] pb-5 sm:pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eiusmod tempor incididunt ut
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
          <div className="sm:flex sm:justify-end">
            <img
              src={cancerSupport}
              alt=""
              className="sm:max-w-[85%] object-cover"
            />
          </div>
        </div>
      </div>

      <div>
        <FuelYourBody />
      </div>
    </div>
  );
};

export default CreatingWellness;
