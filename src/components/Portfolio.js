import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-3xl">
          Building a highly <span className="text-blue-600">PROFITABLE</span>{" "}
          crypto portfolio is a skill. Let us help you.
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover your best next steps for building the wealth you've always
          desired with a free 1:1 Strategy Session Today.
        </p>
        <ul className="mt-8 space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">
              Gain full clarity on the core portfolio performance opportunities
              and most pressing challenges facing you and your investments.
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">
              Connect with top-rated crypto education and coaching provider for
              new and current investors.
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">
              Get a detailed roadmap to elevate your investing to the next
              level.
            </p>
          </li>
        </ul>
        <div className="mt-10">
          <button className="bg-gradient-to-r from-gray-400 to-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-gray-600 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
            Schedule a FREE Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
