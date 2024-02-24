import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Solutions  from '../components/Solutions';
import News from '../components/News';
import Contact from '../components/Contact';


const Home = () => {
  return (
    <div>
    <Hero/>
    <AboutUs/>
    <Solutions/>
    <News/>
    <Contact/>
    </div>
    
  )
}

export default Home;
