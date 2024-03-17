import React from 'react';
import corporateEducation from '../assets/hero4.jpg';
import Education from '../components/Education';
import FAQ from '../components/FAQ';

 const CorporateEducation = () => {
  return (
    <>
    
    <div className="relative h-screen mt-12 text-center">
      <img
            src={corporateEducation}
            alt={`consulting`}
            className="object-cover w-full h-5/6"
          />
        <div className="md:w-2/3 absolute left-0 top-1/3 transform  p-4 bg-opacity-50 text-white headingText">
            <p className="text-4xl font head-text">Empower Your Team with Cutting-Edge Blockchain Skills</p>
          </div>
    </div>
    <Education/>
    <FAQ/>

    </>
  )
}

export default CorporateEducation;
