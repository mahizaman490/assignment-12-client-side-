import { useLoaderData } from "react-router-dom";
import AllParcelCard from "./AllParcelCard";


const AllParcels = () => {

    const allParcel = useLoaderData()



    return (
        <div>
            <h1 className="text-4xl text-center">
                All Parcels
            </h1>

            <div className="card lg:card-side ml-64 w-8/12 mx-auto">

                <div className="card-body ">

                    <div className="flex ">

                        <small className="mt-8 ml-4 font-bold ">Name</small>
                        <small className="mt-8 ml-4 font-bold ">Phone</small>

                        <small className="mt-8 ml-4 font-bold ">Booking Date</small>
                        <small className="mt-8 ml-4 font-bold ">Requested Delivery Date
                        </small>
                        <small className="mt-8 ml-4 font-bold ">Cost
                        </small>
                        <small className="mt-8 ml-4 font-bold ">Status</small>
                       


                    </div>

                </div>
            </div>

            <div className="w-8/12 mx-auto" >
                {
                    allParcel.map(allParcel => <AllParcelCard key={allParcel._id} allParcel={allParcel}></AllParcelCard>)
                }
            </div>
        </div>
    );
};

export default AllParcels;