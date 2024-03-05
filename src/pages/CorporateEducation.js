import React from 'react';
import corporateEducation from '../assets/hero4.jpg';
import Education from '../components/Education';

 const CorporateEducation = () => {
  return (
    <>
    
    <div className="relative h-96">
      <img
            src={corporateEducation}
            alt={`consulting`}
            className="object-cover w-full h-full"
          />
    </div>
    <Education/>
    </>
  )
}

export default CorporateEducation;
