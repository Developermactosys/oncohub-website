import React from "react";
import icon1 from "../../assets/images/appoint.png";
import icon2 from "../../assets/images/total-patient.png";
import icon3 from "../../assets/images/consulation.png";
import icon4 from "../../assets/images/video-consultant.png";
import DashboardCards from "../../components/ui/card/dashboard-card/DashboardCards";

import ladydoctor_image from "../../assets/images/lady-doctor.png";
import visit_fortoday_bg from "../../assets/images/visit_fortoday_bg.png";
import PatientList from "../../components/doctor-dashboard/PatientList";
import Calendar from "../../components/doctor-dashboard/Calendar";

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

  return (
    <div>
      <h1 className="xl:text-xl font-normal pb-8">
        Good Morning{" "}
        <span className="xl:text-2xl text-[#0183CE] font-bold">
          Dr. Archana Mahadaven
        </span>
      </h1>
      <div className="  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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

      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        <div className=" col-span-2">
          <div
            className="relative  flex mt-12 justify-between  h-[80%] bg-cover bg-center rounded-[16px] p-6  max-w-full shadow-lg"
            style={{ backgroundImage: `url(${visit_fortoday_bg})` }}
          >
            <div className="text-black">
              <div>
              <h1 className="text-xl font-bold pb-5">Visits for Today</h1>
              <h1 className="text-5xl font-bold">104</h1>
              </div>
           

              <div className="flex gap-4 mt-4">
                <div className="bg-white bg-opacity-20 py-3 px-6 rounded-lg">
                  <h2 className="text-xl font-bold text-black">40</h2>
                  <p className="text-sm">New Patients</p>
                  <span className="text-green-400 text-sm">⬆ 51%</span>
                </div>

                <div className="bg-white bg-opacity-20 py-3 px-5 rounded-lg">
                  <h2 className="text-xl font-bold text-black">64</h2>
                  <p className="text-sm">Return Patients</p>
                  <span className="text-red-400 text-sm">⬇ 28%</span>
                </div>
              </div>
            </div>

            <img
              src={ladydoctor_image}
              alt="Doctor"
              className="absolute bottom-0 right-4 w-[43%]  object-cover"
            />
          </div>
        </div>
        <div className=" mt-12 row-span-2">
          <Calendar/>
        </div>
        <div className="border border-slate-200 rounded-2xl -mt-4 col-span-2">
          <PatientList />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

{
  /* <div className="relative flex justify-between  bg-cover bg-center rounded-[16px] max-w-[100%]" style={{ backgroundImage: `url(${visit_fortoday_bg})` }}>
            <div>
              <h1>Visits for Today</h1>
              <h1>104</h1>
            </div>

            <img src={ladydoctor_image} alt="" className="-mb-20" />
          </div> */
}
