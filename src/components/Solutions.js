import React,{useState} from 'react';
import SolutionData from '../data/SolutionData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DoneIcon from '@mui/icons-material/Done';

 const Solutions = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  return (
    <div className="flex flex-col md:flex-row mt-10 p-4 " style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Left Side */}
      <div className="md:w-3/10 p-4">
        <h2 className="text-4xl font-bold mb-4 " style={{ fontFamily: 'Poppins, sans-serif' }}>Our Services</h2>
        <p className="mb-4">{SolutionData[activeSlide].description}</p>
        <ul className="list-disc ml-0 list-none">
          <li> <DoneIcon/>Item 1</li>
          <li> <DoneIcon/>Item 2</li>
          <li> <DoneIcon/>Item 3</li>
          <li> <DoneIcon/>Item 4</li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="md:w-7/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {SolutionData.map(solution => (
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden">
      <div className="flex items-center p-4">
        
        <div>
        <img className="w-8 h-8 mr-4 rounded-full" src={solution.icon} alt={solution.title} />
          <h5 className="text-lg font-bold">{solution.title}</h5>
          <p className="text-gray-700">{solution.description}</p>
        </div>
      </div>
    </div>
        ))}
      </div>
    </div>
  )
}

export default Solutions;
