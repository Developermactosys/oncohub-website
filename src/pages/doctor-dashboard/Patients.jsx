import React from "react";
import DashboardPatientListCard from "../../components/ui/card/dashboard-card/DashboardPatientListCard";
import patients from "../../components/const/DashBoardPatientData";
import download from "../../assets/icon/download.svg";
import filter from "../../assets/icon/filter.svg";
import user from "../../assets/images/patientlistimg2.png";
import DashBoardPatientDetail from "../../components/DashBoardPatientDetail";

const Patients = () => {
  return (
    // <div>
    //   <div className="">
    //     <div className="flex justify-between items-center py-6">
    //       <h1 className="text-2xl font-semibold">Patient List </h1>
    //       <div className="flex gap-4 items-center text-sm font-semibold">
    //         <button className="flex gap-2 px-5 py-2.5 bg-primary text-white rounded-lg">
    //           <img src={download} alt="" /> Download Report
    //         </button>
    //         <button className="flex gap-2 px-5 py-2 border text-primary border-primary rounded-lg">
    //           <img src={filter} alt="" className="w-4" /> Filter
    //         </button>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4">
    //       {patients.map((patient) => (
    //         <DashboardPatientListCard key={patient.id} patient={patient}  />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <DashBoardPatientDetail />

   
  );
};

export default Patients;
