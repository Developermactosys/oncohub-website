import React, { useState } from "react";
import Banner from "../../components/Banner";
import BecomeDoctorCard from "../../components/ui/card/BecomeDoctorCard";
import images1 from "../../assets/icon/Hours-servic.svg";
import images2 from "../../assets/icon/imergency-care.svg";
import images3 from "../../assets/icon/operating-room.svg";
import images4 from "../../assets/icon/Qualified-Doctor.svg";
import OurFamilies from "../../components/OurFamilies";
import SliderDoctorsCard from "../../components/ui/card/SliderDoctorsCard";
import doctorImage2 from "../../assets/images/doctor-image3.png";
import doctorImage3 from "../../assets/images/doctor-image4.png";
import doctorImage1 from "../../assets/images/asian-male-medical-doctor-2.png";
import SliderComponent from "../../components/ui/SliderComponent";
import blue_ambulance from "../../assets/images/blue-embulance.png";
import blue_lamp from "../../assets/images/blue-lamp.png";
import blue_camera from "../../assets/images/blue-camera.png";
import doctor from "../../assets/images/doctor-white.png";
import HowWeWork from "../../components/HowWeWork";
import AboutCard from "../../components/ui/card/AboutCard";
import OurPatients from "../../components/OurPatients";
import doctorsData from "../../components/const/DoctorData";
import DoctorCard from "../../components/ui/card/DoctorCard";
import OurBlog from "../../components/OurBlog";



const becomeDoctorCard = [
  {
    title: "24 Hours Service",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: images1,
    hoverImage: blue_camera,
  },
  {
    title: "Qualified Doctor",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: doctor,
    hoverImage: images4,
  },
  {
    title: "Operation Theater",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: images3,
    hoverImage: blue_lamp,
  },
  {
    title: "Emergency Care",
    subtitle:
      "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    image: images2,
    hoverImage: blue_ambulance,
  },
];

const healthcareStats = [
  {
    value: "475",
    label: "Patients",
  },
  {
    value: "15",
    label: "Departments",
  },
  {
    value: "47",
    label: "Expert Doctors",
  },
  {
    value: "114",
    label: "Total Labs",
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
  { image: doctorImage2, name: "Dr. Ahmad Khan", specialty: "Neurologist" },
  { image: doctorImage3, name: "Dr. Heena Sachdeva", specialty: "Orthopedics" },
  { image: doctorImage1, name: "Dr. Ankur Sharma", specialty: "Medicine" },
  { image: doctorImage1, name: "Dr. Ankur Sharma", specialty: "Medicine" },
];

const Home = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleCard = (index) => {
    console.log(index);
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-16 xl:gap-20">
      <Banner
        title="Connect with cancer patients by joining OncoHub."
        subtitle="Become a part of OncoHub and bring hope to cancer patients with your expertise. Join our network of dedicated oncologists committed to improving lives through advanced care."
        showSearchFilters={true}
      />

      <div className="container mx-auto ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 px-5  xl:px-24 ">
          {becomeDoctorCard.map((card, index) => (
            <div key={index}>
              <BecomeDoctorCard
                onClick={() => handleCard(index)}
                isClicked={clickedIndex === index}
                title={card?.title}
                subtitle={card?.subtitle}
                image={clickedIndex === index ? card?.hoverImage : card?.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className=" text-center pb-7 xl:pb-12">
          <h1 className=" text-3xl  lg:text-4xl font-semibold">
            How we {" "}
            <span className="text-primary border-b-2 border-b-primary">
              Work
            </span>
          </h1>
          <div className="flex justify-center items-center my-6 xl:my-7">
            <p className="max-w-[580px] text-center xl:text-base font-normal">
              We deliver exceptional results through collaboration, expertise,
              and continuous improvement. Our process ensures quality and
              efficiency, with open communication and a commitment to excellence
              for optimal client satisfaction.
            </p>
          </div>
        </div>
        <div>
          <HowWeWork />
        </div>
      </div>

      <div className=" container mx-auto">
        <AboutCard data={healthcareStats} className="xl:grid-cols-4 xl:gap-0" />
      </div>

      <div className="container mx-auto">
        <div className=" text-center pb-7 xl:pb-12">
          <h1 className=" text-3xl  lg:text-4xl font-semibold">
            Our{" "}
            <span className="text-primary border-b-2 border-b-primary">
              Departments
            </span>
          </h1>
          <div className="flex justify-center items-center my-6 xl:my-7">
            <p className="max-w-[650px] text-center xl:text-base font-normal">
              We provide specialized medical services across various
              departments, ensuring comprehensive care, expert diagnosis, and
              personalized treatment for all your healthcare needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 sm:gap-3 gap-0 ">
          {DiscoverDoctors.map((doctor, index) => (
            <SliderDoctorsCard
              key={index}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              className=""
            />
          ))}
        </div>
        <div className="flex justify-center items-center pt-4 xl:pt-7">
          <button>
            <span className="text-center text-sm sm:text-base text-primary border-b-2 border-b-primary">
              View More
            </span>
          </button>
        </div>
      </div>

      <div className="bg-[#EEF9FF] py-14">
        <OurPatients />
      </div>

      <div className=" container mx-auto ">
        <div className=" text-center pb-7 lg:pb-14 xl:pb-12">
          <h1 className=" text-3xl  lg:text-4xl font-bold">
            Our {" "}
            <span className="text-primary border-b-2 border-b-primary">Doctors</span>
          </h1>
        </div>
        <div className=" px-6">
          <SliderComponent>
            {doctorsData.map((doctor, index) => (
              <div key={index}>
                <DoctorCard
                  image={doctor.image}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  degrees={doctor.degrees}
                  location={doctor.location}
                 
                />
              </div>
            ))}
          </SliderComponent>
        </div>
      </div>

      <div>
        <OurFamilies />
      </div>

      <div className=" container mx-auto ">
       <OurBlog/>
      </div>
    </div>
  );
};

export default Home;
