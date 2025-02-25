import React from "react";
import image1 from "../assets/images/facilityimage1.png";
import image2 from "../assets/images/facilityimage2.png";
import image3 from "../assets/images/facilityimage3.png";
import image4 from "../assets/images/facilityimage5.png";
import image5 from "../assets/images/facilityimage6.png";

const FacilitiesAndActivities = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="xl:col-span-2 flex flex-col gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-[#274760] font-bold mb-5 lg:mb-16 lg:mr-16 xl:mb-20 xl:mr-20">
            Our Facilities and Latest Activities
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={image1}
            alt="Facility 1"
            className="w-full h-40 sm:h-52 lg:h-68 xl:h-72 rounded-xl object-cover"
          />
          <img
            src={image2}
            alt="Facility 2"
            className="w-full h-40 md:h-52 xl:h-72 rounded-xl object-cover"
          />
          <img
            src={image3}
            alt="Facility 3"
            className="col-span-2 w-full h-48 sm:h-80  xl:h-72 rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <img
          src={image4}
          alt="Facility 4"
          className="w-full h-full md:h-full lg:h-[60%]  xl:h-full rounded-xl object-cover"
        />
        <img
          src={image5}
          alt="Facility 5"
          className="w-full h-40 md:h-60 xl:h-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default FacilitiesAndActivities;
