import React from "react";
import Banner from "../../components/Banner";
import OncohubCards from "../../components/ui/card/OncohubCards";
import { onboardingSteps } from "../../components/const/DcomeDoctorData";

const BecomeADoctor = () => {
  return (
    <div className="flex flex-col gap-16 xl:gap-20">
      <Banner
        title="Become a Doctor"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="container mx-auto">
        <div>
          <h1 className=" text-center text-2xl  lg:text-3xl font-semibold pb-7 xl:pb-12">
            Learn all about how to become Doctor on
            <span className="text-primary">Oncohub</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {onboardingSteps.map((step) => (
              <OncohubCards title={step.title}  data={step.description}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeADoctor;
