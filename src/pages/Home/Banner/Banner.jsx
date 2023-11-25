
const Banner = () => {
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" className="hero min-h-screen mb-24" style={{backgroundImage: 'url(https://i.ibb.co/QMjtdNh/closeup-courier-attaching-address-label-package-while-working-office.jpg)'}} >
        <div className="hero-overlay bg-opacity-60" ></div>
        <div className="hero-content text-center text-neutral-content" data-aos="flip-left"  data-aos-duration="3000">
          <div className="max-w-md">
         
          <h1 className="mb-8 text-6xl bg-gradient-to-r from-green-500 via-green-300 to-green-100  text-transparent  bg-clip-text font-semibold">Safe transfer</h1>
            <input type="text" placeholder="Search here" className="input input-bordered input-info w-full max-w-xs mb-4" />
    
            <p className="mb-4 bg-gradient-to-r from-green-500 via-green-300 to-green-100  text-transparent  bg-clip-text font-extrabold">Parcel Pro streamlines logistics with a user-friendly app. Effortlessly manage parcels, track deliveries, and optimize your operations for seamless efficiency.</p>
          </div>
        </div>
      </div>
  );
};

export default Banner;