import { useEffect, useState } from "react";
import DeliveryMan from "./DeliveryMan";

const TopDeliveryMans = () => {

    const [deliveryMans, setDeliveryMans] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/topDelivered')
            .then(res => res.json())
            .then(data => {
                // Sort deliveryMans by the number of parcels delivered in descending order
                // If the number of parcels is the same, sort by the average rating in descending order
                data.sort((a, b) => {
                    if (a.parcelCount === b.parcelCount) {
                        return b.averageRating - a.averageRating;
                    }
                    return b.parcelCount - a.parcelCount;
                });

                setDeliveryMans(data);
            });
    }, []);

    return (
        <div className="mt-36">
            <div className="w-5/12 mx-auto text-center">
                <h1 className="text-xl mb-2 md:text-6xl text-center font-semibold bg-gradient-to-r from-green-600 via-green-400 to-green-300  text-transparent   bg-clip-text">Top Delivery Man </h1>
                <small className="mb-4 bg-gradient-to-r from-green-500 via-green-400 to-green-300  text-transparent  bg-clip-text font-extrabold">
                    The Top Delivery Man Section features the crème de la crème of delivery professionals. Unveiling the top 5 performers, each card meticulously ranks them based on the quantity of parcels delivered and the average of their stellar ratings.
                    Dive into this showcase of outstanding delivery prowess and excellence in service.
                </small>
            </div>
            <hr className='w-4/12 mx-auto border border-green-600 mt-8'/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-8/12 mx-auto md:mt-24 ">
                {deliveryMans.map(deliveryMan => <DeliveryMan key={deliveryMan._id} deliveryMan={deliveryMan} />)}
            </div>
        </div>
    );
};

export default TopDeliveryMans;
