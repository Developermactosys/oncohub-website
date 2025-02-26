import React from "react";
import HowItWorksTopBanner from "../../../components/Patient-Banner/HowItWorksTopBanner";
import image from "../../../assets/images/popular-image.png";
import HowItWorksMidBanner from "../../../components/Patient-Banner/HowItWorksMidBanner";
import cope from "../../../assets/images/cope-image.png";
import HowItWorksBottomBanner from "../../../components/Patient-Banner/HowItWorksBottomBanner";
const HowItWork = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-16 xl:gap-20">
        <div className="pt-10  xl:pt-14">
          <HowItWorksTopBanner
            title={"Popular in"}
            image={image}
            spanData="Cancer Support"
          />
          <HowItWorksMidBanner
            image={cope}
            title={"How to cope with"}
            spanData={" Chemotherapy Fatigue"}
            fullDescription={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
          <HowItWorksBottomBanner />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
