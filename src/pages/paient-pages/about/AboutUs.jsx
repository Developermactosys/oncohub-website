import React from "react";
import banner_image_bg from "../.././../assets/images/about-us-home-image.png";
import AboutUsBanner from "../../../components/AboutUsBanner";
import image1 from "../../../assets/images/whychooseimage1.png"
import image2 from "../../../assets/images/whychooseimage2.png"



const AboutUs = () => {
  return (
    <div className="flex flex-col gap-16 xl:gap-20">
      <div
        className=" relative bg-cover bg-center min-h-[290px]  xl:min-h-[500px] -mt-32 -z-10 flex justify-center items-center"
        style={{
          backgroundImage: `url(${banner_image_bg})`,
        }}
      >
        <div className="text-center text-white text-3xl xl:text-4xl font-semibold">
          About Us
        </div>
      </div>

      <div>
        <AboutUsBanner
          title="Why Choose "
          highlightedText="Us?"
          images={[image1,image2]}
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
  );
};

export default AboutUs;
