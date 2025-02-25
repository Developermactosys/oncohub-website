import React, { useState } from "react";
import Banner from "../../components/Banner";
import MedicareSupplement from "../../components/MedicareSupplement";
import BecomeDoctorCard from "../../components/ui/card/BecomeDoctorCard";
import images1 from "../../assets/icon/Hours-servic.svg";
import images2 from "../../assets/icon/imergency-care.svg";
import images3 from "../../assets/icon/operating-room.svg";
import images4 from "../../assets/icon/Qualified-Doctor.svg";
import OurFamilies from "../../components/OurFamilies";
import BookNow from "../../components/BookNow";
import Slider from "../../components/ui/SliderComponent";
import SliderDoctorsCard from "../../components/ui/card/SliderDoctorsCard";
import doctorImage2 from "../../assets/images/doctor-image3.png";
import doctorImage3 from "../../assets/images/doctor-image4.png";
import doctorImage1 from "../../assets/images/asian-male-medical-doctor-2.png";
import SliderComponent from "../../components/ui/SliderComponent";
import { div } from "framer-motion/client";

const becomeDoctorCard = [
  {
    title: "24 Hours Service",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: images1,
  },
  {
    title: "Qualified Doctor",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: images2,
  },
  {
    title: "Emergency Care",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: images3,
  },
  {
    title: "Operation Theater",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: images4,
  },
];

const DiscoverDoctors = [
  {
    image: doctorImage1,
    name: "Dr. Lesley Hull",
    specialty: "Medicine",
  },
  { image: doctorImage2, name: "Dr. Ahmad Khan", specialty: "Neurologist" },
  { image: doctorImage3, name: "Dr. Heena Sachdeva", specialty: "Orthopedics" },
  { image: doctorImage1, name: "Dr. Ankur Sharma", specialty: "Medicine" },
];

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCard = (index) => setIsClicked(!isClicked);

  return (
    <div className="flex flex-col gap-16 xl:gap-20">
      <Banner
        title="Connect with cancer patients by joining OncoHub."
        subtitle="Become a part of OncoHub and bring hope to cancer patients with your expertise. Join our network of dedicated oncologists committed to improving lives through advanced care."
      />
      <MedicareSupplement />

      <div className="container mx-auto ">
        <div className=" text-center pb-7 xl:pb-12">
          <h1 className=" text-2xl  lg:text-3xl font-medium">
            Learn all about how to become Doctor on  <span className="text-primary">Oncohub</span>
          </h1>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 px-5  xl:px-24 ">
          {becomeDoctorCard.map((card, index) => (
            <div key={index}>
              <BecomeDoctorCard
                onClick={() => handleCard(index)}
                isClicked={isClicked}
                title={card?.title}
                subtitle={card?.subtitle}
                image={card?.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className=" text-center pb-7 xl:pb-12">
          <h1 className=" text-2xl  lg:text-3xl font-medium">
            Discover the story of Doctors on{" "}
            <span className="text-primary">Oncohub</span>
          </h1>
        </div>
        <div>
          <SliderComponent>
            {DiscoverDoctors.map((doctor, index) => (
           
                <SliderDoctorsCard
                  key={index}
                  image={doctor.image}
                  name={doctor.name}
                  specialty={doctor.specialty}
                 
                />
           
            ))}
          </SliderComponent>
        </div>
      </div>
      <div>
        <OurFamilies />
      </div>
      <div>
        <BookNow />
      </div>
    </div>
  );
};

export default Home;
