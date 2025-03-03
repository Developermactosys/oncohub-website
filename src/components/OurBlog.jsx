import React from "react";
import blogImg1 from "../assets/images/blog-image1.webp";
import blogImg2 from "../assets/images/blog-image2.webp";
import blogImg3 from "../assets/images/blog-image3.webp";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { MoveRight } from "lucide-react";
import Slider from "react-slick";

const blogPosts = [
  {
    image: blogImg1,
    author: "Jane Smith",
    date: "2025-02-20",
    title: "Healthy Eating for Kids",
    description:
      "Discover the best nutrition tips to keep your kids healthy and active...",
    link: "#",
  },
  {
    image: blogImg2,
    author: "John Doe",
    date: "2025-01-07",
    title: "Children's Health: Important Check-ups",
    description: "Regular check-ups are crucial for your child's health and...",
    link: "#",
  },
  {
    image: blogImg3,
    author: "Emma Brown",
    date: "2025-03-10",
    title: "How to Boost Your Child's Immunity",
    description:
      "Learn effective ways to strengthen your child's immune system naturally...",
    link: "#",
  },
];

const OurBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  const BlogCard = ({ image, author, date, title, description, link }) => {
    return (
      <div className="max-w-sm bg-white rounded-xl xl:mx-3 shadow-md overflow-hidden border border-primary h-[370px]">
        <img src={image} alt="Blog" className="w-full  object-cover" />

        <div className="p-4">
          <div className="flex items-center text-gray-500 text-sm space-x-3 mb-2">
            <div className="flex items-center space-x-1">
              <FaUser className="text-primary" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdDateRange className="text-primary" />
              <span>{date}</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

          <p className="text-gray-600 text-sm mt-1">{description}</p>

          <a href={link} className="text-primary flex gap-3 font-semibold mt-2">
            Details <MoveRight />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=" text-center pb-7 xl:pb-12">
        <h1 className=" text-2xl  lg:text-4xl font-semibold">
          Our{" "}
          <span className="text-primary border-b-2 border-b-primary">Blog</span>
        </h1>
        <div className="flex justify-center items-center xl:my-7">
          <p className="max-w-[650px] text-center xl:text-base font-normal">
            Stay informed with our latest health tips, medical news, and expert
            advice. Our blog is dedicated to helping you maintain a healthy
            lifestyle and stay updated on healthcare trends.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative">
          <div className="rounded-xl  shadow-md overflow-hidden border border-primary">
            <img src={blogImg1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className=" bg-primary absolute bottom-2 right-12 rounded-lg text-white p-4">
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm space-x-3 mb-2">
                <div className="flex items-center space-x-1">
                  <FaUser className="text-white" />
                  <span>Emma Brown</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MdDateRange className="text-white" />
                  <span>2025-03-10</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                How to Boost Your Child's Immunity
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {" "}
                Discover the best nutrition tips to keep your kids healthy and
                active...",
              </p>

              <a href={"#"} className="text-primary flex  gap-3 font-semibold ">
                Details <MoveRight />
              </a>
            </div>
          </div>
        </div>

          <div className="slider-container space-x-5">
            <Slider {...settings} className="slider bg-white pb-5 rounded-lg ">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </Slider>
         
        </div>
      </div>
    </>
  );
};

export default OurBlog;
