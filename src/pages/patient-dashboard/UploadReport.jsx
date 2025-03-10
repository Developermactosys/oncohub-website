import React, { useState } from "react";
import FormInput from "../../components/ui/field/FormInput";
import search_icon from "../../assets/images/search-icon.png";
import Label from "../../components/ui/field/Label";
import SelectFormInput from "../../components/ui/field/FormSelectInput";
import PatientButton from "../../components/ui/PatientButton";
import UploadInput from "../../components/ui/field/UploadInput";
import { FaPlus } from "react-icons/fa";
import profile_boy from "../../assets/images/profile-boy.png"

const CustomButton = ({ label, variant = "filled", onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border transition-all
        ${
          variant === "filled"
            ? "bg-primary text-white border-primary hover:bg-primary"
            : "bg-white text-primary border-primary hover:bg-blue-100"
        }
      `}
    >
      <span className="text-sm"> {icon}</span>

      {label}
    </button>
  );
};

const UploadReport = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold py-3">Log New Consultion</h1>
      <div className="flex flex-col-reverse xl:flex-row gap-5  sm:gap-6">
      
        <div className="pt-5 xl:pt-0">
          <div className="flex flex-col gap-4 sm:gap-9">
            <div className="flex  flex-col sm:flex-row gap-5  sm:gap-10  ">
              <div className="w-full">
                <Label name={"Healthcare Provider"} className="text-black text-base " />
                <div className=" relative">
                  <FormInput
                    type="text"
                    placeholder={"Dr. Archana  Mahadaven"}
                    className="placeholder-[#727272] border border-[#B6B6B6]"
                  />
                  <div className="absolute right-5 top-5 ">
                    <img src={search_icon} alt="df" />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Label name={"Consultation Type"} className="text-black  text-base" />
                <div className=" relative ">
                  <SelectFormInput
                    options={["option1", "option2"]}
                    className="placeholder-[#727272] border-[#B6B6B6]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5  sm:gap-10">
              <div className="w-full">
                <Label name={"Patient Name"} className="text-black  text-base" />
                <div className="flex relative">
                  <FormInput
                    type="text"
                    placeholder={"Dr. Archana  Mahadaven"}
                    className="placeholder-[#727272] border border-[#B6B6B6]"
                  />
                  <div className="absolute right-5 top-5 ">
                    <img src={search_icon} alt="df" />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Label name={"Location"} className="text-black  text-base" />
                <div className=" relative ">
                  <SelectFormInput
                    options={["option1", "option2"]}
                    className="placeholder-[#727272] border-[#B6B6B6]"
                  />
                </div>
              </div>
            </div>
            <div className="flex   flex-col sm:flex-row gap-10 ">
              <div className="w-full">
                <Label name={"Healthcare Provider"} className="text-black  text-base" />
                <div className="flex relative">
                  <FormInput
                    type="date"
                    placeholder={"Dr. Archana  Mahadaven"}
                    className="placeholder-[#727272] border border-[#B6B6B6]"
                  />
                </div>
              </div>
              <div className="w-full">
                <Label name={"Date Of Consultation"} className="text-black  text-base" />
                <div className="flex relative">
                  <FormInput
                    type="date"
                    placeholder={"Dr. Archana  Mahadaven"}
                    className="placeholder-[#727272] text-[placeholder-[#727272]] border border-[#B6B6B6]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 my-6">
            <div>
              <h4 className="text-base font-semibold">
                Reason For Consultation
              </h4>
              <div className="p-5  mt-2 rounded-md text-[#727272] border border-[#B6B6B6] text-sm font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold">Review Notes </h4>
              <div className="p-5  mt-2 rounded-md text-[#727272] border border-[#B6B6B6] text-sm font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
              <div>
                <input
                  type="checkbox"
                  aria-colcount={"#7A6FFA"}
                  color="#7A6FFA"
                />{" "}
                <span className="text-sm font-normal">Review Notes</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3">
              Add Attachment (Optional)
            </h3>

            <UploadInput />
          </div>
          <div className="flex flex-wrap text-sm gap-4 mt-7 sm:mt-7">
            <CustomButton
              label="Add Medicine"
              variant="filled"
              icon={<FaPlus />}
            />
            <CustomButton
              label="Add Test"
              variant="outlined"
              icon={<FaPlus />}
            />
            <CustomButton
              label="Set Monitoring Plan"
              variant="filled"
              icon={<FaPlus />}
            />
            <CustomButton
              label="Set Next Appointment"
              variant="outlined"
              icon={<FaPlus />}
            />
            <CustomButton
              label="Set Goals"
              variant="outlined"
              icon={<FaPlus />}
            />
          </div>
        </div>
        <div className="sm:w-[100%]  xl:w-[40%]">
          <div className="xl:max-w-xl  bg-white shadow-lg rounded-xl p-3 sm:p-6 ">
            <div className="flex flex-col items-center">
              <img
                src={profile_boy}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <h3 className="text-base font-bold mt-3">Mr. Prakash Pathak</h3>
              <p className="text-sm text-[#727272]">26 Years, Male</p>
            </div>

            
            <div className="mt-5 space-y-3 text-sm text-gray-700">
              <p >
                <strong>Email:</strong> <span className="text-[#727272]"> prakash123@gmail.com</span>
              </p>
              <p>
                <strong>Phone:</strong>  <span className="text-[#727272]"> +91 1234567890</span>
              </p>
              <p >
                <strong>Date of Birth:</strong>  <span className="text-[#727272]">14 Feb 2002</span> 
              </p>
              <p >
                <strong>Diseases:</strong>  <span className="text-[#727272]"> Cancer</span>
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="p-3 bg-red-100 rounded-lg shadow-lg">
                <h4 className="text-[#FC5363] font-semibold text-sm">
                  Blood Pressure
                </h4>
                <p className="text-xs text-[#FC5363] mt-2">35%</p>
                <div className="w-full bg-[#FEEEEF] h-1.5 rounded">
                  <div className="bg-[#FC5363] h-1.5 rounded w-[35%]"></div>
                </div>
              
                <p className="text-xs font-bold text-[#FC5363] mt-3">140/90 mmHg</p>
              </div>

              <div className="p-3 bg-[#F2F1FF] rounded-lg shadow-lg">
                <h4 className="text-[#796DFF] font-semibold text-sm">
                  Body Temperature
                </h4>
                <p className="text-xs text-[#796DFF] mt-1">15%</p>
                <div className="w-full bg-[#D7D2FF] h-1.5 rounded">
                  <div className="bg-[#796DFF] h-1.5 rounded w-[15%]"></div>
                </div>
              
                <p className="text-xs font-bold text-[#796DFF] mt-3">140/90 mmHg</p>
              </div>

              <div className="p-3 bg-[#0183CE1F] rounded-lg shadow-lg">
                <h4 className="text-[#0183CE] font-semibold text-sm">
                  Body Weight
                </h4>
               <p className="text-xs text-[#0183CE] mt-1">50%</p>
                <div className="w-full bg-[#C0E1F4] h-1.5 rounded">
                  <div className="bg-[#0183CE] h-1.5 rounded w-[50%]"></div>
                </div>
             
                <p className="text-xs font-bold text-[#0183CE] mt-3">78Kg</p>
              </div>

              <div className="p-3 bg-[#FFF9E9] rounded-lg shadow-lg">
                <h4 className="text-[#FFAA00] font-semibold text-sm">
                  Body Height
                </h4>
                <p className="text-xs text-[#FFAA00] mt-1">35%</p>
                <div className="w-full bg-orange-200 h-1.5 rounded">
                  <div className="bg-[#FFAA00] h-1.5 rounded w-[35%]"></div>
                </div>
      
                <p className="text-xs font-bold text-[#FFAA00] mt-3">5.6" Inch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadReport;
