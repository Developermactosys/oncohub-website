import React from "react";
import SectionBanner from "./SectionBanner";
import image1 from "../assets/images/families-bg.png";
import icon1 from "../assets/icon/familiy-icon.svg";
import icon2 from "../assets/icon/familiy-icon2.svg";
import icon3 from "../assets/icon/familiy-icon3.svg";
import icon4 from "../assets/icon/familiy_icon4.svg";

const familiesCards = [
  {
    title: "Happy Patients",
    count: "5000+",
    icon: icon1,
  },
  {
    title: "Hospitals",
    count: "200+",
    icon: icon2,
  },
  {
    title: "Expert Doctors",
    count: "1000+",
    icon: icon3,
  },
  {
    title: "Laboratories",
    count: "700+",
    icon: icon4,
  },
];

const OurFamilies = () => {
  const FamilyCards = ({ icons, title, count }) => {
    return (
      <div className="bg-white     py-4 rounded-lg flex flex-col gap-1 justify-center items-center  shadow-lg xl:py-[26px]">
        <img src={icons} alt="" className="max-w-20" />
        <h1 className="  text-2xl xl:text-4xl font-semibold text-[#1B3C74] py-4  ">
          {count}
        </h1>
        <p className="text-[#77829D] font-medium">{title}</p>
      </div>
    );
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen "
      style={{ backgroundImage: `url(${image1})` }}
    >
      <SectionBanner className="lg:gap-28 sm:gap-20 xl:gap-32 py-10 xl:px-20">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-[#1B3C74] text-2xl  xl:text-4xl  font-medium">
              Our Families
            </h1>
            <p className="text-[#77829D] xl:text-base font-medium xl:leading-[35.8px] py-5">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-6 xl:pl-10  xl:mt-5">
          {familiesCards.map((family) => (
            <>
              <FamilyCards
                title={family.title}
                icons={family.icon}
                count={family.count}
              />
            </>
          ))}
        </div>
      </SectionBanner>
    </div>
  );
};

export default OurFamilies;
