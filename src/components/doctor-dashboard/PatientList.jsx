import React from "react";
import AppointmentCard from "../ui/card/dashboard-card/AppointmentCard";
import img from "../../assets/images/more-icon.png";
import img1 from "../../assets/images/fever.png";
import img2 from "../../assets/images/cought.png";

import img3 from "../../assets/images/heart-burn.png";

const PatientList = () => {
  const appointments = [
    {
      name: "Stacy Mitchell",
      initials: "SM",
      time: "9:15 AM",
      type: "Weekly Visit",
      bgColor: "bg-pink-300",
      textColor: "text-pink-500",
      timeBg: "bg-pink-100 text-pink-600",
    },
    {
      name: "Amy Dunham",
      initials: "AD",
      time: "9:30 AM",
      type: "Routine Checkup",
      bgColor: "bg-blue-300",
      textColor: "text-blue-500",
      timeBg: "bg-blue-100 text-blue-600",
    },
    {
      name: "Demi Joan",
      initials: "DJ",
      time: "9:50 AM",
      type: "Report",
      bgColor: "bg-teal-300",
      textColor: "text-teal-500",
      timeBg: "bg-teal-100 text-teal-600",
    },
    {
      name: "Susan Myers",
      initials: "SM",
      time: "10:15 AM",
      type: "Weekly Visit",
      bgColor: "bg-pink-300",
      textColor: "text-pink-500",
      timeBg: "bg-pink-100 text-pink-600",
    },
  ];

  const medicalDetails = [
    {
      label: "Last Checked",
      value: (
        <>
          <strong>Dr Archana</strong> on 21 April 2021 Prescription{" "}
          <span className="text-primary font-semibold">#2J983KT0</span>
        </>
      ),
    },
    {
      label: "Observation",
      value: "High fever and cough at normal hemoglobin levels.",
    },
    {
      label: "Prescription",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-5 gap-6  my-5">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Patient List</h1>
          <select>
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
        </div>

        <div className="flex flex-col  gap-4  py-4 bg-gray-100">
          {appointments.map((appointment, index) => (
            <AppointmentCard key={index} {...appointment} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Consultation</h1>
          <button>
            {" "}
            <img src={img} alt="" />
          </button>
        </div>

        <div className="border rounded-2xl border-[#58B6DE80] p-4 my-4 ">
          <AppointmentCard
            name="Stacy Mitchell"
            initials="SM"
            time="9:15 AM"
            type="Male - 26 Years"
            bgColor="bg-[#12898340]"
            textColor="text-grey-200"
            timeBg="bg-pink-100 text-pink-600"
          />
          <div className="flex gap-7 border-b py-4 border-b-[#58B6DE4D]">
            <div className="">
              <img src={img1} alt="" />
              <p className="text-sm text-center font-medium">Fever</p>
            </div>
            <div>
              <img src={img2} alt="" />
              <p className="text-sm text-center font-medium">Fever</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p className="text-sm text-center font-medium">Fever</p>
            </div>
          </div>

          <div className="py-4 flex flex-col gap-4">
            {medicalDetails.map((detail, index) => (
              <div key={index} className="flex">
                <strong className="text-xs w-44">{detail.label}</strong>
                <p className="text-[#00000080] text-xs">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
