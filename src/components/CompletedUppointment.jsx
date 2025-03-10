import React from "react";
import PatientButton from "./ui/PatientButton";
import Card from "./ui/card/patient-dashboard-card/Card";
import { appointments } from "./const/DashbaordAppointmentData";


const CompletedAppointments = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {appointments.map((doctor) => (
            <Card key={doctor.id} doctor={doctor}/>
        ))}
      </div>
      <div className="flex justify-center items-center pt-10">
        <PatientButton value={"See More"} className="text-sm px-5 py-2" />
      </div>
    </div>
  );
};

export default CompletedAppointments;
