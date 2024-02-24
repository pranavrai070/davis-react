import React from 'react';
import BacLogo from '../assets/bac-logo.png';
import CryptoPayLogo from '../assets/CryptoPay.png';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 mt-10">
      {/* Left Side */}
      <div className="md:w-2/3">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ipsum ac arcu efficitur, sit amet finibus dolor fringilla. Nullam nec venenatis nisl. Nam ultrices erat eget leo consequat, ut eleifend metus consectetur. Duis non pulvinar mauris. Nulla facilisi. Vivamus nec eros et tellus luctus posuere.</p>
      </div>
      {/* Right Side */}
      <div className="md:w-2/3 grid grid-cols-1 gap-4">
        {/* First Image Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-70">
          <img src={BacLogo} alt="Bac Logo" className="w-32 h-auto mx-auto mt-4 mb-2" />
          <p className="text-center text-gray-700 font-bold">Proud members of the Blockchain Association of Canada</p>
        </div>
        {/* Second Image Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-70">
          <img src={CryptoPayLogo} alt="CryptoPay Logo" className="w-32 h-auto mx-auto mt-4 mb-2" />
          <p className="text-center text-gray-700 font-bold">One of our many happy and loyal clients. Crypto Pay, out of the USA, is now also in Canada</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
