import AppointmentTable from "../../components/ui/table/AppointmentTable";
import PatientButton from "../../components/ui/PatientButton";
import Label from "../../components/ui/field/Label";
import SelectFormInput from "../../components/ui/field/FormSelectInput";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import FormInput from "../../components/ui/field/FormInput";
import PatientPrescription from "../../components/PatientPrescription";

const column = [
  {
    header: "Patient Name",
    rowKey: "Patient Name",
  },
  {
    header: "Medicine",
    rowKey: "Medicine",
  },
  {
    header: "Dosage",
    rowKey: "Dosage",
  },
  {
    header: "Duration Week",
    rowKey: "Duration Week",
  },
  {
    header: "Repeat",
    rowKey: "Repeat",
  },
  {
    header: "To Be Taken",
    rowKey: "To Be Taken",
  },
  {
    header: "Time Of The Day",
    rowKey: "Time Of The Day",
  },
  {
    header: "Lab Test",
    rowKey: "Lab Test",
    render: (row) => (
      <div>
        <PatientButton
          value="Checked"
          className="text-xs font-semibold px-2 py-1 rounded-full"
        />
      </div>
    ),
  },
];

const data = [
  {
    "Patient Name": "Prakash Pathak",
    Medicine: "Tablet Name",
    Dosage: "1 Tablet",
    "Duration Week": "1 Week",
    Repeat: "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
  },
  {
    "Patient Name": "Anjali Thakur",
    Medicine: "Tablet Name",
    Dosage: "10 Tablet",
    "Duration Week": "10 Week",
    Repeat: "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
  },
  {
    "Patient Name": "Prakash Pathak",
    Medicine: "Tablet Name",
    Dosage: "1 Tablet",
    "Duration Week": "1 Week",
    Repeat: "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
  },
  {
    "Patient Name": "Anjali Thakur",
    Medicine: "Tablet Name",
    Dosage: "10 Tablet",
    "Duration Week": "10 Week",
    Repeat: "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
  },
  {
    "Patient Name": "Prakash Pathak",
    Medicine: "Tablet Name",
    Dosage: "1 Tablet",
    "Duration Week": "1 Week",
    Repeat: "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
  },
  {
    "Patient Name": "Anjali Thakur",
    Medicine: "Tablet Name",
    Dosage: "10 Tablet",
    "Duration Week": "10 Week",
    Repeat: "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
  },
  {
    "Patient Name": "Prakash Pathak",
    Medicine: "Tablet Name",
    Dosage: "1 Tablet",
    "Duration Week": "Breast Cancer",
    Repeat: "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
  },
  {
    "Patient Name": "Anjali Thakur",
    Medicine: "Tablet Name",
    Dosage: "10 Tablet",
    "Duration Week": "10 Week",
    Repeat: "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
  },
];
const CounterInput = ({ label, unit }) => {
  const [count, setCount] = useState(1);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold">{label}</p>
      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={increase}
          className="bg-primary text-white p-2 rounded"
        >
          <FaPlus size={12} />
        </button>
        <span className="text-gray-600 text-sm">
          {count} {unit}
        </span>
        <button
          onClick={decrease}
          className="bg-primary text-white p-2 rounded"
        >
          <FaMinus size={12} />
        </button>
      </div>
    </div>
  );
};

const SelectableButtonGroup = ({ label, options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="mb-4">
      <p className="font-semibold mb-2">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`px-4 py-2 text-sm rounded-lg border font-medium transition-all ${
              selected === option
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border border-primary"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const AddPrescription = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <div className=" xl:w-[65%]">
        <h1 className=" sm:text-xl  xl:text-2xl font-bold">Add Prescription</h1>
        <div className="py-7">
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="w-full">
              <div>
                <Label
                  name={"Provisional Diagnosis"}
                  className="text-black font-semibold text-base"
                />
                <SelectFormInput
                  options={["option1 ", "option2"]}
                  className=" placeholder-[#B6B6B6] border border-[#B6B6B6]"
                />
              </div>
              <div className="flex justify-between mt-4">
                <CounterInput label="Dosage" unit="Tablet" />
                <CounterInput label="Duration Week" unit="Week" />
              </div>
            </div>

            <div className="w-full">
              <Label
                name={"Add Medicine"}
                className="text-black font-semibold text-base"
              />
              <SelectFormInput
                options={["option1 ", "option2"]}
                className=" placeholder-[#B6B6B6] border border-[#B6B6B6]"
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="flex justify-between">
              <SelectableButtonGroup
                label="Repeat"
                options={["Everyday", "Alternate Days", "Specific Day"]}
              />
              <SelectableButtonGroup
                label="To be Taken"
                options={["After Food", "Before Food"]}
              />
            </div>

            <SelectableButtonGroup
              label="Time of the Day"
              options={["Morning", "Noon", "Evening", "Night"]}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full ">
            <Label
              name={"Write Prescription"}
              className="text-black font-semibold text-base"
            />
            <FormInput
              type="text"
              placeholder={"Write Here......"}
              className=" placeholder-[#B6B6B6] border border-[#B6B6B6]"
            />
          </div>
          <div className="w-full">
            <Label
              name={"Write Prescription"}
              className="text-black font-semibold text-base"
            />
            <FormInput
              type="text"
              placeholder={"Write Here......"}
              className=" placeholder-[#B6B6B6] border border-[#B6B6B6]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-8">
          <PatientButton value={"Submit"} className=" px-28 py-2 sm:px-32 sm:py-3"/>
        </div>
      </div>
      <div>
        <PatientPrescription/>
      </div>
    </div>
  );
  //  <div>
  //   <AppointmentTable className="text-[#667085]" columns={column} data={data}/>
  // </div>;
};

export default AddPrescription;
