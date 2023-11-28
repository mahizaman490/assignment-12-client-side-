import Swal from "sweetalert2";

const AllParcelCard = ({ allParcel }) => {
  const { name, Requested_Delivery_Date, Booking_Status, Phone_Number, price } = allParcel;

  const handleSubmit = () => {
    Swal.fire("Changed The Booking status ");
  };

  return (
    <div>
      <div className="card lg:card-side px-24">
        <div className="card-body">
          <div className="flex">
            <small className="mt-8 ml-2 font-semibold ">{name}</small>
            <small className="mt-8 ml-2 font-semibold ">{Phone_Number}</small>
            <small className="mt-8 ml-2 font-semibold text-green-600">{Requested_Delivery_Date}</small>
            {/* Display Booking Date */}
            <small className="mt-8 ml-2 font-semibold ">{price}</small>
            <small className="mt-8 ml-2 font-semibold text-red-600">{Booking_Status}</small>

            <button
              className="mt-8 ml-2 font-semibold btn btn-sm"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              Manage
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Change status!</h3>

                {/* Select field for Delivery Person */}
                <select className="input input-bordered mb-2 input-primary w-full max-w-xs">
                  <option value="">Select Delivery Person</option>
                  {/* Add options dynamically based on available delivery persons */}
                  <option value="delivery_person_1">Delivery Person 1</option>
                  <option value="delivery_person_2">Delivery Person 2</option>
                  {/* Add more options as needed */}
                </select>

                {/* Date input field for Approximate Delivery Date */}
                <input
                  type="date"
                  placeholder="Approximate Delivery Date"
                  className="input input-bordered mb-2 input-primary w-full max-w-xs"
                />

                <input
                  type="text"
                  defaultValue="656364b67a7e42209fc1893c"
                  className="input input-bordered mb-2 input-primary w-full max-w-xs"
                  readOnly
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in the form, it will close the modal */}
                    <input
                      onClick={handleSubmit}
                      type="submit"
                      value="assign"
                      className="btn btn-warning"
                    />
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllParcelCard;
