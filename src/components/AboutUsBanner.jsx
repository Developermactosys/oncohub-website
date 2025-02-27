import React from "react";
import cn from "../utils/cn";
const AboutUsBanner = ({
  title,
  points,
  image,
  highlightedText,
  ImageClassName,
  ContentClassName,
}) => {
  return (
    <>
      <div
        className={cn(
          "sm:flex justify-center items-center lg:justify-start   ",
          ImageClassName
        )}
      >
        <img src={image} alt="Doctor Team" className="xl:h-[100%]" />
      </div>

      <div className={cn("flex  flex-col  ", ContentClassName)}>
        <div>
          <h2 className=" text-3xl  xl:text-4xl font-semibold ">
            {title} <span className="text-[#0183CE] border-b-2 border-b-[#0183CE]">{highlightedText}</span>
          </h2>
          <ul className=" my-6 xl:my-9  space-y-10 sm:space-y-4 lg:space-y-5">
            {points.map((point, index) => (
              <li key={index}>
                <h1 className=" text-black text-lg xl:text-2xl font-semibold xl:pb-1.5">
                  {index + 1}. {point.title}
                </h1>
                <p className=" text-base  font-normal xl:w-[500px]">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="mt-6 sm:mt-2 lg:mt-9 xl:mt-14 text-sm lg:text-base px-5  xl:px-6 py-2  bg-blue-500 text-white font-semibold rounded-lg shadow-md">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsBanner;
