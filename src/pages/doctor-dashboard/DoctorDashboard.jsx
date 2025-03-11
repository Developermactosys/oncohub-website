import React from "react";
import icon1 from "../../assets/images/appoint.png";
import icon2 from "../../assets/images/total-patient.png";
import icon3 from "../../assets/images/consulation.png";
import icon4 from "../../assets/images/video-consultant.png";
import DashboardCards from "../../components/ui/card/dashboard-card/DashboardCards";

import visit_fortoday_bg from "../../assets/images/dahboard-bg-image.png";
import PatientList from "../../components/doctor-dashboard/PatientList";
import Calendar from "../../components/doctor-dashboard/Calendar";
import male from "../../assets/icon/male.svg";
import arrow from "../../assets/icon/rotate-arrow.svg";
import calender from "../../assets/icon/calender.svg";
import watch from "../../assets/icon/watch.svg";
import stereoscope from "../../assets/icon/stretoscop.svg";

const DoctorDashboard = () => {
  const statsData = [
    {
      value: "24.4K",
      label: "Appointment",
      icon: icon1,
      bgColor: "bg-[#0183CE]",
    },
    {
      value: "24.4K",
      label: "Total Patients",
      icon: icon2,
      bgColor: "bg-[#FF5363]",
    },
    {
      value: "24.4K",
      label: "Consultation",
      icon: icon3,
      bgColor: "bg-[#FFA901]",
    },
    {
      value: "24.4K",
      label: "Video Consultation",
      icon: icon4,
      bgColor: "bg-[#24A8FA]",
    },
  ];

  const appointments = [
    {
      initials: "PP",

      name: "Prakash Pathak",
      gender: "Male",
      age: "26 Year’s",
      doctor: "Dr. Archana Mahadevan",
      time: "07:00 - 08:00",
      date: "Tuesday, 19 September",
    },
    {
      initials: "AT",
      name: "Anjali Thakur",
      gender: "Female",
      age: "26 Year’s",
      doctor: "Dr. Archana Mahadevan",
      time: "07:00 - 08:00",
      date: "Tuesday, 19 September",
    },
    {
      initials: "PP",
      name: "Prakash Pathak",
      gender: "Male",
      age: "26 Year’s",
      doctor: "Dr. Archana Mahadevan",
      time: "07:00 - 08:00",
      date: "Tuesday, 19 September",
    },
    {
      initials: "AT",
      name: "Anjali Thakur",
      gender: "Female",
      age: "26 Year’s",
      doctor: "Dr. Archana Mahadevan",
      time: "07:00 - 08:00",
      date: "Tuesday, 19 September",
    },
  ];

  const AppointmentCard = ({ appointment }) => {
    return (
      <div className="bg-white border hover:bg-[#F0F9FD] border-slate-200 shadow-md rounded-lg p-4 flex gap-4 items-center w-full">
        <div className="w-12 h-12 p-4 bg-gradient-to-t from-[#0183CE] via-[#58B6DD] to-[#57B4DE] text-white flex items-center justify-center rounded-full font-bold text-lg">
          {appointment.initials}
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{appointment.name}</h2>
          <div className=" grid grid-cols-3 text-gray-500 text-xs">
            <div className="flex gap-2 items-center">
              <img src={male} className="w-3" />
              {appointment.gender}
            </div>
            <div className="flex gap-2 items-center">
              <img src={arrow} className="w-3 object-cover" />
              {appointment.age}
            </div>

            <div className="flex gap-2 items-center">
              <img src={stereoscope} className="w-3" />
              {appointment.doctor}
            </div>
            <div className="flex gap-2 items-center">
              <img src={watch} className="w-3" />
              {appointment.time}
            </div>
            <div className="flex gap-2 items-center">
              <img src={calender} className="w-3" />
              {appointment.date}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className=" text-lg  xl:text-xl font-normal pb-8">
        Good Morning{" "}
        <span className="text-xl  xl:text-2xl text-[#0183CE] font-bold">
          Dr. Archana Mahadaven
        </span>
      </h1>

      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
        {statsData.map((data, index) => (
          <div key={index} className="">
            <DashboardCards
              value={data.value}
              label={data.label}
              icon={data.icon}
              bgColor={data.bgColor}
              className="  transition-transform hover:shadow-xl duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl`}"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row gap-6 sm:py-10">

        <div className=" flex flex-col gap-6 ">
          <div
            className="  flex justify-between items-center   bg-cover bg-center rounded-[16px]    object-cover  max-w-full shadow-lg"
            style={{ backgroundImage: `url(${visit_fortoday_bg})` }}
          >
            <div className="text-black  ">
              <div className=" mx-5 sm:mx-10 my-10 ">
                <div className="flex flex-col gap-4 py-16">
                  <h1 className="text-xl  font-bold ">Visits for Today</h1>
                  <h1 className="  text-4xl  xl:text-5xl font-bold">104</h1>
                </div>

                <div className="flex gap-4 ">
                  <div className="bg-[#FFFFFF8C] bg-opacity-20 py-3 px-6 rounded-lg hover:shadow-xl ">
                    <p className="xl:text-base font-semibold">New Patients</p>
                    <h2 className="xl:text-3xl font-medium text-black">40</h2>
                    <span className="text-green-400 text-sm">⬆ 51%</span>
                  </div>

                  <div className="bg-[#FFFFFF8C]  bg-opacity-20 py-3 px-5 rounded-lg hover:shadow-xl">
                    <p className="xl:text-base font-semibold">
                      Return Patients
                    </p>
                    <h2 className="xl:text-3xl font-medium text-black">64</h2>
                    <span className="text-red-400 text-sm">⬇ 28%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border   border-slate-200 rounded-2xl">
            <PatientList />
          </div>
        </div>

        <div className="sm:flex gap-8 xl:flex-col">
          <div className="sm:w-[80%] xl:w-full">
          <Calendar />
          </div>
       
          <div className="   space-y-4 w-full">
            {appointments.map((appointment, index) => (
              <AppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorDashboard;


