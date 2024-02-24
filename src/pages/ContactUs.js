import React from 'react';
import contactBanner from '../assets/contactBanner.jpg'; // Import your background image
import Contact from '../components/Contact';


const ContactUs = () => {
  return (
   <>
     <div className="relative h-screen">
      <img
            src={contactBanner}
            alt={`consulting`}
            className="object-cover w-full h-full"
          />
    </div>
    <Contact/>
   </>
  );
}

export default ContactUs;
