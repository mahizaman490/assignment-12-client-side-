import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Efficient Parcel Handling',
      description: 'Our advanced system ensures quick and efficient handling of parcels, minimizing delivery times.',
    },
    {
      title: 'Real-time Tracking',
      description: 'Track your parcels in real-time, giving you complete visibility from dispatch to delivery.',
    },
    {
      title: 'Secure Transactions',
      description: 'We prioritize the security of your transactions, providing a safe and reliable payment process.',
    },
    {
      title: 'User-Friendly Dashboard',
      description: 'Enjoy a user-friendly dashboard tailored for easy navigation and a seamless user experience.',
    },
    {
      title: 'Professional Delivery Team',
      description: 'Our dedicated delivery team ensures the safe and timely delivery of your parcels to the right destination.',
    },
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-xl mb-8 md:text-6xl text-center font-semibold bg-gradient-to-r from-green-600 via-green-400 to-green-300  text-transparent   bg-clip-text">Benefits of Using Our Parcel Management Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-green-600 via-green-400 to-green-300  text-transparent   bg-clip-text">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
