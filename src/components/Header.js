import React from 'react';
import {Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

 const Header = () => {
  return (
    <nav className=" absolute top-0 left-0 right-0 bg-transparent p-20 z-50">
     <Link to="/" className="absolute top-0 left-0 p-4">
     <h1 className="text-4xl font-bold text-white mt-14">Crypto Consultant</h1>
      </Link>
      <ul className="flex justify-end space-x-4 pr-8">
        <li className="mr-6 mt-2">
          <Link
            exact
            to="/"
            activeClassName="underline"
            className="text-white text-lg  hover:underline"
          >
            Home
          </Link>
        </li>
        <li className="mr-6 mt-2">
          <Link
            to="/consulting"
            activeClassName="underline"
            className="text-white text-lg hover:underline"
          >
            Consulting
          </Link>
        </li>
        <li className="mr-6 mt-2">
          <Link
            to="/corporate-training"
            activeClassName="underline"
            className="text-white text-lg hover:underline"
          >
            Corporate Training
          </Link>
        </li>
        <li className="mr-6">
      <Link
        to="/contact"
        className="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-lg rounded-full hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <span>Contact Us</span>
        <ArrowOutwardIcon className="ml-2" />
      </Link>
    </li>
      </ul>
    </nav>
  );
};

export default Header;
