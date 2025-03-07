import React from "react";
import AppointmentTable from "../../components/ui/table/AppointmentTable";
import PatientButton from  "../../components/ui/PatientButton";

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
    render :(row) => (
      <div>
        <PatientButton value="Checked" className="text-xs font-semibold px-2 py-1 rounded-full"/>
      </div>
    )
  },
];

const data = [
  {
    "Patient Name": "Prakash Pathak",
    "Medicine": "Tablet Name",
    "Dosage": "1 Tablet",
    "Duration Week": "1 Week",
    "Repeat": "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
    
  },
  {
    "Patient Name": "Anjali Thakur",
    "Medicine": "Tablet Name",
    "Dosage": "10 Tablet",
    "Duration Week": "10 Week",
    "Repeat": "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
    
  },
  {
    "Patient Name": "Prakash Pathak",
    "Medicine": "Tablet Name",
    "Dosage": "1 Tablet",
    "Duration Week": "1 Week",
    "Repeat": "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
    
  },
  {
    "Patient Name": "Anjali Thakur",
    "Medicine": "Tablet Name",
    "Dosage": "10 Tablet",
    "Duration Week": "10 Week",
    "Repeat": "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
    
  },
  {
    "Patient Name": "Prakash Pathak",
    "Medicine": "Tablet Name",
    "Dosage": "1 Tablet",
    "Duration Week": "1 Week",
    "Repeat": "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
    
  },
  {
    "Patient Name": "Anjali Thakur",
    "Medicine": "Tablet Name",
    "Dosage": "10 Tablet",
    "Duration Week": "10 Week",
    "Repeat": "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
    
  },
  {
    "Patient Name": "Prakash Pathak",
    "Medicine": "Tablet Name",
    "Dosage": "1 Tablet",
    "Duration Week": "Breast Cancer",
    "Repeat": "Every Day",
    "To Be Taken": "After Food",
    "Time Of The Day": "Morning / Night",
    
  },
  {
    "Patient Name": "Anjali Thakur",
    "Medicine": "Tablet Name",
    "Dosage": "10 Tablet",
    "Duration Week": "10 Week",
    "Repeat": "Alternate Day",
    "To Be Taken": "Before Food",
    "Time Of The Day": "Morning / Night",
    
  }
]


const AddPrescription = () => {
  return <div>
    <AppointmentTable className="text-[#667085]" columns={column} data={data}/>
  </div>;
};

export default AddPrescription;
