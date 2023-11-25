// Import necessary dependencies and components

import { FaShieldAlt, FaTruck, FaUser } from 'react-icons/fa';
import CountUp from 'react-countup';

// FeaturesSection component
const FeaturesSection = () => {
  

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 mt-8">
      {/* Features Section */}
      <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
        {/* Feature Card 1 */}
        <div className="mb-4 lg:w-72">
          <div className="feature-card">
            <FaShieldAlt className="icon" />
            <h3>Parcel Safety</h3>
            <p className="text-center lg:text-left">Ensuring the safety and security of your parcels throughout the delivery process.</p>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="mb-4 lg:w-72">
          <div className="feature-card">
            <FaTruck className="icon" />
            <h3>Super Fast Delivery</h3>
            <p className="text-center lg:text-left">Swift and efficient delivery services to get your parcels to their destination in record time.</p>
          </div>
        </div>

        {/* Feature Card 3 - User Friendly */}
        <div className="mb-4 lg:w-72">
          <div className="feature-card">
            <FaUser className="icon" />
            <h3>User Friendly</h3>
            <p className="text-center lg:text-left">A user-friendly experience for easy parcel management and tracking.</p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col items-center lg:items-end">
        {/* Stat Card 1 - Parcels Booked */}
        <div className="mb-4">
          <div className="stat-card">
            <h3>
              <CountUp end={6} duration={2} />
            </h3>
            <p>Parcels Booked</p>
          </div>
        </div>

        {/* Stat Card 2 - Parcels Delivered */}
        <div className="mb-4">
          <div className="stat-card">
            <h3>
              <CountUp end={8} duration={2} />
            </h3>
            <p>Parcels Delivered</p>
          </div>
        </div>

        {/* Stat Card 3 - Users Registered */}
        <div>
          <div className="stat-card">
            <h3>
              <CountUp end={9} duration={2} />
            </h3>
            <p>Users Registered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default FeaturesSection;
