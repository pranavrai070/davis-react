import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import "slick-carousel/slick/slick-theme.css";
import NewsData from "../data/NewsData";
import NewsBanner from "../assets/newsbanner.jpg"; // Assuming this is your background image

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (index) => <div className="customDot" />,
  };

  return (
    <div className="relative" style={{ backgroundColor: "rgb(34,48,53)" }}>
      {/* <img src={NewsBanner} alt="News Banner" className="absolute inset-0 w-full h-full object-cover" /> */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-white">Latest News</h2>
        <Slider {...settings}>
          {NewsData.map((news) => (
            <div key={news.id} className="px-4">
              <h3 className="text-3xl font-bold mb-2 text-white">
                {news.title}
              </h3>
              <p className="text-3xl text-gray-700 mb-4 text-white">
                {news.description}
              </p>
              <p className="text-gray-500 text-white">Source: {news.source}</p>
              <Link
                to={news.link}
                target="blank"
                className="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-lg rounded-full hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <span>Read More</span>
                <ArrowOutwardIcon className="ml-0" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
