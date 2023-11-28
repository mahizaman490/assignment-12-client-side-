import { Button, TextField } from "@mui/material";

const Banner = () => {
  return (
    <div className="relative hero min-h-screen mb-24">
      <img
        src="https://i.ibb.co/QMjtdNh/closeup-courier-attaching-address-label-package-while-working-office.jpg"
        alt="Banner Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div data-aos="flip-left" data-aos-duration="3000">
          <div className="max-w-md mx-auto">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-green-500 via-green-300 to-green-100 text-transparent bg-clip-text ">
              Safe transfer
            </h1>
            {/* <input
              type="text"
              placeholder="Search here"
              className="input input-bordered input-success w-full max-w-xs mb-4 mx-auto"
            /> */}
            
            <TextField
  type="text"
  label="Search here"
  variant="outlined"
  className="w-full max-w-xs mb-4 mx-auto"
  InputProps={{
    style: { borderColor: 'green' },
  }}
/>


            <p className="mb-8 text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-green-500 via-green-300 to-green-100 text-transparent bg-clip-text font-extrabold max-w-md mx-auto">
              Parcel Pro streamlines logistics with a user-friendly app. Effortlessly manage parcels, track deliveries, and optimize your operations for seamless efficiency.
            </p>
            <Button variant="contained" color="success">
  Get Started
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
