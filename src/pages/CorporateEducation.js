import React from 'react';
import corporateEducation from '../assets/hero4.jpg';
import Education from '../components/Education';

 const CorporateEducation = () => {
  return (
    <>
    
    <div className="relative h-screen mt-12">
      <img
            src={corporateEducation}
            alt={`consulting`}
            className="object-cover w-full h-5/6"
          />
        <div className="md:w-2/3 absolute left-0 top-1/3 transform  p-4 bg-opacity-50 text-white">
            <p className="text-6xl font-bold">Market Analysis Techniques: Identifying Trends and Making Informed Decisions in the Crypto Market</p>
          </div>
    </div>
    <Education/>
    </>
  )
}

export default CorporateEducation;
