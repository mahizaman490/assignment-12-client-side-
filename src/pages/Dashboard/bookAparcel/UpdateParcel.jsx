// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";



import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateParcel = () => {
  // const { user } = useContext(AuthContext);
  const booking = useLoaderData()

  const {_id,Phone_Number,email,name,Receivers_Name,price,Parcel_Weight,Parcel_Type,Receiver_Phone_Number,Requested_Delivery_Date,Delivery_Address_Latitude,Parcel_Delivery_Address,Delivery_Address_longitude}= booking
 


  const calculatePrice = (weight) => {
    const basePrice = 50; // Base price for 1 kg
    const additionalPrice = 50; // Additional price for each extra kg

    // Calculate the price based on the weight
    const calculatedPrice = weight === 1 ? basePrice : basePrice + (weight - 1) * additionalPrice;

    return calculatedPrice;
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const Parcel_Weight = parseFloat(form.Parcel_Weight.value); // Parse the weight as a float

    // Calculate the price based on the weight
    const price = calculatePrice(Parcel_Weight);

    // Update the price input field and set it to read-only
    form.price.value = price;
    form.price.readOnly = true;

    const updatedbooking = {
      Phone_Number: form.Phone_Number.value,
      email: form.email.value,
      name: form.name.value,
      Receivers_Name: form.Receivers_Name.value,
      price: price,
      Parcel_Weight: Parcel_Weight,
      Parcel_Type: form.Parcel_Type.value,
      Receiver_Phone_Number: form.Receiver_Phone_Number.value,
      Requested_Delivery_Date: form.Requested_Delivery_Date.value,
      Delivery_Address_Latitude: form.Delivery_Address_Latitude.value,
      Parcel_Delivery_Address: form.Parcel_Delivery_Address.value,
      Delivery_Address_longitude: form.Delivery_Address_longitude.value,
    };

    console.log(updatedbooking);

    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedbooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire('Your parcel updated successfully!');
        }
      });
  };


  return (
    <div>
      <div className="p-24">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-950 via-green-700 to-green-400 text-transparent bg-clip-text">
          Update This Parcel
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="flex">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  defaultValue={name}
                  readOnly
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Delivery_Address_longitude</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Delivery_Address_longitude"
                  className="input input-bordered w-full"
                  defaultValue={Delivery_Address_longitude}
                />
              </label>
            </div>
          </div>

          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Phone_Number"
                  placeholder="Phone_Number"
                  className="input input-bordered w-full"
                  defaultValue={Phone_Number}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Receivers Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Receivers_Name"
                  placeholder="Receivers_Name"
                  className="input input-bordered w-full"
                  defaultValue={Receivers_Name}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Parcel_Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Parcel_Type"
                  placeholder="Parcel_Type"
                  className="input input-bordered w-full"
                  defaultValue={Parcel_Type}
                />
              </label>
            </div>
          </div>

          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Receiver_Phone_Number</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="Receiver_Phone_Number"
                  className="input input-bordered w-full"
                  placeholder="Receiver_Phone_Number"
                  defaultValue={Receiver_Phone_Number}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  readOnly
                  defaultValue={price}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Parcel_Weight</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="Parcel_Weight"
                  placeholder="Parcel_Weight"
                  className="input input-bordered w-full"
                  defaultValue={Parcel_Weight}
                />
              </label>
            </div>
          </div>

          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Requested_Delivery_Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="Requested_Delivery_Date"
                  className="input input-bordered w-full"
                  placeholder="Requested_Delivery_Date"
                  defaultValue={Requested_Delivery_Date}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Delivery Address latitude</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Delivery_Address_Latitude"
                  className="input input-bordered w-full"
                 
                  defaultValue={Delivery_Address_Latitude}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Mail</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  defaultValue={email}
                  readOnly
                />
              </label>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Parcel_Delivery_Address</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Parcel_Delivery_Address"
                placeholder="Parcel_Delivery_Address"
                className="input input-bordered w-full h-24"
                defaultValue={Parcel_Delivery_Address}
              />
            </label>
          </div>

          <input type="submit" value="Update" className="btn w-full mt-4 bg-gradient-to-r from-[#035317] to-green-600 text-white ..." />
        </form>
      </div>
    </div>
  );
};

export default UpdateParcel;


