import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 mt-10">
        Privacy Policy for CMP Global Consultants
      </h1>
      <p className="text-gray-800 mb-6 text-center">Last Updated: 27.07.2023</p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">1. Information We Collect</h2>
        <p className="text-gray-800 leading-relaxed">
          <strong>Personal Data:</strong> We collect personally identifiable information that you voluntarily provide to us, such as your name, email address, phone number, and any other details you choose to provide through contact forms or consultations.
        </p>
        <p className="text-gray-800 leading-relaxed">
          <strong>Usage Data:</strong> We automatically collect usage data when you access our services, including details like your IP address, browser type, browser version, our service pages that you visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">2. How We Use Your Information</h2>
        <p className="text-gray-800 leading-relaxed">
          We use your information to provide and improve our services, including:
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-6">
          <li>To facilitate our service offerings.</li>
          <li>To communicate with you about your inquiries or our services.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our services.</li>
          <li>To monitor the usage of our services.</li>
          <li>To detect, prevent, and address technical issues.</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">3. Sharing Your Personal Information</h2>
        <p className="text-gray-800 leading-relaxed">
          We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We may disclose your personal information if required by law or if we believe such action is necessary to comply with legal obligations or protect and defend our rights or property.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">4. Security of Your Personal Information</h2>
        <p className="text-gray-800 leading-relaxed">
          The security of your personal information is important to us. We strive to use commercially acceptable means to protect your personal information but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">5. Your Rights</h2>
        <p className="text-gray-800 leading-relaxed">
          You have the right to access, update, or delete the personal information we have on you. Whenever made possible, you can directly access, update, or request the deletion of your personal information within your account settings section. If you are unable to perform these actions yourself, please contact us for assistance.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-800 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We encourage you to review this Privacy Policy periodically for any changes.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Contact Us</h2>
        <p className="text-gray-800 leading-relaxed">
          If you have any questions about this Privacy Policy or our handling of your personal information, please contact us through the contact information provided on our website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
