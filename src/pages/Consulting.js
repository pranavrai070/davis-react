import React from 'react';
import consultingImg from '../assets/hero3.png';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import Banner from '../components/Banner';


const Consulting = () => {
  return (
    <>
    <div className="relative h-screen mt-12 text-center heroMobileHeight">
      <img
            src={consultingImg}
            alt={`consulting`}
            className="object-cover w-full h-5/6"
          />
        <div className="md:w-2/3 absolute left-0 top-1/3 transform rounded-lg bg-black p-4 bg-opacity-50 text-white headingText">
            <p className="text-4xl font head-text">Optimize Your Crypto Investments:<br/> Expert Guidance for Every Investor</p>
          </div>
    </div>
    <Solutions/>
    <Products />
    <Banner/>

    </>
  )
}

export default Consulting;
