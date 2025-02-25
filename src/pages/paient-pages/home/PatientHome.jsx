import React from "react";
import PatientBanner from "../../../components/PatientBanner";
import FirstStep from "../../../components/FirstStep";
import image1 from "../../../assets/images/instant-doctor.png";
import image2 from "../../../assets/images/virtual-doctor.png";
import image3 from "../../../assets/images/customer-health.png";
import image4 from "../../../assets/images/travel-free.png";
import bone from "../../../assets/images/bone-cancer.png";
import throat from "../../../assets/images/throat-cancer.png";
import lung from "../../../assets/images/lungs-cancer.png";
import liver from "../../../assets/images/liver-cancer.png";
import CreatingWellness from "../../../components/CreatingWellnes";
import guideImage from "../../../assets/images/guiding.png";
import PatientButton from "../../../components/ui/PatientButton";

const PatientHome = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-16 xl:gap-20">
        <PatientBanner />
        <FirstStep />

        <div>
          <div className="flex flex-col gap-7 justify-center items-center">
            <h1 className=" text-center text-3xl xl:text-4xl font-bold">
              Why you should choose
              <span className="font-normal text-[#0183CE]"> Oncohub ?</span>
            </h1>
            <p className="max-w-[460px] text-center xl:text-lg font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] pt-10  xl:pt-16">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-7 justify-center items-center">
            <h1 className=" text-center text-3xl xl:text-4xl font-bold">
              Connect with the{" "}
              <span className="font-normal text-[#0183CE]">
                Right Specialist Today.
              </span>
            </h1>
            <p className="max-w-[460px] text-center xl:text-lg font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 xl:gap-3 pt-8  xl:pt-14 text-[#313A34]">
            <div className="">
              <img src={bone} alt="" />
              <p className="  text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-center">
                Bone Cancer
              </p>
            </div>
            <div>
              <img src={throat} alt="" />
              <p className="  text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-center">
                Throat Cancer
              </p>
            </div>

            <div className="">
              <img src={lung} alt="" className="" />
              <p className="  text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-center">
                Lung Cancer
              </p>
            </div>

            <div>
              <img src={liver} alt="" />
              <p className="  text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-center">
                Liver Cancer
              </p>
            </div>
          </div>
        </div>

        <div>
          <CreatingWellness />
        </div>

        <div className="flex flex-col  sm:flex-row gap-6 xl:gap-10 shadow-2xl">
          <div className="w-full ">
            <img
              src={guideImage}
              alt=""
              className="w-[100%] h-full object-cover xl:w-[90%] border-4 rounded-2xl border-slate-200"
            />
          </div>

          <div className="flex flex-col justify-between xl:py-16">
            <div className="flex flex-col gap-7 justify-center ">
              <h1 className="  text-3xl xl:text-4xl font-bold   text-center sm:text-start  xl:flex flex-col gap-2 ">
                Guiding You Through Every{" "}
                <span className="font-normal text-[#0183CE]  inline  text-center sm:text-start   border-b-0 border-b-[#0183CE] ">
                  Phase of Healing
                </span>
              </h1>
              <p className=" text-center sm:text-start xl:text-lg font-normal px-2 sm:px-0 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex  justify-center sm:justify-start items-center py-10 sm:-0">
              <PatientButton
                className="  px-6 py-2 font-medium  xl:px-9 xl:py-3 text-sm  xl:text-base"
                value={"Register Now"}
                type="button"
                onChange={() => console.log("")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHome;
