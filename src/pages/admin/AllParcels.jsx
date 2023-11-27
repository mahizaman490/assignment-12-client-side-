import { useLoaderData } from "react-router-dom";
import AllParcelCard from "./AllParcelCard";


const AllParcels = () => {

    const allParcel = useLoaderData()



    return (
        <div>
            <h1 className="text-4xl text-center">
                All Parcels
            </h1>

            <div className="card lg:card-side px-24">

                <div className="card-body ">

                    <div className="flex ">

                        <small className="mt-8 ml-2 font-semibold ">Name</small>
                        <small className="mt-8 ml-2 font-semibold ">Phone</small>

                        <small className="mt-8 ml-2 font-semibold ">Booking Date</small>
                        <small className="mt-8 ml-2 font-semibold ">Requested Delivery Date
                        </small>
                        <small className="mt-8 ml-2 font-semibold ">Cost
                        </small>
                        <small className="mt-8 ml-2 font-semibold ">Status</small>
                        <small className="mt-8 ml-2 font-semibold ">Manage</small>


                    </div>

                </div>
            </div>

            <div>
                {
                    allParcel.map(allParcel => <AllParcelCard key={allParcel._id} allParcel={allParcel}></AllParcelCard>)
                }
            </div>
        </div>
    );
};

export default AllParcels;