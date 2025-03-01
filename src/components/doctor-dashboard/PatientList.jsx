import React from "react";
import AppointmentCard from "../ui/card/dashboard-card/AppointmentCard";
import img from "../../assets/images/more-icon.png";

const PatientList = () => {
  const appointments = [
    {
      name: "Stacy Mitchell",
      initials: "SM",
      time: "9:15 AM",
      type: "Weekly Visit",
      bgColor: "bg-pink-300",
      textColor: "text-pink-500",
      timeBg: "bg-pink-100 text-pink-600",
    },
    {
      name: "Amy Dunham",
      initials: "AD",
      time: "9:30 AM",
      type: "Routine Checkup",
      bgColor: "bg-blue-300",
      textColor: "text-blue-500",
      timeBg: "bg-blue-100 text-blue-600",
    },
    {
      name: "Demi Joan",
      initials: "DJ",
      time: "9:50 AM",
      type: "Report",
      bgColor: "bg-teal-300",
      textColor: "text-teal-500",
      timeBg: "bg-teal-100 text-teal-600",
    },
    {
      name: "Susan Myers",
      initials: "SM",
      time: "10:15 AM",
      type: "Weekly Visit",
      bgColor: "bg-pink-300",
      textColor: "text-pink-500",
      timeBg: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 px-5 gap-6  py-5">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Patient List</h1>
          <select>
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
        </div>

        <div className="flex flex-col  gap-4  py-4 bg-gray-100">
          {appointments.map((appointment, index) => (
            <AppointmentCard key={index} {...appointment} />
          ))}
        </div>
      </div>
      <div>
        <div  className="flex justify-between">
          <h1 className="text-xl font-semibold">Consultation</h1>
          <button>
            {" "}
            <img src={img} alt="" />
          </button>
        </div>

        <div className="border rounded-2xl border-[#58B6DE80] p-4 my-4 ">
          <AppointmentCard
            name="Stacy Mitchell"
            initials="SM"
            time="9:15 AM"
            type="Male - 26 Years"
            bgColor="bg-[#12898340]"
            textColor="text-grey-200"
            timeBg="bg-pink-100 text-pink-600"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientList;
