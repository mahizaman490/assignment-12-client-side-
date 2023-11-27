import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookingCard = ({ booking,bookings,setBookings }) => {
  const { _id, Parcel_Type, Requested_Delivery_Date, Booking_Status } = booking;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Want to cancel?",
      text: "This booking status is pending",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Canceled!",
                text: "Your booking has been canceled.",
                icon: "success",
              });


                const remaining = bookings.filter(boo => boo._id !== _id)
              setBookings(remaining)

            }
          });
      }
    });
  };

  const bookingDate = new Date().toLocaleDateString();

  return (
    <div>
      <div className="card lg:card-side px-24">
        <div className="card-body">
          <div className="flex">
            <small className="mt-8 ml-2 font-semibold">{Parcel_Type}</small>
            <small className="mt-8 ml-2 font-semibold">
              {Requested_Delivery_Date}
            </small>
            <small className="mt-8 ml-2 font-semibold text-green-600">
              {Requested_Delivery_Date}
            </small>
            <small className="mt-8 ml-2 font-semibold">{bookingDate}</small>
            {/* Display Booking Date */}
            <small className="mt-8 ml-2 font-semibold">
              656364b67a7e42209fc1893c
            </small>
            <small className="mt-8 ml-2 font-semibold text-red-600">
              {Booking_Status}
            </small>
            <Link to={`/dashboard/updateAparcel/${_id}`}>
              <small className="mt-8 ml-2 font-semibold btn btn-sm">Update</small>
            </Link>
            {Booking_Status === 'delivered' && (
              <small className="mt-8 ml-2 font-semibold btn btn-sm">Review</small>
            )}
            <small onClick={() => handleDelete(_id)} className="mt-8 ml-2 font-semibold btn btn-sm">Cancel</small>
            <small className="mt-8 ml-2 font-semibold btn btn-sm">Pay</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
