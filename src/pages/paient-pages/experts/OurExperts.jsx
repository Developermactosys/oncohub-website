import React from "react";
import exports_image from "../../../assets/images/experts_bg_image.png";
import DoctorLove from "../../../components/DoctorLove";
import ExpertsCard from "../../../components/ui/card/ExpertsCard";
import doctors from "../../../components/const/ExpertCardData";

const OurExperts = () => {
  return (
    <div className="flex flex-col gap-16 xl:gap-20">
      <div
        className=" relative bg-cover bg-center min-h-[300px]  sm:min-h-[390px] xl:min-h-[500px] -mt-32 -z-10 flex justify-center items-center"
        style={{
          backgroundImage: `url(${exports_image})`,
        }}
      >
        <div className="container mx-auto">
          <div className="text-center text-white text-3xl lg:text-4xl xl:text-5xl font-bold">
            Our Experts
          </div>
        </div>
      </div>

      <div className="">
        <h1 className=" text-center text-2xl sm:text-3xl xl:text-4xl font-bold pb-12 xl:pb-14">
          Doctors Love{" "}
          <span className="font-normal border-b-2 border-b-[#0183CE] text-[#0183CE]">
            Oncohub
          </span>
        </h1>

        <div className="bg-[#EEF9FF] py-16 xl:px-20">
          <DoctorLove />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col gap-7 justify-center items-center pb-14 xl:pb-16">
          <h1 className=" text-center text-3xl xl:text-4xl font-bold">
            300+ {" "}
            <span className="font-medium border-b-2 border-b-[#0183CE] text-[#0183CE]">
              Experts
            </span>
          </h1>
          <p className="max-w-[457px] text-center lg:text-lg font-normal ">
            We partner with the best experts at the best hospitals around the
            world.{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16 ">
          {doctors.map((person, index) => (
            <div key={index}>
              <ExpertsCard
                DoctorImage={person.image}
                specialist={person.specialty}
                name={person.name}
                rating={person.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
