import React from "react";

const DashboardPatientListCard = ({ patient }) => {
  return (
    <div className="bg-white  shadow-lg border border-[#0183CE80] rounded-lg p-5  ">
      <div className="">
        <img
          src={patient.image}
          alt={patient.name}
          className="w-16 h-16 rounded-full object-cover "
        />
      </div>

      <h2 className="mt-3 text-sm font-bold">{patient.name}</h2>
      <p className="font-normal text-sm">{patient.doctor}</p>

      <div className="my-4 text-[13px] font-normal flex flex-col gap-2">
        <div className="flex justify-between ">
          <span>Weight</span>
          <span>{patient.weight}</span>
        </div>
        <div className="flex justify-between">
          <span>Blood Pressure</span>
          <span>{patient.bloodPressure}</span>
        </div>
        <div className="flex justify-between">
          <span>Disease</span>
          <span>{patient.disease}</span>
        </div>
      </div>

      <button className=" bg-primary text-white py-2 px-4 rounded-lg w-full text-sm font-semibold hover:bg-primary">
        View Patient Detail
      </button>
    </div>
  );
};

export default DashboardPatientListCard;
