import React from 'react';
import consultingImg from '../assets/hero3.jpg';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import News from '../components/News';

const Consulting = () => {
  return (
    <>
    <div className="relative h-screen mt-12">
      <img
            src={consultingImg}
            alt={`consulting`}
            className="object-cover w-full h-5/6"
          />
        <div className="md:w-2/3 absolute left-0 top-1/3 transform  p-4 bg-opacity-50 text-white">
            <p className="text-6xl font-bold">Digital Wallets Management: Secure Storage and Handling of Cryptocurrencies</p>
          </div>
    </div>
    <Solutions/>
    <Products />
    <News/>

    </>
  )
}

export default Consulting;
