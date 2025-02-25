import React from "react";
import whyChooseUsImage from "../assets/images/whychooseu.png";
import image1 from "../assets/images/service.png";
import image2 from "../assets/images/patient.png";
import image3 from "../assets/images/medical.png";
import image4 from "../assets/images/facility.png";


const healthcareFeatures = [
  {
    title: "Experienced Medical Professionals",
    description:
      "Our team includes experienced doctors, nurses, and other healthcare professionals who are dedicated to providing the best possible care to our patients.",
    icon: image1,
  },
  {
    title: "Comprehensive Services",
    description:
      "We offer a wide range of healthcare services, from preventive care to specialized treatment for complex conditions.",
    icon: image2,
  },
  {
    title: "Patient-centered Approach",
    description:
      "We believe in treating each patient as an individual, and we take the time to understand your unique health needs and concerns.",
    icon: image3,
  },
  {
    title: "State-of-the-art Facilities",
    description:
      "Our healthcare center is equipped with the latest technology and equipment to provide our patients with the most advanced care possible.",
    icon: image4,
  },
];

const healthcareStats = [
  {
    value: "20+",
    label: "Years of experience",
  },
  {
    value: "95%",
    label: "Patient satisfaction rating",
  },
  {
    value: "5000+",
    label: "Patients served annually",
  },
  {
    value: "10+",
    label: "Healthcare providers on staff",
  },
  {
    value: "22+",
    label: "Convenient locations in the area",
  },
];

const WhyChooseUs = () => {
  const Features = ({ title, description, icon }) => {
    return (
      <div className="h-full flex flex-col justify-center items-center  xl:justify-start xl:items-start">
        <img src={icon} alt="icon" className="" />
        <h5 className="text-[#274760] text-center sm:text-start font-semibold text-xl xl:text-[22px] py-3 xl:pr-5">
          {title}
        </h5>
        <p className=" text-center lg:text-start text-base text-[#27476085] font-normal">
          {description}
        </p>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-24 xl:pt-5">
        <div className="w-[100%] sm:flex sm:justify-center sm:items-center lg:flex lg:justify-start lg:items-center ">
          <img
            src={whyChooseUsImage}
            alt=""
            className=" sm:max-w-sm  px-5  sm:px-0 "
          />
        </div>
        <div className="">
          <h1 className="text-[#274760] text-center  xl:text-start text-4xl xl:text-5xl font-bold pb-10 ">
            Why Choose Us
          </h1>
          <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gap-8 ">
            {healthcareFeatures.map((feature) => (
              <Features
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 xl:mt-20 rounded-[20px] overflow-hidden shadow-lg">
        <div className="bg-cover bg-center bg-no-repeat bg-gradient-to-t from-[#71B4DA66] to-[#3DA6E399] ">
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5  gap-10 xl:gap-6 px-10 py-12 xl:px-16 xl:py-20 ">
            {healthcareStats.map((healthcare, index) => (
              <div key={index} className="text-center ">
                <h1 className="text-[#274760] font-bold text-3xl xl:text-[40px] pb-4 xl:pb-2">
                  {healthcare.value}
                </h1>
                <p className="text-[#274760] font-medium text-base">
                  {healthcare.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
