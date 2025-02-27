import React from "react";
import banner_image_bg from "../.././../assets/images/about-us-home-image.png";
import AboutUsBanner from "../../../components/AboutUsBanner";
import image1 from "../../../assets/images/about-why-choose-us.png";
import image2 from "../../../assets/images/chooseus-images.png";
import founder_image from "../../../assets/images/founder-image.png";
import OurValues from "../../../components/OurValues";

const AboutUs = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-16 xl:gap-20">
        <div
          className=" relative bg-cover bg-center min-h-[290px]  xl:min-h-[500px] -mt-32 -z-10 flex justify-center items-center"
          style={{
            backgroundImage: `url(${banner_image_bg})`,
          }}
        >
          <div className="text-center text-white text-3xl xl:text-5xl font-semibold">
            About Us
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xl:gap-20  ">
            <AboutUsBanner
              title="Why Choose "
              highlightedText="Us?"
              image={image1}
              points={[
                {
                  title: "Personalized, Compassionate Care",
                  description:
                    "we believe that healthcare is not just about treating a condition—it's about treating the whole person. We take the time to listen to your concerns, understand your unique needs, and collaborate with you to develop a treatment plan that works for you.",
                },
                {
                  title: "Experienced and Highly Qualified Team",
                  description:
                    "Our team is led by [Doctor's Name], who brings over [X] years of experience in [specialty]. [Doctor's Name] is board-certified and has a passion for staying up-to-date with the latest advancements in medicine to provide the best possible care.",
                },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xl:gap-20 ">
            <AboutUsBanner
              ImageClassName="order-1 sm:order-2"
              ContentClassName="order-2 sm:order-1"
              title="How We Work "
              highlightedText="with Patients "
              image={image2}
              points={[
                {
                  title: "Comprehensive Initial Consultation",
                  description:
                    "When you first visit our practice, we take the time to understand your health history, current concerns, and goals. During your initial consultation, we’ll ask detailed questions to get a complete picture of your health, and we’ll discuss any tests or treatments that may be necessary to make an accurate diagnosis...",
                },
                {
                  title: "Personalized Care Plans",
                  description:
                    "We believe that every patient is unique, so we tailor treatment plans to fit your individual needs and preferences. After reviewing your health information, we will work with you to develop a treatment strategy that aligns with your specific situation, lifestyle, and long-term health goals.",
                },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col gap-7 justify-center items-center">
            <h1 className=" text-center text-3xl xl:text-4xl font-semibold">
              Our{" "}
              <span className="font-normal border-b-2 border-b-[#0183CE] text-[#0183CE]">
                Values
              </span>
            </h1>

            <p className="max-w-[457px] text-center xl:text-lg font-normal ">
              We built Oncohub on the belief that every cancer patient deserves
              access to expertise, no matter their location, socioeconomic
              status, or ability to research medical information.
            </p>
          </div>
          <div>
            <OurValues />
          </div>
        </div>

        <div className="container mx-auto">
          <h1 className=" text-center text-3xl xl:text-4xl font-semibold pb-14 xl:pb-20">
            Our{" "}
            <span className="font-normal border-b-2 border-b-[#0183CE] text-[#0183CE]">
              Founders
            </span>
          </h1>

          <div className="grid grid-cols-1 gap-10 lg:gap-20 xl:gap-0 sm:grid-cols-2">
            <div className="flex justify-center items-center">
              <img src={founder_image} alt="founder_image rounded-lg object-cover" />
            </div>
            <div>
              <h1 className=" text-xl  xl:text-3xl font-semibold">
                Murugan Nateson
              </h1>
              <p className="text-primary text-base sm:text-lg font-semibold py-2 sm:py-1 xl:py-3">
                Founder, Chief Executive Officer{" "}
              </p>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
