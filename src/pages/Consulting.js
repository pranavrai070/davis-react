import React from 'react';
import consultingImg from '../assets/hero3.jpeg';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import Banner from '../components/Banner';


const Consulting = () => {
  return (
    <>
        <div
        className="heroImageDiv text-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${consultingImg})`,
          backgroundSize: 'fit',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
       <div className='text-center w-7/12 smallScreenWidth'>
        <p className='text-white text-4xl p-10 bigScreenPadding smallScreenFont'>Optimize Your Crypto Investments: Expert Guidance for Every Investor</p>
        </div>
      </div>
    <Solutions/>
    <Products />
    <Banner/>

    </>
  )
}

export default Consulting;
