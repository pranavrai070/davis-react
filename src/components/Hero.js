import { useState, useEffect } from 'react';
import HeroData from '../data/HeroData';
import {Link} from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


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


    <div className="relative h-screen">

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
            className="object-cover w-full h-full"
          />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-black bg-opacity-50 text-white">
          <Link
        to="/consulting"
        className="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-lg rounded-full hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <span>Explore Our Services</span>
        <ArrowOutwardIcon className="ml-2" />
      </Link>
            <p className="text-3xl font-semibold">{hero.description}</p>
            <div className="flex flex-wrap mt-2">
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 mr-2 mt-1 bg-gray-800 rounded-full text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Transition>
      ))}
    </div>
    </>
  );
};

export default Hero;

