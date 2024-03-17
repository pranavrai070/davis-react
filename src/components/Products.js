/* eslint-disable*/
import React from "react";
// import CheckIcon from "@mui/icons-material/Check";
import Check from "@mui/icons-material/Check";
import Chip from "@mui/material/Chip";

const Products = () => {
  return (
    <div className="p-4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-4xl">
            Solutions that{" "}
            <span className="text-blue-700">evovle with your business</span>{" "}
          </h2>
          <p className="mt-4 text-3xl text-gray-600">
            Choose the plan that suits your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12">
          {/* Explorer Package */}
          <div className="translate-y-0 bg-transparent border border-black shadow-md  transform transition-transform hover:scale-105">
            <div className="px-6 py-8">
              <h3 className="text-center text-3xl font-semibold text-gray-900">
                Explorer 
              </h3>
              <p className=" text-center font-semibold mt-2 text-2xl text-blue-700">€2950</p>
              <div className="mt-4">
                <div className="flex items-center">
                  <Check />
                  <h4 className=" ml-1 text-lg font-semibold text-gray-900">
                    Web3 Consultation
                  </h4>
                </div>
                <p className="text-xs">
                  Initial evaluation of blockchain requirements for individuals
                  or small businesses.
                </p>

                <div className=" mt-4 flex items-center">
                  <Check />
                  <h4 className=" ml-1 mt-0 text-lg font-semibold text-gray-900">
                    Strategy Workshop and Training
                  </h4>
                </div>
                <p className="text-xs">
                  Entry-level webinar to introduce blockchain technology and its
                  applications.
                </p>

                <div className=" mt-4 flex items-center">
                  <Check />
                  <h4 className=" ml-1 mt-0 text-lg font-semibold text-gray-900">
                    Crypto Analysis
                  </h4>
                </div>
                <p className="text-xs">
                  Basic overview of common cryptocurrency scams and how to
                  identify red flags.
                </p>
              </div>
              <div className="mt-6">
                <button className=" w-full font-semibold bg-gradient-to-r from-gray-400 to-gray-800 text-white px-8 py-2 rounded-lg text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="">

            {/* Innovator Package */}
            <div className="bg-white border border-black shadow-md h-full  transform transition-transform hover:scale-105">
              <div className="px-6 py-8">
                <h3 className=" text-center text-3xl font-semibold text-gray-900">
                  Innovator 
                </h3>
                <p className="text-center mt-2 font-semibold text-2xl text-blue-700">€5950</p>
                <div className="mt-4">
                  <div className=" mt-4 flex items-center">
                    <Check />
                    <h4 className="ml-1 text-md font-semibold text-gray-900">
                      Web3 Consultation
                    </h4>
                  </div>
                  <p className="text-xs">
                    Comprehensive analysis and tailored solutions for blockchain
                    integration for medium-sized enterprises.
                  </p>

                  <div className=" mt-4 flex items-center">
                    <Check />
                    <h4 className=" ml-1 text-lg font-semibold text-gray-900">
                      Cold Storage and Security
                    </h4>
                  </div>
                  <p className="text-xs">
                    Guidance on best practices for securing digital assets and
                    implementing cold storage solutions.
                  </p>

                  <div className="ml-1 mt-4 flex items-center">
                    <Check />
                    <h4 className="text-lg font-semibold text-gray-900">
                      Strategy Workshop and Training
                    </h4>
                  </div>
                  <p className="text-xs">
                    In-depth training session on blockchain technology with case
                    studies relevant to the client's industry.
                  </p>
                </div>
                <div className="mt-6">
                  <button className=" w-full font-semibold bg-gradient-to-r from-gray-400 to-gray-800 text-white px-8 py-2 rounded-lg text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Visionary Package */}
          <div className="translate-y-0  bg-transparent border border-black shadow-md  transform transition-transform hover:scale-105">
            <div className="px-6 py-8">
              <h3 className=" text-center text-3xl font-semibold text-gray-900">
                Visionary 
              </h3>
              <p className=" text-center mt-2 font-semibold text-2xl text-blue-700">Custom</p>
              <div className="mt-4">
                <div className="mt-4 flex items-center">
                  <Check />
                  <h4 className=" ml-1 text-md font-semibold text-gray-900">
                    Web3 Consultation
                  </h4>
                </div>
                <p className="text-xs">
                  Advanced blockchain solutions design and execution for large
                  organizations.
                </p>

                <div className=" mt-4 flex items-center">
                  <Check />
                  <h4 className="ml-1 text-lg font-semibold text-gray-900">
                    Cold Storage and Security
                  </h4>
                </div>
                <p className="text-xs">
                  Full-service security assessment and implementation plan for
                  digital asset protection.
                </p>

                <div className=" mt-4 flex items-center">
                  <Check />
                  <h4 className="ml-1 text-lg font-semibold text-gray-900">
                    Cryptocurrency Integration
                  </h4>
                </div>
                <p className="text-xs">
                  Detailed guidance on integrating cryptocurrency payments into
                  existing business models for revenue growth.
                </p>

                <div className=" mt-4 flex items-center">
                  <Check />
                  <h4 className=" ml-1 text-lg font-semibold text-gray-900">
                    Corporate Training Courses
                  </h4>
                </div>
                <p className="text-xs">
                  Customized training program for employees on blockchain
                  concepts, digital wallets, transactions, and market trends.
                </p>
              </div>
              <div className="mt-6">
                <button className=" w-full font-semibold bg-gradient-to-r from-gray-400 to-gray-800 text-white px-8 py-2 rounded-lg text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
