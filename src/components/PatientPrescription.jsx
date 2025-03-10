import React from "react";

const PatientPrescription = () => {
  return (
    <div className="max-w-md mx-auto bg-white px-0  lg:px-5  rounded-lg ">
      <div className="flex justify-between items-start">
        <div>
          <h2 className=" sm:text-xl  xl:text-2xl  font-bold">Patient Name</h2>
          <p className="font-semibold pt-7">Prakash Pathak</p>
          <a href="#" className=" font-semibold mt-1 block">
            Provisional Diagnosis
          </a>
          <p className="text-xs text-gray-600">Type II Cancer</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 text-sm font-semibold">27 Nov, 2024</p>
          <p className="text-sm font-semibold">Prescription ID: 3041</p>
        </div>
      </div>

      <div className="mt-5 py-5 px-4 shadow-lg rounded-[10px]">
        <h3 className="font-bold text-base mb-2">Medicines</h3>
        <div className="flex justify-between text-sm">
          <p className="text-sm font-semibold">#Name</p>
          <p className="font-semibold">Instruction</p>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <div>
            <p>Cancel Tablet</p>
            <p className="text-[#717171] text-xs">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>

          <p className="text-[#717171] text-xs">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>

      <div className="mt-5 p-4 shadow-lg rounded-[10px]">
        <h3 className="font-bold text-base mb-2">General Advised Notes</h3>
        <p className="text-sm text-[#717171]">20-20-20 rule explained</p>
        <p className="text-xs text-[#717171]  mt-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="my-9 text-end">
        <h3 className="text-base font-bold">Dr. Prakash Pathak</h3>
        <p className=" font-semibold  text-sm">Cancer Specialist</p>
      </div>
      <div className="flex justify-center items-center">
        <button className=" bg-primary text-white  px-28 py-2 sm:px-32 sm:py-3 rounded-xl font-semibold  hover:bg-primary">
          Send
        </button>
      </div>
    </div>
  );
};

export default PatientPrescription;
