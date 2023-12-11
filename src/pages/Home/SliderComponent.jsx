
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className='my-40 px-4'>
      <Slider {...settings}>
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            margin: '0 10px',
          }}
        >
          <h2 className='text-center text-4xl font-bold bg-gradient-to-r from-green-600 via-green-400 to-green-300  text-transparent   bg-clip-text mb-4'>About Our Staff</h2>
          <p className='text-center text-xl'>
            Our dedicated team of professionals is committed to providing exceptional service to our clients.
            Meet the experts who make it all possible. We believe in teamwork, collaboration, and delivering
            high-quality solutions to our valued customers.
          </p>
        </div>
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            margin: '0 10px',
          }}
        >
          <h2 className='text-center text-4xl  bg-gradient-to-r from-green-600 via-green-400 to-green-300  text-transparent   bg-clip-text mb-4'>Expertise at Your Service</h2>
          <p className='text-center text-xl'>
            With years of experience and a passion for excellence, our staff brings a wealth of knowledge
            to ensure your satisfaction. We stay updated with the latest industry trends and technologies
            to provide cutting-edge solutions tailored to your specific needs.
          </p>
        </div>
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            margin: '0 10px',
          }}
        >
          <h2 className='text-center text-4xl  bg-gradient-to-r from-green-600 via-green-400 to-green-300  text-transparent   bg-clip-text mb-4'>Customer-Centric Approach</h2>
          <p className='text-center text-xl'>
            We prioritize your needs and work collaboratively to deliver personalized solutions.
            Your success is our success. Our customer-centric approach ensures that every project
            is treated with utmost care, and we strive to exceed your expectations at every step.
          </p>
        </div>
        {/* Add more slides with text content as needed */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
