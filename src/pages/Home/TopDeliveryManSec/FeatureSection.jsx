import React from 'react';

const FeatureSection = () => {
  return (
    <div className="py-16 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl  mb-4 font-semibold bg-gradient-to-r from-green-600 via-green-400 to-green-300  text-transparent   bg-clip-text">Experience Seamless Parcel Management</h2>
          <p className="text-gray-600 mb-6">
            Our advanced parcel management system provides you with a hassle-free experience from booking to delivery.
            Enjoy the convenience of real-time tracking, secure transactions, and a user-friendly dashboard.
          </p>
          <button className="btn bg-green-500 text-white hover:bg-green-600">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 p-6">
          <img
            className="rounded-lg shadow-md"
            src="https://i.ibb.co/3RHF82m/1260530-160789-OV2-WAF-929.jpg"  // Replace with your image URL
            alt="Parcel Management"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
