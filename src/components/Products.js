import React from "react";
import { CheckCircle } from "@mui/icons-material";
import productData from "../data/ProductData";
import './Products.css';

const Product = ({ product,isPopular }) => {
  return (
    <div className={`max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden ${isPopular ? 'bg-blue-200' : ''}`}>
    {isPopular && <div className="text-center z-10 relative top-0 right-0 bg-blue-300 text-green-500 px-2 py-1 rounded-bl-md">Most Popular</div>}
      <div className="p-4">
        <div className="font text-3xl mb-2 text-center">{product.title}</div>
        <p className="font-bold text-xl text-gray-700 text-base text-center">
          {product.price}
        </p>
        <div className="text-center mt-4">
          <button className="animated-button">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Enquire Now</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
        <ul className="mt-4 mb-6 list-disc list-inside">
          {product.services.map((service) => (
            <li key={service.id} className="flex items-start mb-4">
              <CheckCircle className="text-green-500 mr-2 mt-1" />
              <div>
                <p className="font-bold">{service.feature} : </p>
                <p className="">{service.content} </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-2">
      {productData.map((product,index) => (
        <Product key={product.id} product={product} isPopular={index === Math.floor(productData.length / 2)} />
      ))}
    </div>
  );
};

export default Products;
