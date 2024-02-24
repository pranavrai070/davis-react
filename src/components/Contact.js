import React, { useState } from 'react';
import backgroundImage from '../assets/background.jpg'; // Import your background image
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


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
    <div className="mt-20 flex justify-center items-center h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 bg-opacity-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className=" px-4 py-2 w-full"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="= px-4 py-2 w-full"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className=" px-4 py-2 w-full"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              style={{ resize: 'none' }}
            ></textarea>
          </div>
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-lg rounded-full hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="submit"
          >
            Submit
            <ArrowOutwardIcon className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
