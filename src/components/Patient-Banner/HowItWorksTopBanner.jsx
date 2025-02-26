import React from "react";

const HowItWorksTopBanner = ({ title, image ,spanData}) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl lg:text-3xl  xl:text-4xl font-bold text-center">{title} <span className="text-[#0183CE]">{spanData}</span></h1>
      </div>
      <div className=" my-10 xl:my-16">
        <img src={image} alt="" className="max-w-[100%] object-cover" />
      </div>
    </div>
  );
};

export default HowItWorksTopBanner;
