import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import doctorImage from "../assets/images/doctor-image4.png";
import SliderComponent from "./ui/SliderComponent";
import Slider from "react-slick";

const TestimonialsData = [
  {
    text: "The doctors provided exceptional care and were extremely attentive throughout my entire visit. Every aspect of the treatment was handled with utmost professionalism, ensuring that all my concerns were addressed. I felt genuinely valued and highly recommend their services to anyone in need of quality medical attention.",
    name: "Hattie Peterman",
    position: "CEO, ABC IT Limited",
    image: doctorImage,
  },
  {
    text: "The doctors provided exceptional care and were extremely attentive throughout my entire visit. Every aspect of the treatment was handled with utmost professionalism, ensuring that all my concerns were addressed. I felt genuinely valued and highly recommend their services to anyone in need of quality medical attention.",
    name: "Hattie Peterman",
    position: "CEO, ABC IT Limited",
    image: doctorImage,
  },
  {
    text: "The doctors provided exceptional care and were extremely attentive throughout my entire visit. Every aspect of the treatment was handled with utmost professionalism, ensuring that all my concerns were addressed. I felt genuinely valued and highly recommend their services to anyone in need of quality medical attention.",
    name: "Hattie Peterman",
    position: "CEO, ABC IT Limited",
    image: doctorImage,
  },
];

const OurPatients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const Testimonial = ({ text, name, position, image }) => {
    return (
      <div className="max-w-4xl mx-auto py-9 shadow-lg rounded-lg relative">
        <FaQuoteLeft className="text-red-400 text-3xl absolute top-3 left-4" />

        <p className="text-[#0f1a2285] sm:text-base text-sm font-semibold leading-relaxed pt-7  xl:pt-4">
          {text}
        </p>

        <div className="flex items-center mt-9">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full border-2 object-cover border-primary"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-primary">{name}</h3>
            <p className="text-gray-500 text-sm">{position}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="  text-center pb-7 xl:pb-12">
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Our {" "}
          <span className="text-primary border-b-2 border-b-primary">
            Patients
          </span>
        </h1>
        <div className="flex justify-center items-center my-6 xl:my-7">
          <p className="max-w-[580px] text-center xl:text-base font-normal">
            We prioritize our patients well-being by providing compassionate
            care, personalized treatment plans, and continuous support to ensure
            their health and satisfaction.
          </p>
        </div>

        <div className="">
          <div className="slider-container">
            <Slider
              {...settings}
              className="slider bg-white py-4 px-5  rounded-lg sm:mx-6  xl:mx-10"
            >
              {TestimonialsData.map((item) => (
                <Testimonial
                  text={item.text}
                  name={item.name}
                  position={item.position}
                  image={doctorImage}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPatients;

{
  /* {TestimonialsData.map((item) => (
          <Testimonial
            text={item.text}
            name={item.name}
            position={item.position}
            image={doctorImage}
          />
        ))} */
}
