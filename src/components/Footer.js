import React from "react";
import { Link } from "react-router-dom";
import instaLogo from "../assets/instagram.png";
import wpLogo from "../assets/whatsapp.png";
import telLogo from "../assets/telegram.png";
import fbLogo from "../assets/facebook.png";
import phoneSvg from "../assets/icons/phoneSvg.svg";
import emailSvg from "../assets/icons/emailSvg.svg";
import adressSvg from "../assets/icons/address.svg";
import facebookSvg from "../assets/icons/facebook.svg";
import instaSvg from "../assets/icons/instagram.svg";
import twitterSvg from "../assets/icons/twitter.svg";
import linkedInSvg from '../assets/icons/linkedin.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-white p-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 border-r border-white">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul>
              <li className="mb-4">
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li className="mt-2 mb-6">
                <Link to="/consulting" onClick={scrollToTop}>
                  Consulting
                </Link>
              </li>
              <li className="mt-2 mb-6">
                <Link to="/corporate-training" onClick={scrollToTop}>
                  Corporate Training
                </Link>
              </li>
              <li className="mt-2 mb-6">
                <Link to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className=" flex flex-col justify-center text-center col-span-1 md:col-span-2 lg:col-span-1 border-r border-white items-center">
            <h4 className="text-xl font-semibold mb-4">
              CMP Global Consultants
            </h4>
            <h4 className="text-lg font-semibold mb-4">
              Social Networks
            </h4>
            <div className="flex justify-center items-center gap-x-5">
              {" "}
              
              {/* Added items-center */}
              <div className="flex items-center mb-2 ">
                <img
                  src={facebookSvg}
                  alt="Facebook icon"
                  className="h-6 w-6 mr-2"
                  style={{ fill: "white" }}
                />
              </div>
              <div className="flex items-center mb-2">
                <img
                  src={linkedInSvg}
                  alt="linkedin icon"
                  className="h-6 w-6 mr-2"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="ml-4 col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p>Email: info@cmpglobalconsultants.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 my-4" />
      <p className="text-center text-sm">
        {" "}
        © 2024 CMP Global Consultant. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
