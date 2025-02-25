import { div } from "framer-motion/client";
import React from "react";
import image1 from "../assets/images/medical-report.png";
import image2 from "../assets/images/treatment-plan.png";
import image3 from "../assets/images/register.png";

const firstStepCards = [
  { image: image1, step: "Step-1", title: "Register " },
  { image: image2, step: "Step-2", title: "Upload your Medical Reports" },
  { image: image3, step: "Step-3", title: "Receive Treatment Plan" },
];
const FirstStep = () => {
  const FirstStepCard = ({ image, step, title }) => {
    return (
      <div className="flex  flex-col justify-center items-center h-full">
        <img src={image} alt="" className="  max-w-[75%] mb-4" />
        <div className="text-center">
          <p className="text-[#0183CE] font-semibold text-base xl:text-base">
            {step}
          </p>
          <h6 className="  text-xl  xl:text-2xl font-medium xl:px-20">
            {title}
          </h6>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-7 justify-center items-center">
        <h1 className=" text-center text-3xl xl:text-5xl font-semibold">
          Take the first
          <span className="font-normal text-[#0183CE]"> Step</span>
        </h1>

        <p className="max-w-[457px] text-center xl:text-lg font-normal ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  pt-10 xl:pt-10">
        {firstStepCards.map((card) => (
          <FirstStepCard
            image={card.image}
            title={card.title}
            step={card.step}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
