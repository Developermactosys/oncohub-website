import React from "react";
import SectionBanner from "./SectionBanner";
import ButtonBox from "./ui/button/ButtonBox";
import dr_imag from "../assets/images/dr-imgs.png";

const MedicareSupplement = () => {
  return (
    <SectionBanner className="xl:gap-40">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium text-center sm:text-start">
            Medicare Supplement Advocate
          </h1>
          <p className=" text-gray text-sm lg:text-base font-normal py-5  text-center sm:text-start xl:max-w-96">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex  flex-col justify-center items-center  sm:items-start">
            <ButtonBox className=" text-sm px-4 py-2  xl:px-7 xl:py-2  ">
              See More
            </ButtonBox>
          </div>
        </div>
      </div>
      <div className="">
        <img src={dr_imag} alt="" className="w-full max-w-lg" />
      </div>
    </SectionBanner>
  );
};

export default MedicareSupplement;
