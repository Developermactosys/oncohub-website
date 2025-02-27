import { div } from "framer-motion/client";
import React from "react";
import image1 from "../assets/images/our-values.png";

const healthcareFeatures = [
  {
    title: "Democratizing Access to Cancer Experts",
    description:
      "There is only one cancer expert for every 1,6000 cancer cases in India. We connect patients to super-specific expert oncologists who are concentrated in major hospitals in Tier 1 cities.",
  },
  {
    title: "Patient-Centric Healthcare",
    description:
      "We use technology to simplify the complex process of cancer care, giving patients the best odds to beat cancer. Access to expert opinions at the right time empowers patients to make informed treatment decisions.",
  },
  {
    title: "End-to-End Empathetic Care",
    description:
      "Our patient advocates help patients navigate treatment decisions. Our treatment plans consider data, experts, and patient preferences before recommending a plan that will ensure the best outcome.",
  },
];

const OurValues = () => {
  const OverValueCard = ({ description, title }) => {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <img src={image1} alt="" />
        <h1 className="  text-lg lg:text-xl text-center  font-semibold py-4 xl:py-6 xl:px-10">{title}</h1>
        <p className="text-center text-base font-normal">{description}</p>
      </div>
    );
  };

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:gap-32 gap-16 pt-10 sm:pt-14 xl:pt-20">
      {healthcareFeatures.map((feature) => (
        <OverValueCard 
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default OurValues;
