import React, { useState } from "react";
import { FaRegClock} from "react-icons/fa";
import doctorImage from "../../assets/images/doctor-girl.png";
import badgeImage from "../../assets/images/right-badge.png";
import more from "../../assets/images/horizontal-more.png";
import calender from "../../assets/images/doctor-calender.png";
import phone_call from "../../assets/images/phone-call.png";
import filter from "../../assets/icon/filter.svg";
import { Star } from "lucide-react";
import CompletedAppointments from "../../components/CompletedUppointment";
import CancelledAppointments from "../../components/CancelledAppointments";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Archana Mahadaven",
    specialty: "Breast Cancer Specialist",
    image: doctorImage,
    rating: 4.9,
    reviews: 120,
    badge: "Professional Doctor",
    date: "Monday, 13 November",
    time: "09:00 - 12:00",
  },
  {
    id: 2,
    name: "Dr. Prakash Pathak",
    specialty: "Liver Cancer Specialist",
    image: doctorImage,
    rating: 4.7,
    reviews: 98,
    badge: "Professional Doctor",
    date: "Monday, 13 November",
    time: "09:00 - 12:00",
  },
  {
    id: 3,
    name: "Dr. Megha Roopam",
    specialty: "Bone Cancer Specialist",
    image: "doctor3.png",
    rating: 4.8,
    reviews: 110,
    badge: "Professional Doctor",
    date: "Monday, 13 November",
    time: "09:00 - 12:00",
  },
  {
    id: 4,
    name: "Dr. Archana Mahadaven",
    specialty: "Breast Cancer Specialist",
    image: "doctor1.png",
    rating: 4.9,
    reviews: 120,
    badge: "Professional Doctor",
    date: "Monday, 13 November",
    time: "09:00 - 12:00",
  },
  {
    id: 5,
    name: "Dr. Prakash Pathak",
    specialty: "Liver Cancer Specialist",
    image: "doctor2.png",
    rating: 4.7,
    reviews: 98,
    badge: "Professional Doctor",
    date: "Monday, 13 November",
    time: "09:00 - 12:00",
  },
  {
    id: 6,
    name: "Dr. Megha Roopam",
    specialty: "Bone Cancer Specialist",
    image: "doctor3.png",
    rating: 4.8,
    reviews: 110,
    badge: "Professional Doctor",
    date: "Monday, 13 November",
    time: "09:00 - 12:00",
  },
];

const DoctorCard = ({ doctor, index }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  return (
    <div className="bg-white shadow-xl rounded-2xl p-3.5 border-[#D2D2D299] border h-full relative ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className=" w-full h-full sm:w-24 sm:h-28 lg:w-32 lg:h-32 xl:w-24 xl:h-28  rounded-lg object-cover"
        />
        <div>
          <div className="flex justify-between">
            <span className="flex gap-1.5 text-xs items-center  bg-blue-100 text-[#0183CE] px-2 py-1 rounded-md font-semibold">
              <img src={badgeImage} alt="" /> {doctor.badge}
            </span>
            <div className="relative">
              <button onClick={() => toggleDropdown(index)}>
                <img src={more} alt="" />
              </button>
              {activeDropdown === index && (
                <div className="absolute right-0 top-8 bg-white border text-sm font-bold border-[#0183CE] w-40 overflow-hidden rounded-lg shadow-md  z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-[#AFE2FF]">
                    Cancel Booking
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-[#AFE2FF]  ">
                    Reschedule
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="py-4 flex  justify-between">
            <div>
              <h2 className="text-base font-bold mt-1">{doctor.name}</h2>
              <p className="font-bold text-sm">{doctor.specialty}</p>
            </div>
            <div>
              <img src={phone_call} alt="" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={20} fill="#FCA70E" color="white" />
              ))}
            </div>

            <span className="font-bold text-[12px]">{doctor.rating}</span>
            <span className="font-semibold text-[#666666 ] text-[12px]">
              ({doctor.reviews} Reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mt-4 p-2 bg-[#0183CE] text-white rounded-lg flex  ">
          <div className="flex items-center gap-2 text-[] border-r-2  border-r-[#FFFFFF] px-2">
            <img src={calender} alt="" />
            <span className=" text-xs ">{doctor.date}</span>
          </div>
          <div className="flex items-center text-white gap-2 px-3 ">
            <FaRegClock />
            <span className=" text-white text-xs">{doctor.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingAppointment = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const tabs = ["Upcoming", "Completed", "Cancelled"];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start py-5">
      {activeTab === "Upcoming" &&  <h1 className="     text-xl  xl:text-2xl font-bold pb-4">Doctor List</h1>}
        {activeTab === "Completed" &&   <h1 className=" text-xl  xl:text-2xl font-bold pb-4">Complete Appointment</h1>}
        {activeTab === "Cancelled" &&   <h1 className=" text-xl  xl:text-2xl font-bold pb-4">Cancelled Appointment</h1>}
      

      
        <div className="flex flex-wrap gap-3 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-2 xl:px-5 py-2 rounded-lg font-semibold border ${
                activeTab === tab
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border border-primary"
              }`}
            >
              {tab}
            </button>
          ))}

          <button className="flex font-semibold items-center text-[13px] sm:text-sm gap-2 px-5 py-2 border text-primary border-primary rounded-lg">
            <img src={filter} alt="Filter" className="w-4" /> Filter
          </button>
        </div>
      </div>

      <div className="mt-5   rounded-md ">
        {activeTab === "Upcoming" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {doctorsData.map((data, index) => (
              <DoctorCard doctor={data} index={index} />
            ))}
          </div>
        )}
        {activeTab === "Completed" && <CompletedAppointments />}
        {activeTab === "Cancelled" && <CancelledAppointments />}
      </div>
    </div>
  );
};

export default UpcomingAppointment;
