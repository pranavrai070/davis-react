/* eslint-disable*/
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import NewsData from "../data/NewsData";

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
    <div className="relative mt-12 p-8 bg-gray-100 dark:bg-gray-800">
      <div className="container relative z-10">
        <h2 className="text-4xl font-semibold mb-8 text-white">Latest News</h2>
        <Slider {...settings}>
          {NewsData.map((news) => (
            <div key={news.id} className="">
              <h3 className="text-3xl font-semibold mb-2 text-white">
                {news.title}
              </h3>
              <p className="text-3xl text-gray-700 mb-4 text-white">
                {news.description}
              </p>
              <p className="text-gray-500 text-white">Source: {news.source}</p>
              <button className="bg-gradient-to-r from-gray-400 to-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-gray-600 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
            Read  More
          </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
