import React from 'react';
import aboutImg from '../assets/about.jpg';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 lg-moveup-About">
      {/* Left Side */}
      <div className="md:w-7/12">
        <h2 className="text-4xl font-semibold mb-4">About Us</h2>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className=" text-gray-700 aboutUstext">The journey of CMP Global Consultants begins in a manner reminiscent of all great tales—a challenge in dire need of resolution. In 2022, Charles embarked on a mission fueled by his determination to demystify cryptocurrency education, making it readily available to the masses. With the foundational belief that knowledge secures empowerment, Charles Max established CMP Global Consultants.</p>

        <p className=" text-gray-700 mt-2 aboutUstext">
        The firm stands as a beacon of his commitment to rendering blockchain and cryptocurrency technologies approachable and advocating for their widespread adoption. At the heart of his endeavors lies a deep-seated passion for ensuring that cryptographic technologies become a universal asset.
        </p>

        <p className="text-gray-700 mt-2 aboutUstext">CMP Global Consultants is dedicated to offering tailor-made services that cater to the unique requirements of individuals, blockchain enterprises, and organizations keen on integrating this cutting-edge technology into their existing business frameworks. Our mission at CMP Global is to deliver personalized solutions that align perfectly with the distinct needs of each client, ensuring their seamless transition into the innovative realm of blockchain and cryptocurrency.</p>

      </div>


      {/* Right Side */}
      <div className="md:w-5/12 transform transition-transform hover:scale-105 aboutUsImgDiv">
        {/* First Image Card */}
          <img src={aboutImg} alt="Bac Logo" className="w-96 h-96 mx-auto mt-10 mb-0 rounded-lg aboutusImg" />
      </div>
    </div>
  );
}

export default AboutUs;