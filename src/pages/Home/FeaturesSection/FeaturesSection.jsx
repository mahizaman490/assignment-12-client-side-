// Import necessary dependencies and components
import { FaShieldAlt, FaTruck, FaUser } from 'react-icons/fa';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Button } from '@mui/material';
// ..
AOS.init();

// FeaturesSection component
const FeaturesSection = () => {
  return ( 
<>

<h1 className="text-xl md:text-6xl text-center mb-4 font-semibold bg-gradient-to-r from-green-400 to-green-300  text-transparent   bg-clip-text">Our Features </h1>
<hr className='w-4/12 mx-auto border border-green-600 mt-8'/>
  
    <div className='md:pt-24 '>
     
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-8/12 mx-auto">
      {/* Feature Card 1 */}
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="card bg-gradient-to-r from-[#A2C579] to-[#557C55] text-primary-content hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        <div className="card-body">
          <FaShieldAlt className="icon text-xl text-green-900" />
          <h2 className="card-title">Parcel Safety</h2>
          <p>
            Ensuring the safety and security of your parcels throughout the delivery process.
          </p>
          <div className="card-actions justify-center">
          <Button variant="contained" color="primary">
  Book Now
</Button>
          </div>
        </div>
      </div>

      {/* Feature Card 2 */}
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="card bg-gradient-to-r from-[#A2C579] to-[#557C55] text-primary-content hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        <div className="card-body">
          <FaTruck className="icon text-xl text-green-900" />
          <h2 className="card-title">Super Fast Delivery</h2>
          <p>
            Swift and efficient delivery services to get your parcels to their destination in record
            time.
          </p>
          <div className="card-actions justify-center">
          <Button variant="contained" color="primary">
  Book Now
</Button>
          </div>
        </div>
      </div>

      {/* Feature Card 3 - User Friendly */}
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="card  bg-gradient-to-r from-[#A2C579] to-[#557C55] text-primary-content hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        <div className="card-body ">
          <FaUser className="icon text-xl text-green-900" />
          <h2 className="card-title text-center">User Friendly</h2>
          <p>A user-friendly experience for easy parcel management and tracking.</p>
          <div className="card-actions justify-center">
          <Button variant="contained" color="primary">
  Book Now
</Button>
          </div>
        </div>
      </div>
    </div>
      {/* Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-end w-7/12 mx-auto mt-8 mb-9">
        {/* Stat Card 1 - Parcels Booked */}
        <div
          className="stat-card font-semibold rounded-e-2xl rounded-t-xl p-2 bg-pink-200 hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-red-500">
            <CountUp end={7900} duration={10} />
          </h3>
          <p>Parcels Booked</p>
        </div>

        {/* Stat Card 2 - Parcels Delivered */}
        <div
          className="stat-card font-semibold rounded-e-2xl rounded-t-xl p-2 bg-blue-200 hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-red-500">
            <CountUp end={5000} duration={10} />
          </h3>
          <p>Parcels Delivered</p>
        </div>

        {/* Stat Card 3 - Users Registered */}
        <div
          className="stat-card font-semibold rounded-e-2xl rounded-t-xl p-2 bg-orange-200 hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-red-500">
            <CountUp end={4} duration={10} />
          </h3>
          <p>Users Registered</p>
        </div>
      </div>
    </div>

</>
  );
};

// Export the component
export default FeaturesSection;

