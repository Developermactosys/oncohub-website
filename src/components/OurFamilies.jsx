import React from "react";
import SectionBanner from "./SectionBanner";
import image1 from "../assets/images/families-bg.png";
import icon1 from "../assets/icon/familiy-icon.svg";
import icon2 from "../assets/icon/familiy-icon2.svg";
import icon3 from "../assets/icon/familiy-icon3.svg";
import icon4 from "../assets/icon/familiy_icon4.svg";
import { Heart } from "lucide-react";
import { Dna } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { Eye } from "lucide-react";
import { Ambulance } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Heart />,
    title: "Heart Surgery",
    description:
      "Comprehensive and specialized surgical care for heart conditions.",
    link: "#",
  },
  {
    id: 2,
    icon: <Dna />,
    title: "DNA Testing",
    description:
      "Accurate and confidential DNA testing for a variety of purposes.",
    link: "#",
  },
  {
    id: 3,
    icon: <Stethoscope />,
    title: "General Treatment",
    description: "Comprehensive care for a wide range of common health issues.",
    link: "#",
  },
  {
    id: 4,
    icon: <Eye />,
    title: "Eye Treatment",
    description: "Comprehensive care for vision problems and eye health.",
    link: "#",
  },
  {
    id: 5,
    icon: <Stethoscope />,
    title: "Dental Service",
    description: "Comprehensive dental care for a healthy and beautiful smile.",
    link: "#",
  },
  {
    id: 6,
    icon: <Ambulance />,
    title: "Ambulance Services",
    description: "Comprehensive dental care for improving your smile.",
    link: "#",
  },
];

const OurFamilies = () => {
  const ServiceCard = ({ icon, title, description, link }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center ">
        <div className="text-primary text-7xl flex justify-center  ">{icon}</div>
        <h3 className="text-xl font-semibold mt-3">{title}</h3>
        <p className="text-gray-600 text-base my-3">{description}</p>
        <a href={link} className="text-primary font-semibold mt-3 inline-block">
          Service Details →
        </a>
      </div>
    );
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen "
      style={{ backgroundImage: `url(${image1})` }}
    >
      <SectionBanner className="  sm:grid-cols-1   lg:gap-28 sm:gap-10 xl:gap-10 py-10 xl:py-16  xl:px-10">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-[#1B3C74] text-center text-2xl  lg:text-4xl  font-bold">
              Our Service
            </h1>
            <p className="text-[#77829D] xl:text-base text-center font-medium  py-5">
              We offer comprehensive, high-quality solutions tailored to meet
              your unique needs, ensuring satisfaction through expert execution,
              personalized attention, and continuous support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} icon={service.icon} />
          ))}
        </div>
      </SectionBanner>
    </div>
  );
};

export default OurFamilies;
