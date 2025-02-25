import React from "react";
import Banner from "../../components/Banner";
import ServiceCards from "../../components/ui/card/ServiceCards";
import WhyChooseUs from "../../components/WhyChooseUs";
import FacilitiesAndActivities from "../../components/FacilitiesAndActivities";

const About = () => {
  const ServicesData = [
    {
      title: "Diagnostic testing",
      description:
        "Blood tests, imaging studies, and other tests to diagnose health conditions.",
    },
    {
      title: "Prostate cancer",
      description:
        "Physical therapy, occupational therapy, and other services to help patients recover from injuries.",
    },
    {
      title: "Lung cancer",
      description:
        "Annual checkups, immunizations, and health screenings care preventive.",
    },
    {
      title: "Colorectal cancer",
      description:
        "Counseling, therapy, and other services to help patients manage mental health conditions.",
    },
    {
      title: "Metastatic cancer",
      description:
        "Counseling, therapy, and other services to help patients manage mental health conditions.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 xl:gap-20">
      <Banner
        title="A `cancer patient` refers to  diagnosed with cancer"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <div className="container mx-auto">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex ">
            <h1 className="text-[#274760] text-center sm:text-start font-bold text-4xl xl:text-5xl">
              Provides Our Best Services
            </h1>
          </div>
          {ServicesData.map((service) => (
            <ServiceCards
              title={service.title}
              description={service.description || ""}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <WhyChooseUs />
      </div>

      <div className="container mx-auto">
        {/* <div className="grid grid-cols-2 gap-4">

          <div className="grid xl:grid-cols-2 gap-4">
            <div className="col-span-2">
              <h1 className="text-5xl text-[#274760] font-bold">Our Facilities and Latest Activities</h1>
            </div>

            <img
              src={image1}
              alt=""
              className=" col-span-1 max-w-[100%] h-full "
            />

            <img
              src={image2}
              alt=""
              className=" col-span-1  max-w-[100%] h-full"
            />

            <img
              src={image3}
              alt=""
              className="max-w-[100%] col-span-2 h-full"
            />
          </div>

          <div className="space-y-4">
            <img src={image4} alt="" className="max-w-sm  " />

            <img src={image5} alt="" className="max-w-sm " />
          </div>
        </div> */}
        <FacilitiesAndActivities />
      </div>
    </div>
  );
};

export default About;
