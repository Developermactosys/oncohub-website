import React from "react";
import DashboardCards from "../../components/ui/card/dashboard-card/DashboardCards";
import icon1 from "../../assets/images/calender-right.png";
import icon2 from "../../assets/images/videocall.png";
import icon3 from "../../assets/images/mike-icon.png";
import icon4 from "../../assets/images/question-chat.png";
import findYourDrImg1 from "../../assets/images/findyourdrimg1.png";
import findYourDrImg2 from "../../assets/images/findYourDrImg2.png";
import findYourDrImg3 from "../../assets/images/findyourdrimg3.png";
import findYourDrImg4 from "../../assets/images/findyourdrimg4.png";
import PatientButton from "../../components/ui/PatientButton";
import doctorImage2 from "../../assets/images/doctor-image3.png";
import doctorImage3 from "../../assets/images/doctor-image4.png";
import doctorImage1 from "../../assets/images/asian-male-medical-doctor-2.png";
import SliderDoctorsCard from "../../components/ui/card/SliderDoctorsCard";
import detoxImage from "../../assets/images/dtox.png";

const statsData = [
  {
    value: "24.4K",
    label: "Book Appointment",
    icon: icon1,
    bgColor: "bg-[#0183CE]",
  },
  {
    value: "24.4K",
    label: "Book Video Consultation",
    icon: icon2,
    bgColor: "bg-[#FF5363]",
  },
  {
    value: "24.4K",
    label: "Book Audio Consultation",
    icon: icon3,
    bgColor: "bg-[#FFA901]",
  },
  {
    value: "24.4K",
    label: "Book Chat Consultation",
    icon: icon4,
    bgColor: "bg-[#24A8FA]",
  },
];
const blogData = [
  {
    id: 1,
    image: detoxImage,
    category: "Understanding Chemotherapy",
    title: "Lorem Ipsum is simply dummy text of the printing and.",
    author: "Rebecca Lee",
    authorImage: doctorImage1,
  },
  {
    id: 2,
    image: detoxImage,
    category: "How to cope with chemotherapy fatigue",
    title: "Lorem Ipsum is simply dummy text of the printing and.",
    author: "Rebecca Lee",
    authorImage: doctorImage1,
  },
  {
    id: 3,
    image: detoxImage,
    category: "Broccoli Salad",
    title: "Lorem Ipsum is simply dummy text of the printing and.",
    author: "Rebecca Lee",
    authorImage: doctorImage1,
  },
];

const DiscoverDoctors = [
  {
    image: doctorImage1,
    name: "Dr.Archana Mahadaven",
    specialty: "Medicine",
  },
  { image: doctorImage2, name: "Dr.Partik Cortez", specialty: "Neurologist" },
  { image: doctorImage3, name: "Dr.Naresh Trahen", specialty: "Orthopedics" },
  { image: doctorImage1, name: "Dr.Archana Mahadaven", specialty: "Medicine" },
];

const BlogCard = ({ image, category, title, author, authorImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full max-w-full  object-cover"
      />
      <div className="p-4">
        <p className="text-base font-medium text-[#77829D]">{category}</p>
        <h3 className="text-sm  xl:text-base  font-semibold text-[#1B3C74] py-2">
          {title}
        </h3>
        <div className="flex items-center mt-2">
          <img
            src={authorImage}
            alt={author}
            className="w-7 h-7 rounded-full"
          />
          <p className=" text-sm  xl:text-base font-semibold text-gray-700 ml-2  text-[#1B3C74]">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

const PatientDashboard = () => {
  return (
    <div>
      <h1 className=" text-lg   lg:text-xl font-normal pb-6">
        Good Morning{" "}
        <span className=" text-xl  lg:text-2xl text-[#0183CE] font-bold">
          Dr. Archana Mahadaven
        </span>
      </h1>
      <div className="  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsData.map((data, index) => (
          <div key={index} className="">
            <DashboardCards
              value={data.value}
              label={data.label}
              icon={data.icon}
              bgColor={data.bgColor}
              className=" shadow-xl flex sm:flex-col items-start py-3 transition-transform hover:shadow-xl duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl`}"
            />
          </div>
        ))}
      </div>

      <div className="my-6">
        <h1 className="text-xl font-bold">Find Your Doctor</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-0 py-5 ">
          <div className=" max-w-[272px]">
            <img src={findYourDrImg1} alt="" className="w-full" />
          </div>
          <div className="max-w-[272px]">
            <img src={findYourDrImg4} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-[272px]">
            <img src={findYourDrImg3} alt="" className="w-full object-cover" />
          </div>
          <div className="max-w-[272px]">
            <img src={findYourDrImg4} alt="" className="w-full object-cover" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <PatientButton
            className="  text-sm py-1.5 px-4 xl:py-2 font-medium"
            type={"button"}
            value={"View More"}
            onChange={() => console.log("")}
          />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold">Experts Doctors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 py-5">
          {DiscoverDoctors.map((doctor, index) => (
            <SliderDoctorsCard
              isRating={true}
              key={index}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              className="  lg:w-52 lg:h-52  xl:w-60 xl:h-60"
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold pb-8">Popular In Cancer Support</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-3   xl:grid-cols-3  lg:gap-3 gap-5 sm:gap-5 xl:gap-20  px-3 sm:px-0 lg:px-0 xl:px-10 ">
          {blogData.map((blog) => (
            <BlogCard
              image={blog.image}
              category={blog.category}
              title={blog.title}
              author={blog.author}
              authorImage={blog.authorImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
