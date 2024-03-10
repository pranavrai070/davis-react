import React, { useState } from 'react';
import backgroundImage from '../assets/background.jpg'; // Import your background image
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import phoneSvg from '../assets/icons/phoneSvg.svg';
import emailSvg from '../assets/icons/emailSvg.svg';
import PhoneInput from 'react-phone-number-input';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy API endpoint for form submission
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Clear form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row p-4 mt-6">
    <form className="w-full md:w-7/12 lg:w-3/5 xl:w-2/3 px-4">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-sm font-medium text-gray-700">Company (Optional)</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your company name"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email address"
          />
        </div>
      </div>
      <div className="mb-4 ml-2">
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-32"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button className=" ml-2 bg-gradient-to-r from-gray-400 to-gray-800 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:from-gray-600 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
            Submit
          </button>
    </form>
    <div className="w-full md:w-5/12 lg:w-2/5 xl:w-1/3 px-4">
      <h2 className="text-2xl font-semibold mb-4">Talk to us anywhere</h2>
        <p className="mb-2 flex items-center mt-6">
        <img src={phoneSvg} alt="phone icon svg" className="h-4 w-4 mr-2" />
        <span>+123456789</span>
      </p>
      <p className="mb-2 flex items-center mt-0">
        <img src={emailSvg} alt="email icon svg" className="h-4 w-4 mr-2" />
        <span>example@example.com</span>
      </p>
    </div>
  </div>
  );
}

export default Contact;
