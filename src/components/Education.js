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
    <div className="flex flex-col  mt-10 p-4 " style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Top Side */}
      <div className=" p-4">
        <h2 className="text-4xl font-bold mb-4 " style={{ fontFamily: 'Poppins, sans-serif' }}>Corporate Training</h2>
        <p className="mb-4">Corporate training courses in Blockchain and Cryptocurrency offered by CMP Global Consulting are crafted to enhance employees' grasp of foundational blockchain concepts. This encompasses decentralized ledger technology, cryptography, mining, and smart contracts. Our in-depth training equips professionals with the skills to manage digital wallets, execute transactions securely, and interpret market trends.</p>

      </div>
      {/* Bottom Side */}
      <Slider {...settings} afterChange={handleChangeSlide}>
          {cEducationData.map((item,index) => (
            <div key={item.id} className={`w-64 ${classes.card}`}>
              <div
                className={`card p-6 rounded-lg text-center ${classes.cardContent}`}
                style={{
                  transform: index === currentSlide ? "scale(1.2)" : "scale(1)",
                  backgroundColor: "white",
                  margin: "20px",
                  transition: "transform 0.1s ease-in-out"
                }}
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
        </Slider>
    </div>
  )
}

export default Education;
