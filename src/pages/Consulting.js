import React from 'react';
import consultingImg from '../assets/consulting.jpg';
import Solutions from '../components/Solutions';
import News from '../components/News';

const Consulting = () => {
  return (
    <>
    <div className="relative h-screen">
      <img
            src={consultingImg}
            alt={`consulting`}
            className="object-cover w-full h-full"
          />
    </div>
    <Solutions/>
    <News/>

    </>
  )
}

export default Consulting;
