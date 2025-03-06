import React from 'react'
import { CheckCircle, ThumbsUp } from "lucide-react";
import doctorlist_image from  "../../assets/images/doctorlist-image.png"

const doctorData = {
  image:doctorlist_image,
  name: "Dr. Naresh Trahen",
  specialty: "Cancer Specialist",
  experience: 10,
  location: "Pare, Mumbai",
  hospital: "Smilessence Center for Advanced Cancer",
  consultationFee: "Consultation fee at clinic",
  rating: "99%",
  patientStories: 93,
};









const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-5 w-full max-w-md">
      <div className="flex gap-4">
      
        <div className="relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 rounded-full border relative  border-[#0183CE]"
          />
          <CheckCircle className="absolute top-14 right-0 text-[#0183CE] bg-white rounded-full" size={18} />
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-[#0183CE]">{doctor.name}</h3>
          <p className="text-gray-500">{doctor.specialty}</p>
          <p className="text-sm text-gray-400">{doctor.experience} years experience overall</p>
          <p className="font-semibold text-gray-800">{doctor.location}</p>
          <p className="text-gray-600">{doctor.hospital}</p>
          <p className="text-gray-600">{doctor.consultationFee}</p>

          <div className="flex items-center gap-2 mt-2">
            <span className="bg-[#00A500] text-white text-sm px-2 py-1 rounded-md flex items-center">
              <ThumbsUp size={14} className="mr-1" /> {doctor.rating}
            </span>
            <span className="text-gray-600 text-sm font-medium">{doctor.patientStories} Patient Stories</span>
          </div>
        </div>
      </div>
  
      <button className="mt-4 w-full bg-[#0183CE] text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition">
        Book Your Appointment
      </button>
    </div>
  );
};


const DoctorList = () => {
  return (
    <div>
            <DoctorCard doctor={doctorData} />

    </div>
  )
}

export default DoctorList
