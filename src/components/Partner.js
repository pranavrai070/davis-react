import React from "react";
import partnerData from "../data/partnerData";
import partnerImg from "../assets/CorporateTraining.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            infinite: true,
            dots: true,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            centerPadding: "40px",
          },
        },
      ],
  };

  return (
    <div className="mt-10 px-10 text-center">
      <Slider {...settings}>
        {partnerData.map((item) => (
          <div className="w-16 h-30 p-6">
            <img src={item.imageurl} className="w-full h-full" alt="partner" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
