import React from 'react'
import { FaRegClock, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const doctorData = {
  // image: doctorImage,
  badge: "Professional Doctor",
  name: "Dr. Archana Mahadevan",
  specialty: "Breast Cancer Specialist",
  rating: "4.8",
  reviews: "49",
  date: "Monday, 11 November",
  time: "09:00 - 10:00",
};


const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-80">
   
      <div className="flex items-center gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-semibold">
            {doctor.badge}
          </span>
          <h2 className="text-lg font-semibold mt-1">{doctor.name}</h2>
          <p className="text-gray-500 text-sm">{doctor.specialty}</p>
        </div>
      </div>

    
      <div className="flex items-center gap-1 mt-2">
        <span className="text-yellow-500 text-lg">⭐</span>
        <span className="text-gray-700 font-semibold">{doctor.rating}</span>
        <span className="text-gray-400 text-sm">({doctor.reviews} Reviews)</span>
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-lg flex justify-between items-center">
        <div className="flex items-center gap-2 text-blue-600">
          <FaCalendarAlt />
          <span className="text-sm">{doctor.date}</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600">
          <FaRegClock />
          <span className="text-sm">{doctor.time}</span>
        </div>
      </div>


      <div className="flex justify-end mt-3">
        <button className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-2">
          <FaPhoneAlt />
        </button>
      </div>
    </div>
  );
};





const UpcomingAppointment = () => {
  return (
    <div>
      <div>
        <h1>Doctor List</h1>

        <div>

        </div>
      </div>
       <div>
         <DoctorCard doctor={doctorData} />
       </div>
    </div>
  )
}

export default UpcomingAppointment
