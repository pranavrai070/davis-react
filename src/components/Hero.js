/* eslint-disable*/
import { useState, useEffect } from 'react';
import HeroData from '../data/HeroData';


import { Transition } from '@headlessui/react';

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) =>
        prevIndex === HeroData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change hero every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // const currentHero = HeroData[currentHeroIndex];

  return (
    <>


<div className="relative h-screen mt-12 text-center heroMobileHeight">

{HeroData.map((hero, index) => (
        <Transition
          as="div"
          key={hero.id}
          show={index === currentHeroIndex}
          enter="transition-opacity duration-500 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100 ease-in"
          leaveFrom="opacity-0"
          leaveTo="opacity-20"
          className="absolute inset-0"
        >
          <img
            src={hero.image}
            alt={`Hero ${hero.id}`}
            className="object-cover w-full h-5/6"
          />
          
          <div className={`md:w-2/3 p-6 flex justify-center text-center absolute top-1/3 rounded-lg transform translate-x-20 p-4 bg-black bg-opacity-60 text-white headingText`}>
            <p className={`text-4xl text-center head-text font ${hero.id===2 ? "w-9/12":"null"}`}>{hero.description}</p>
          </div>
         
        </Transition>
      ))}
    </div>
    </>
  );
};

export default Hero;

