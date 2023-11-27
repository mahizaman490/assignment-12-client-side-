
const AllParcelCard = ({allParcel}) => {
    const { name,Requested_Delivery_Date,Booking_Status,Phone_Number,price } = allParcel;

    return (
        <div>
        <div className="card lg:card-side px-24">
            <div className="card-body">
                <div className="flex">
                    <small className="mt-8 ml-2 font-semibold ">{name}</small>
                    <small className="mt-8 ml-2 font-semibold ">{Phone_Number}</small>
                    
                    <small className="mt-8 ml-2 font-semibold text-green-600">{Requested_Delivery_Date}</small> {/* Display Booking Date */}
                    <small className="mt-8 ml-2 font-semibold ">{price}</small>
                    <small className="mt-8 ml-2 font-semibold text-red-600">{Booking_Status}</small>
                
                    <small className="mt-8 ml-2 font-semibold btn btn-sm">Manage</small>
                 
                </div>
            </div>
        </div>
    </div>
    );
};

export default AllParcelCard;