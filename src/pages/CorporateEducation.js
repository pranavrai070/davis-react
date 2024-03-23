import React from 'react';
import corporateEducation from '../assets/hero4.png';
import Education from '../components/Education';
import FAQ from '../components/FAQ';

 const CorporateEducation = () => {
  return (
    <>
    
    <div className="relative h-screen mt-12 text-center heroMobileHeight">
      <img
            src={corporateEducation}
            alt={`consulting`}
            className="object-cover w-full h-5/6 borderRadiusImg"
          />
        <div className="md:w-2/3 absolute left-0 top-1/3 transform bg-black rounded-lg  p-4 bg-opacity-50 text-white headingText headingTextTraining">
            <p className="text-4xl font head-text bannerFontMobile">Empower Your Team with Cutting-Edge Blockchain Skills</p>
          </div>
    </div>
    <Education/>
    <FAQ/>

    </>
  )
}

export default CorporateEducation;
