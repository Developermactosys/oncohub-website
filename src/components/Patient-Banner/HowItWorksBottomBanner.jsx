import { div } from "framer-motion/client";
import React from "react";
import image1 from "../../assets/images/tips-positive.png";
import image2 from "../../assets/images/dealing-hair-loss.png";
import image3 from "../../assets/images/stay-active.png";
import HowItWorkCard from "../ui/card/HowItWorkCard";

const HowItWorkPosts = [
  {
    image: image1,
    heading: "Tips for Staying Positive During",
    highlightedText: "Cancer Treatment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: image2,
    heading: "Dealing with Hair Loss:",
    highlightedText: "Emotional and Practical Tips.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: image3,
    heading: "How to Stay Active While",
    highlightedText: "Undergoing Chemotherapy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
];

const HowItWorksBottomBanner = () => {
 

  return (
    <div className=" flex flex-col  xl:flex-col  gap-10  lg:gap-20  pt-20 xl:pt-28 xl:pb-16">
      {HowItWorkPosts.map((post, index) => (
        <div key={index}>
          <HowItWorkCard
            image={post.image}
            heading={post.heading}
            description={post.description}
            highlightedText={post.highlightedText}
          />
        </div>
      ))}
    </div>
  );
};

export default HowItWorksBottomBanner;
