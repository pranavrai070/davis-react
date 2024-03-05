import React from 'react';
import consultingImg from '../assets/hero2.jpg';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import News from '../components/News';

const Consulting = () => {
  return (
    <>
    <div className="relative h-96">
      <img
            src={consultingImg}
            alt={`consulting`}
            className="object-cover w-full h-full"
          />
    </div>
    <Solutions/>
    <Products />
    <News/>

    </>
  )
}

export default Consulting;
