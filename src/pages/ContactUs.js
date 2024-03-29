import React from 'react';
import contactBanner from '../assets/contactBanner.jpg'; // Import your background image
import Contact from '../components/Contact';


const ContactUs = () => {
  return (
   <>
     <div className="relative h-screen mt-12 heroMobileHeight heroMobileHeightContact">
      <img
            src={contactBanner}
            alt={`consulting`}
            className="object-cover w-full h-5/6 borderRadiusImg"
          />
    </div>
    <Contact/>
   </>
  );
}

export default ContactUs;
