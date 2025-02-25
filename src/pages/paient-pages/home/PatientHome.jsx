import React from "react";
import PatientBanner from "../../../components/PatientBanner";
import FirstStep from "../../../components/FirstStep";

const PatientHome = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-16 xl:gap-20">
        <PatientBanner />
        <FirstStep />
      </div>
    </div>
  );
};

export default PatientHome;
