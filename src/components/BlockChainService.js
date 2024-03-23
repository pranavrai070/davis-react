import React from "react";
import icon1 from '../assets/BlockchainConsulting.png';
import icon2 from '../assets/CorporateTraining.png';
import icon3 from '../assets/Web3Consultation.png';

const serviceData = [
  {
    id: 1,
    icon: icon1,
    title: "Blockchain Consulting",
    description:
      "Our expert blockchain consultants customize solutions to match your project needs and recommend the ideal blockchain protocol for your business case.",
    points: [
      "Blockchain Consultancy",
      "Blockchain Development",
      "Quick PoC",
      "Strategy workshop and training",
      "Web3 Consultation",
    ],
  },
  {
    id: 2,
    icon: icon2,
    title: "Corporate Training",
    description:
      "Our blockchain consultants address your corporate training needs by providing customized programs to enhance your team's comprehension of blockchain technology and its relevance to your business environment.",
    points: [
      "Blockchain Foundations",
      "Cryptocurrency 101",
      "Blockchain for Business",
      "Digital Wallets Management",
      "Market Analysis Techniques",
    ],
  },
  {
    id: 3,
    icon: icon3,
    title: "Web3 Development",
    description:
      "A Web3 wallet offers enhanced tracking of customer interactions and transactions across platforms, providing insights into community preferences and purchasing habits for business improvement.",
    points: [
        "Initial Consultation",
        "Market Analysis",
        "Blockchain Selection",
        "System Integration",
        "Security Audits"
    ],
  },
];

const BlockChainService = () => {
  return (
    <div className="mb-8 p-8">
    <h1 className="text-3xl font-semibold mb-4 serviceHeadingMobileFont">What We Do?</h1>
    <div className="justify-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 p-0">
      {serviceData.map((service) => (
        <div key={service.id} className="bg-gray-300 my-4 p-6 rounded-lg shadow-lg BlockChainServiceCard">
          <img src={service.icon} alt="icon" className="w-10" />
          <h2 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h2>
          <p className="mb-4">{service.description}</p>
          <ul>
            {service.points.map((point, index) => (
                <li key={index} className="ml-0">
            <span className="text-green-500 text-2xl">&#8226;</span> {/* Green dot */}
            <span className="ml-2">{point}</span> {/* Text */}
          </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
};

export default BlockChainService;
