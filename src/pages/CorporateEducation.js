import React from 'react';
import corporateEducation from '../assets/hero4.jpg';
import Education from '../components/Education';
import FAQ from '../components/FAQ';

 const CorporateEducation = () => {
  return (
    <>
            <div
        className="heroImageDiv text-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${corporateEducation})`,
          backgroundSize: 'fit',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
       <div className='text-center w-7/12 smallScreenWidth'>
        <p className='text-white text-4xl p-10 bigScreenPadding smallScreenFont'>Empower Your Team with Cutting-Edge Blockchain Skills</p>
        </div>
      </div>
    <Education/>
    <FAQ/>

    </>
  )
}

export default CorporateEducation;
