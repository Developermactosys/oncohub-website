import React from "react";
import user from "../assets/images/patientlistimg2.png";
import pastAppointments from "./const/PastAppointmentsData";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-[#f3f3f3] shadow-lg rounded-lg p-5 w-full">
      <h2 className="text-base  font-semibold">{appointment.title}</h2>
      <p className="text-sm font-normal mt-2">{appointment.description}</p>

      <div className="mt-4 ">
        <div className="grid grid-cols-3 text-sm font-semibold text-gray-800 pb-2 ">
          {appointment.details.map((detail, index) => (
            <p key={index} className="text-center font-bold">
              {detail.label}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-3 text-sm text-gray-600 py-2">
          {appointment.details.map((detail, index) => (
            <p key={index} className="text-center">
              {detail.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
const DashBoardPatientDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className=" flex flex-col gap-4">
        <div className="border border-[#0183CE80] rounded-[10px] px-9 py-5">
          <div className="flex flex-col   items-center justify-center">
            <div className="w-16 h-16  border border-primary overflow-hidden rounded-full mb-2 ">
              <img src={user} alt="" className="w-full h-full object-cover  " />
            </div>
            <p className="text-sm font-bold text-center">Aarav</p>
          </div>
          <div className="flex flex-col justify-center items-center py-3">
            <div className="flex items-center text-sm">
              <p className=" font-semibold">Patient ID :</p>
              <span className=" font-normal">#DOC1230</span>
            </div>
            <div className="flex items-center text-sm">
              <p className=" font-semibold">Address :</p>
              <span className="font-normal">Madhya-Pradesh</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-r-2 border-r-[#0183CE80] px-9">
              <h1 className="text-2xl font-semibold text-center">14</h1>
              <p className="text-lg font-normal">Appointment</p>
            </div>
            <div className=" px-9">
              <h1 className="text-2xl font-semibold text-center">12</h1>
              <p className="text-lg font-normal">Complete</p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5">
            <button className="px-8 py-2 bg-primary text-white rounded-lg">
              Manage Patient{" "}
            </button>
          </div>
        </div>

        <div className="border border-[#0183CE80] rounded-[10px] px-9 py-5">
          <h1 className="text-xl font-semibold pb-6">Patient Information</h1>
          <div className="grid grid-cols-2 gap-3">
            <p className="text-sm font-bold">Weight :</p>
            <span className="text-sm">50Kg</span>
            <p className="text-sm font-bold">Height :</p>
            <span className="text-sm">4.5 M</span>
            <p className="text-sm font-bold">Blood Type :</p>
            <span className="text-sm">O+ (positive)</span>
            <p className="text-sm font-bold">Blood Glucos :</p>
            <span className="text-sm">2017 mg/dl</span>
            <p className="text-sm font-bold">Blood Pressure : </p>
            <span className="text-sm">124/79 mmHd</span>
            <p className="text-sm font-bold">Disease : </p>
            <span className="text-sm">Cancer ll</span>
          </div>
        </div>
      </div>
      <div className="border border-[#0183CE80] p-5  rounded-lg ">
        <h1 className="pb-5 text-xl font-semibold">Past Notes Appointment</h1>
        <div className="grid grid-cols-1 gap-6">
          {pastAppointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoardPatientDetail;
