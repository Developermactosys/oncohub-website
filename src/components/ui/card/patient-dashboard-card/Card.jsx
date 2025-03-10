import React from "react";
import PatientButton from "../../PatientButton";

const Card = ({ doctor, isCancelledCard = false }) => {
  return (
    <div>
      <div className="bg-white border border-[#D2D2D299] shadow-md rounded-lg p-5 h-full  ">
        <div className="flex  gap-4">
          <div className=" h-28 w-28  sm:w-28 sm:h-28 rounded-lg object-cover">
            <img
              src={doctor.image}
              alt={doctor.name}
              className=" w-full h-full "
            />
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-sm font-semibold">
              {doctor.date} - {doctor.time}
            </p>
            <div>
              <h3 className="text-sm font-bold mt-2">{doctor.name}</h3>
              <p className="text-sm font-medium">{doctor.specialty}</p>
              <p className="text-sm mt-1">
                Booking ID:{" "}
                <span className="text-primary text-s">{doctor.bookingId}</span>
              </p>
            </div>
          </div>
        </div>
        {isCancelledCard ? (
          <div className="flex gap-3 text-sm justify-center  pt-[22px]">
            <PatientButton value="Add Review" className="px-7 text-sm py-2 bg-white text-primary border border-primary "/>
          </div>
        ) : (
          <div className="flex gap-3 text-sm justify-center items-center pt-[22px]">
            <button className="bg-primary text-white px-7 sm:px-8 xl:px-9 py-2 rounded-[10px]">
              Re-Book
            </button>
            <button className="border  border-primary text-primary px-5 sm:px-8 py-2 rounded-[10px]">
              Add Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
