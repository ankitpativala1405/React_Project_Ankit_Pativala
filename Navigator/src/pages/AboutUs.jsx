import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to the About Us page. Here you can learn more about our mission and values.
        </p>
        <p className="text-gray-700 text-lg">
          We are committed to providing the best service possible. Our team is passionate about creating quality solutions that make a real impact.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
