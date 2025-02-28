import React from "react";
import DoctorCard from "../../../components/ui/card/DoctorCard";
import doctorsData from "../../../components/const/DoctorData";
import SearchFilter from "../../../components/SearchFilter";

const Doctors = () => {
  return (
    <div className="container mx-auto ">

        <div>
            <SearchFilter/>
        </div>
      <div className="flex flex-wrap justify-center gap-7">
        {doctorsData.map((doctor, index) => (
          <div key={index} >
            <DoctorCard
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              degrees={doctor.degrees}
              location={doctor.location}
              className=''
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
