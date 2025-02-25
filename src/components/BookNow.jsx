import React, { useState } from "react";
import SectionBanner from "./SectionBanner";
import InputField from "./ui/field/InputField";
import Label from "./ui/field/Label";
import Checkbox from "./ui/field/Checkbox";
import booknow_doctor_image from "../assets/images/booknow-doctor-image.png";

const BookNow = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDepartmentOptions, setSelectedDepartmentOptions] = useState(
    []
  );

  const handleCheckboxChange = (value) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleDepartmentCheckbox = (value) => {
    setSelectedDepartmentOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <SectionBanner className="xl:gap-20 pb-20">
      <div>
        <h1 className="text-[#274760] font-bold text-2xl pb-7 xl:text-4xl xl:pb-14">
          Book Now{" "}
        </h1>
        <div >
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex flex-col xl:flex-row xl:items-center gap-6">
              <div className="w-full">
                <Label name="Name" />
                <InputField
                  placeholder="David John"
                  value=""
                  onChange=""
                  type="text"
                />
              </div>
              <div className="w-full">
                <Label name="Phone Number" />
                <InputField
                  placeholder="(123) 456 - 789"
                  value=""
                  onChange={() => console.log("")}
                  type="text"
                />
              </div>
            </div>
            <div>
              <Label name="Medical Record Number" />
              <InputField
                placeholder="123456-7890-0987"
                value=""
                onChange={() => console.log("")}
                type=""
              />
            </div>
            <div className="flex  flex-col xl:flex-row xl:items-center gap-6">
              <div>
                <Label name="Preferred Date" />
                <InputField placeholder="" value="" onChange="" type="date" />
              </div>
              <div>
                <Label name="Preferred Time" />
                <InputField
                  placeholder=""
                  value=""
                  onChange={() => console.log("")}
                  type="date"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Checkbox
                title="Reason for Visit"
                options={[
                  { value: "Routine Checkup", checked: false },
                  { value: "New Patient Visit", checked: false },
                  { value: "Specific Concern", checked: false },
                ]}
                selectedOptions={selectedOptions}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="flex flex-col">
              <Checkbox
                title="Department"
                options={[
                  { value: "Cancer", checked: false },
                  { value: "Obstetrics and Gynecology", checked: false },
                  { value: "Cardiology", checked: false },
                  { value: "Neurology", checked: false },
                ]}
                selectedOptions={selectedDepartmentOptions}
                onChange={handleDepartmentCheckbox}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:justify-end">
        <img src={booknow_doctor_image} alt="" className="max-w-[80%]" />
      </div>
    </SectionBanner>
  );
};

export default BookNow;
