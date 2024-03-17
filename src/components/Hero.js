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


<div className="relative h-screen mt-12 text-center">

{HeroData.map((hero, index) => (
        <Transition
          as="div"
          key={hero.id}
          show={index === currentHeroIndex}
          enter="transition-transform duration-1000 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0"
        >
          <img
            src={hero.image}
            alt={`Hero ${hero.id}`}
            className="object-cover w-full h-5/6"
          />
          
          <div className="md:w-2/3 absolute top-1/3 transform translate-x-20 p-4 bg-opacity-50 text-white headingText">
            <p className="text-4xl head-text font">{hero.description}</p>
          </div>
         
        </Transition>
      ))}
    </div>
    </>
  );
};

export default Hero;

