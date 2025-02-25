import React from "react";
import ellispse from "../assets/images/Ellipse.png";
import PatientButton from "./ui/PatientButton";
import patient_banner_doctor from "../assets/images/patient-banner-doctor.png";

const PatientBanner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xl:gap-24 mt-9 sm:mt-12 xl:mt-16">
      <div className="order-1 sm:order-2 max-w-[100%]   ">
        <img src={patient_banner_doctor} alt="Doctor Banner" className="" />
      </div>

      <div className="order-2 sm:order-1 flex justify-center items-center ">
        <div>
          <p
            className="text-base xl:text-lg font-bold pb-3 xl:pb-5  relative bg-cover bg-center"
            style={{ backgroundImage: `url(${ellispse})` }}
          >
            STAY STRONG, LIVE LONG.
          </p>
          <h1 className=" text-3xl lg:text-4xl xl:text-5xl font-bold">
            <span className="text-[#0183CE] font-normal">Take care</span> of
            your body and it will take care of{" "}
            <span className="text-[#0183CE] font-normal">you.</span>
          </h1>

          <p className="text-base  font-normal py-5 xl:py-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <div>
            <PatientButton
              value="Get Appointment"
              type="button"
              onChange={() => console.log("")}
              className="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBanner;

// <div className="grid gird-cols-1 direction-ctl sm:grid-cols-2 gap-10">
//   <div className="">
//     <p className="text-lg font-bold xl:pb-5">STAY STRONG, LIVE LONG.</p>
//     <h1 className="text-5xl font-bold">
//       <span className="text-[#0183CE]  font-normal">Take care</span> of your body and it will take care of{" "}
//       <span className="text-[#0183CE]  font-normal"> you.</span>
//     </h1>

//     <p className="text-base font-normal xl:py-9">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco.
//     </p>
//     <div>
//       <PatientButton
//         value="Get Appointment"
//         type="button"
//         onChange={() => console.log("")}
//       />
//     </div>
//   </div>
//   <div>
//     <img src={patient_banner_doctor} alt="" />
//   </div>
// </div>
