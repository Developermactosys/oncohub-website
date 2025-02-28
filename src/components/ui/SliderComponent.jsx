import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBigLeft } from 'lucide';


const SliderComponent = ({ settings = {}, children }) => {
  const defaultSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          dots: true,

         
          
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div className="slider-container ">
      <Slider  {...mergedSettings} className=''>{children}</Slider>
    </div>
  );
};

export default SliderComponent;




