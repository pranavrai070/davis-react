/* eslint-disable*/
import { useState, useEffect } from 'react';
import HeroData from '../data/HeroData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import { Transition } from '@headlessui/react';

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) =>
        prevIndex === HeroData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change hero every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // const currentHero = HeroData[currentHeroIndex];

  const CustomSlide = ({ hero }) => {
    return (
      <div
        className="heroImageDiv text-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: 'fit',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
       <div className='text-center w-7/12 smallScreenWidth'>
        <p className='text-white text-4xl p-10 bigScreenPadding smallScreenFont'>{hero.description}</p>
        </div>
      </div>
    );
  };
  
  return (
    <>



<Slider {...settings}>
  {HeroData.map((hero, index) => (
    <CustomSlide key={hero.id} hero={hero} />
  ))}
</Slider>
    </>
  );
};

export default Hero;

