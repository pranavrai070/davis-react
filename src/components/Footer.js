import React from 'react';
import phoneSvg from '../assets/icons/phoneSvg.svg';
import emailSvg from '../assets/icons/emailSvg.svg';
import adressSvg from '../assets/icons/address.svg';
import facebookSvg from '../assets/icons/facebook.svg';
import instaSvg from '../assets/icons/instagram.svg';
import twitterSvg from '../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        
        <div className="mb-4 md:mb-0 pr-4 md:pr-8 pr-8">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <div className="flex items-center mb-2">
          
            <img src={phoneSvg} alt="phone icon svg" className="h-4 w-4 mr-2"/>
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center mb-2">
          <img src={emailSvg} alt="phone icon svg" className="h-4 w-4 mr-2"/>
            <span>info@example.com</span>
          </div>
        </div>
        {/* Our Address */}
        <div className="mb-4 md:mb-0 pr-4 md:pr-8">
          <h4 className="text-lg font-semibold mb-2">Our Address</h4>
          <div className="flex items-center mb-2">
          <img src={adressSvg} alt="phone icon svg" className="h-4 w-4 mr-2"/>
            <span>123 Street Name, City, Country</span>
          </div>
        </div>
        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Social Media</h4>
          <div className="flex items-center mb-2">
          <img src={facebookSvg} alt="phone icon svg" className="h-4 w-4 mr-2"/>
            <span>Facebook</span>
          </div>
          <div className="flex items-center mb-2">
          <img src={twitterSvg} alt="phone icon svg" className="h-4 w-4 mr-2"/>
            <span>Twitter</span>
          </div>
          <div className="flex items-center">
          <img src={instaSvg} alt="phone icon svg" className="h-4 w-4 mr-2"/>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 my-4" />
      <p className="text-center text-sm"> © 2024 Crypto Consultant. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
