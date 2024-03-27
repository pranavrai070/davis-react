import React,{useState} from 'react';
import cEducationData from '../data/cEducationData';
import Slider from "react-slick";
import classes from "./Training.module.css";

 const Education = () => {

  const [currentSlide, setCurrentSlide] = useState(0); // Initialize with the index of the first slide

  const handleChangeSlide = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <div className="flex flex-col p-4 lg-moveup-cptraining">
      {/* Top Side */}
      <div className=" p-4 rounded-lg">
        <h2 className="text-4xl font-semibold font mb-4 trainingHeadingMobileFont">Corporate <span className="text-blue-700">Training</span>{" "}</h2>

        <div className='flex justify-start mobileCpTrainingFlex'>
        
        <p className="mb-4 w-1/2 educationIntro trainingSubHeadingMobileFont text-left cpHeadPara1">Corporate training courses in Blockchain and Cryptocurrency offered by CMP Global Consulting are crafted to enhance employees' grasp of foundational blockchain concepts. This encompasses decentralized ledger technology,cryptography, mining, and smart contracts.  </p>

        <p className='ml-8 text-left w-1/2 trainingSubHeadingMobileFont cpHeadPara2'> Our in-depth training equips professionals with the skills to manage digital wallets, execute transactions securely, and interpret market trends.</p>
        </div>
        

      </div>
      {/* Bottom Side */}
      <div className="text-center grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
          {cEducationData.map((item,index) => (
            <div key={item.id} className={`w-84 ${classes.card} transform transition-transform hover:scale-105`}>
              <div
                className={`p-2 bg-transparent border rounded-lg border-black text-center ${classes.cardContent}`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`mx-auto mb-4 ${classes.logo}`}
                />
                <h3 className={classes.heading}>{item.title}</h3>
                <p className={classes.text}>{item.description}</p>
              </div>
            </div>
          ))}
          </div>
    </div>
  )
}

export default Education;
