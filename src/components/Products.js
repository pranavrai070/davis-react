import React from "react";
import { CheckCircle } from "@mui/icons-material";
import productData from "../data/ProductData";
import { styled } from "@mui/material/styles";
import "./Products.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import DoneIcon from "@mui/icons-material/Done";
import Chip from '@mui/material/Chip';

const Product = ({ product, isPopular }) => {
  const BlueTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#3180e8",
      color: "white",
      boxShadow: theme.shadows[1],
      fontSize: 13,
    },
  }));

  return (
    <div className={`max-w-xs mx-auto rounded overflow-hidden`}>
      <div className="p-4 mt-10">
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
              <DoneIcon className="text-green-500 mr-2 mt-2" />
              <div className="">
                <p className="flex items-center">
                  {service.feature}
                  <span className="ml-2">
                    <BlueTooltip title={service.content}>
                      <IconButton>
                        <HelpIcon className="text-blue-500" />
                      </IconButton>
                    </BlueTooltip>
                  </span>
                </p>
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
    <div className="products-container px-10">
   
      <div className="mt-2 translate-y-10 border-t border-black"></div>
      <div className="text-center translate-y-16">
      <Chip label="Most Popular" color="success" className="text-2xl w-48 h-48" size="large" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-2">
        {productData.map((product, index) => (
          <div
            key={product.id}
            className={`relative ${
              index === 1 ? "border-r border-l border-black" : ""
            }`}
          >
            <Product
              product={product}
              isPopular={index === Math.floor(productData.length / 2)}
            />
          </div>
        ))}
      </div>
      <div className="border-b border-black -translate-y-2"></div>
    </div>
  );
};

export default Products;
