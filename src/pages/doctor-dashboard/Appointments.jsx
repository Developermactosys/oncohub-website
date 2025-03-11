import React from "react";
import { appointments } from "../../components/const/AppointmentsDtata";
import AppointmentTable from "../../components/ui/table/AppointmentTable";
import icon1 from "../../assets/icon/chat.svg";
import icon2 from "../../assets/icon/video-call.svg";
import icon3 from "../../assets/icon/phone.svg";
import icon4 from "../../assets/icon/delete.svg";
import addIcon from "../../assets/icon/add-icon.svg";

const columns = [
  { header: "First Name", rowKey: "firstName", name: "First Name" },
  { header: "Last Name", rowKey: "lastName", name: "Last Name" },
  { header: "Phone Number", rowKey: "phoneNumber", name: "Phone Number" },
  {
    header: "Appointment Date & Time",
    rowKey: "appointmentDateTime",
    name: "Appointment Date & Time",
  },
  {
    header: "Status",
    rowKey: "status",
    name: "Status",
    render: () => (
      <button className="border-primary text-[#0183CE] border rounded-[22px] py-1 px-6">
        Booked
      </button>
    ),
  },
  {
    header: "Payment",
    rowKey: "payment",
    name: "Payment",
    render: () => (
      <button className="bg-primary  text-white rounded-[22px] py-1 px-4">
        Done
      </button>
    ),
  },
  {
    header: "",
    rowKey: "",
    render: () => (
      <div className="flex gap-10 sm:gap-2 ">
        {[icon1, icon2, icon3, icon4].map((icon, index) => (
          
            <button>
              <img
                key={index}
                src={icon}
                alt="image"
                className="  w-28   sm:w-16  xl:w-5"
              />
              
            </button>
           
        ))}
      </div>
    ),
  },
];

const Appointments = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4">
        <h1 className=" text-xl  lg:text-[26px] font-bold">
          Manage Appointment
        </h1>
        <div className="py-4">
          <button className="flex   gap-2 px-3 sm:px-5 py-2.5 text-[13px] font-semibold bg-primary text-white rounded-lg">
            <img src={addIcon} alt="" className="" /> Add Appointment
          </button>
        </div>
      </div>
     
        <AppointmentTable columns={columns} data={appointments} />
   
    </div>
  );
};

export default Appointments;
