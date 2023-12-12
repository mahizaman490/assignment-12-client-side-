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
        
        
        <div className="stats shadow my-8">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Service taken</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        
        
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
