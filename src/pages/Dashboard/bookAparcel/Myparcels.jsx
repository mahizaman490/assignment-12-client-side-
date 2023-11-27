import { useLoaderData } from "react-router-dom";
import BookingCard from "../BookingCard";
import { useState } from "react";

const Myparcels = () => {

const loadedbookings = useLoaderData()

const [bookings,setBookings] = useState(loadedbookings)

    return (
        <div>
            <h1 className="text-4xl text-center">
                My Bookings 
            </h1>
            
            <div className="card lg:card-side px-24">

                <div className="card-body ">

                    <div className="flex ">

                        <small className="mt-8 ml-2 font-semibold ">Parcel Type</small>
                        <small className="mt-8 ml-2 font-semibold ">Requested Delivery Date</small>
                        <small className="mt-8 ml-2 font-semibold ">Approximate Delivery Date</small>
                        <small className="mt-8 ml-2 font-semibold ">Booking Date</small>
                        <small className="mt-8 ml-2 font-semibold ">Delivery Men ID</small>
                        <small className="mt-8 ml-2 font-semibold ">Booking Status</small>
                        <small className="mt-8 ml-2 font-semibold ">Update</small>
                        <small className="mt-8 ml-2 font-semibold ">Cancel</small>
                        <small className="mt-8 ml-2 font-semibold ">Review </small>
                        <small className="mt-8 ml-2 font-semibold ">Pay</small>
                      
                    </div>

                </div>
            </div>

            <div>
                {
                    bookings.map(booking=><BookingCard key={booking._id} booking={booking} bookings={bookings} setBookings={setBookings} ></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Myparcels;