
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/QMjtdNh/closeup-courier-attaching-address-label-package-while-working-office.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
         
          <h1 className="mb-5 text-6xl font-semibold">Safe transfer</h1>
            <input type="text" placeholder="Search here" className="input input-bordered input-info w-full max-w-xs mb-2" />
    
            <p className="mb-4 ">Parcel Pro streamlines logistics with a user-friendly app. Effortlessly manage parcels, track deliveries, and optimize your operations for seamless efficiency.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;