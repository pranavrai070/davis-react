import React from 'react';
import corporateEducation from '../assets/corporate_education.jpg';
import Education from '../components/Education';

 const CorporateEducation = () => {
  return (
    <>
    
    <div className="relative h-screen">
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
