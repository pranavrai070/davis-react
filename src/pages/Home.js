import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import News from '../components/News';
import Portfolio from '../components/Portfolio';
import BlockChainService from '../components/BlockChainService';
import Partner from '../components/Partner';


const Home = () => {
  return (
    <div >
    <Hero/>
    <AboutUs/>
    <BlockChainService/>
    <Portfolio/>
    <Partner/>
    <News/>
    </div>
    
  )
}

export default Home;
