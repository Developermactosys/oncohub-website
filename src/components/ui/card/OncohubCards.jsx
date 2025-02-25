import React from "react";

const OncohubCards = ({ title, data }) => {
  return (
    <div className="  shadow-2xl shadow-[#e2f0f8] rounded-[23px] h-full mx-3 sm:mx-0">
      <div className=" border-b-2 border-b-[#0183CE]">
        <h1 className=" text-lg   xl:text-xl font-bold py-4  xl:py-6 px-7">{title}</h1>
      </div>
      <div className="py-5 px-4 ">
        <ul className=" flex flex-col gap-3">
          {data.map((points) => (
            <li className="text-sm lg:text-base font-semibold text-[#263238] flex  gap-3">
              <span
                style={{  
                  color: "#0183CE",
                  fontSize: 30,
                }}
              >
                •
              </span>{" "}
              {points}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OncohubCards;
