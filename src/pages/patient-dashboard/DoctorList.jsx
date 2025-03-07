import React, { useState } from "react";
import { CheckCircle, ThumbsUp } from "lucide-react";
import doctorData from "../../components/const/doctorSlotData";
import Tabs from "../../components/ui/tabs/Tabs";
import SelectDropdown from "../../components/ui/field/SelectDropdown";
import filter from "../../assets/icon/filter.svg";

const DoctorCard = ({ doctor }) => {
  const [appointmentClicked, SetAppointmentClicked] = useState(false);

  return (
    <div className="bg-white border border-[#D7D7D780] rounded-lg shadow-lg shadow-[#00000024] p-5 w-full max-w-full">
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="relative">
          <img
            src={doctor.drImage}
            alt={doctor.name}
            className="  max-w-20 sm:max-h-20 rounded-full border relative  border-[#0183CE]"
          />
          <CheckCircle
            className="absolute top-14 right-0 text-[#0183CE] bg-white rounded-full"
            size={18}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#0183CE]">
            {doctor.name}
          </h3>
          <p className="text-[#787887]">{doctor.specialty}</p>
          <p className="text-sm text-[#787887]">
            {doctor.experience} years experience overall
          </p>
          <p className="font-bold text-sm  text-[#414146]">{doctor.location}</p>
          <p className="text-sm text-[#414146]">{doctor.hospital}</p>
          <p className="text-gray-600 text-sm text-[#414146]">
            {doctor.consultationFee}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="bg-[#00A500] text-white text-sm px-2 py-1 rounded-md flex items-center">
              <ThumbsUp size={14} className="mr-1" /> {doctor.rating}
            </span>
            <span className="text-[#414146] text-sm font-bold">
              {doctor.patientStories} Patient Stories
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-6">
        <div>
          <button
            onClick={() => SetAppointmentClicked(!appointmentClicked)}
            className="mt-4 text-sm lg:text-base w-full bg-[#0183CE] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#0183cec4] transition"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
      {appointmentClicked && (
        <div>
          <Tabs availableDates={doctor.availableDates} />
        </div>
      )}
    </div>
  );
};

const DoctorList = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    Speciality: "Speciality",
    Experience: "Experience",
    Range: "Range",
  });

  const handleSelect = (category, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const dropdownOptions = {
    Speciality: ["Cardiologist", "Dermatologist", "Oncologist"],
    Experience: ["1-5 Years", "5-10 Years", "10+ Years"],
    Range: ["$50 - $100", "$100 - $200", "$200+"],
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row  justify-between py-6">
        <h1 className="text-2xl font-bold">Doctor List</h1>
        <div className="flex flex-wrap gap-2 py-2  sm:py-6 xl:py-0 sm:gap-5">
          {Object.keys(dropdownOptions).map((category, index) => (
            <div key={index} className="relative">
              <SelectDropdown
                selected={selectedOptions[category]}
                onSelect={(value) => handleSelect(category, value)}
                options={dropdownOptions[category]}
                buttonClassname="w-32 rounded-lg text-[13px] font-bold sm:text-sm"
              />
            </div>
          ))} 
          <button className="flex font-bold  text-[13px] sm:text-sm gap-2 px-5 py-2 border text-primary border-primary rounded-lg">
            <img src={filter} alt="" className="w-4" /> Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {doctorData.map((doctor) => (
          <DoctorCard doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;

{
  /* <select
className="px-4 py-2 border rounded-lg text-[#0183CE] cursor-pointer"
value={selectedOptions[category]}
onChange={(e) => handleSelect(category, e.target.value)}
>
<option value="">{category}</option>
{dropdownOptions[category].map((option, i) => (
  <option key={i} value={option}>
    {option}
  </option>
))}
</select> */
}
