/* eslint-disable*/
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
    focusOnSelect: true,
    afterChange: (current) => setActiveSlide(current),
  };

  return (
<div className="flex flex-col mt-0 p-4 lg-moveup-consulting" >
  {/* Our Services */}
  <div className="p-4">
    <h2 className="text-4xl font-semibold mb-4">Our Services</h2>
    <p className="mb-4">Our seasoned team of professionals is equipped to offer you the insightful guidance necessary to optimize your investment strategies. Catering to both newcomers and veteran investors within the crypto sphere, we are here to assist you in crafting a portfolio that aligns seamlessly with your specific objectives and aspirations.</p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
    {SolutionData.map(solution => (
      <div className="w-full bg-transparent border rounded-lg border-black overflow-hidden p-6 transform transition-transform hover:scale-105">
        <div className="flex items-center p-4">
          <div>
            <img className="w-12 h-12 mr-4 mb-2" src={solution.icon} alt={solution.title} />
            <h5 className="text-lg font-semibold">{solution.title}</h5>
            <p className="text-xs text-gray-700 mt-2">{solution.description}</p>
            <p className="text-xs text-gray-700 mt-2">{solution.description2}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Solutions;
