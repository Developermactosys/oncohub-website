import React, { useState } from "react";
import AppointmentTable from "../../components/ui/table/AppointmentTable";
import pdf from "../../assets/icon/pdf.svg";
import SelectDropdown from "../../components/ui/field/SelectDropdown";
import { FiChevronDown } from "react-icons/fi";

const Diagnoses = [
  { provisionalDiagnosis: "Bone Cancer" },
  { provisionalDiagnosis: "Liver Cancer" },
  { provisionalDiagnosis: "Breast Cancer" },
  { provisionalDiagnosis: "Lungs Cancer" },
  { provisionalDiagnosis: "Blood Cancer" },
  { provisionalDiagnosis: "Bone Cancer" },
  { provisionalDiagnosis: "Breast Cancer" },
  { provisionalDiagnosis: "Lungs Cancer" },
];

const SelectMedicineDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-[110px]">
        <button
          className="w-full px-3 py-2 border bg-[#0183CE] text-white font-semibold rounded-full flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected} <FiChevronDown/>
        </button>

        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border overflow-hidden border-[#0183CE80] border-gray-300 rounded-lg shadow-lg z-10">
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 hover:bg-blue-100 border-b border-b-[#0183CE80]"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const Prescriptions = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    toBeTaken: "After Food",
    timeOfTheDay: "Every Day",
    repeat: "Every Day",
    durationWeek: "1 Week",
    dosage: "1 Tablet",
  });
  const [selectedOption, setSelectedOption] = useState("Select");


  const handleDropdownChange = (key, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };  

  const column = [
    { header: "Provisional Diagnosis", rowKey: "provisionalDiagnosis" },
    {
      header: "Medicine",
      rowKey: "medicine",
      render: () => (
        <SelectMedicineDropdown
          options={["Medicine1", "Medicine2", "Medicine3"]}
          selected={selectedOption}
          onSelect={setSelectedOption}
        />
      ),
    },
    {
      header: "Dosage",
      rowKey: "dosage",
      render: () => (
        <SelectDropdown
          options={["1 Tablet", "2 Tablet", "3 Tablet"]}
          selected={selectedOptions.dosage}
          onSelect={(value) => handleDropdownChange("dosage", value)}
          className='w-24'
        />
      ),
    },
    {
      header: "Duration Week",
      rowKey: "durationWeek",
      render: () => (
        <SelectDropdown
          options={["1 Week", "2 Week", "3 Week"]}
          selected={selectedOptions.durationWeek}
          onSelect={(value) => handleDropdownChange("durationWeek", value)}
        />
      ),
    },
    {
      header: "Repeat",
      rowKey: "repeat",
      render: () => (
        <SelectDropdown
          options={["Every Day", "Alternate Day", "Specific Day"]}
          selected={selectedOptions.repeat}
          onSelect={(value) => handleDropdownChange("repeat", value)}
          className='w-36'
        />
      ),
    },
    {
      header: "To Be Taken",
      rowKey: "toBeTaken",
      render: () => (
        <SelectDropdown
          options={["After Food", "Before Food"]}
          selected={selectedOptions.toBeTaken}
          onSelect={(value) => handleDropdownChange("toBeTaken", value)}
        />
      ),
    },
    {
      header: "Time Of The Day",
      rowKey: "timeOfTheDay",
      render: () => (
        <SelectDropdown
          options={["Every Day", "Alternate Day", "Specific Day"]}
          selected={selectedOptions.timeOfTheDay}
          onSelect={(value) => handleDropdownChange("timeOfTheDay", value)}
        />
      ),
    },
    {
      header: "Lab Test",
      rowKey: "labTest",
      render: () => (
        <div className="flex justify-center items-center">
          <button>
            <img src={pdf} alt="" className="w-5" />
          </button>{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="border border-[#D6D6D6] p-5 rounded-[10px]">
      <h1 className="text-xl font-bold">View Prescription</h1>
      <AppointmentTable
        columns={column}
        data={Diagnoses}
        className="text-[#667085]"
      />
    </div>
  );
};

export default Prescriptions;
