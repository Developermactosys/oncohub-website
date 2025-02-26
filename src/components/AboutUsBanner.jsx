// import React from 'react'

// const AboutUsBanner = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default AboutUsBanner

import React from "react";

const AboutUsBanner = ({ title, points, images, highlightedText }) => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 ">

      <div className="flex flex-col order-1">
        <img
          src={images[0]}
          alt="Doctor Team"
          className=" w-[80%] sm:w-[60%]  xl:w-[50%]  rounded-lg shadow-lg object-cover"
        />
        <img
          src={images[1]}
          alt="Doctor Patient Care"
          className=" w-[70%] sm:w-[70%] xl:w-[56%]  -mt-16 ml-20  xl:-mt-36 xl:ml-32 rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="order-2">
        <h2 className=" text-3xl  xl:text-4xl font-semibold ">
          {title} <span className="text-blue-500">{highlightedText}</span>
        </h2>
        <ul className=" my-6 xl:my-9  space-y-10 xl:space-y-5">
          {points.map((point, index) => (
            <li key={index}>
              <h1 className=" text-black xl:text-2xl font-semibold xl:pb-1.5">
                {index + 1}. {point.title}
              </h1>
              <p className=" text-base font-normal">{point.description}</p>
            </li>
          ))}
        </ul>

        <button className="mt-6 text-sm px-5  xl:px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUsBanner;
