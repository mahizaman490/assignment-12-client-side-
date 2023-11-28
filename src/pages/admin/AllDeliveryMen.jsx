import { useLoaderData } from "react-router-dom";
import DeliveryMan from "./DeliveryMan";

const AllDeliveryMen = () => {
    const allDeliveryMan = useLoaderData()
    // const [deliveryMan,setDeliveryMan] = useState(allDeliveryMan)
    console.log(allDeliveryMan);

    return (
        <div>
             <h1 className="text-4xl text-center">
                All DeliveryMen
            </h1>

<div className="grid grid-cols-1 md:grid-cols-2 p-4">
    

{
            allDeliveryMan.map(deliveryMan => <DeliveryMan deliveryMan={deliveryMan} key={deliveryMan._id}></DeliveryMan>)
        }
</div>


        </div>
    );
};

export default AllDeliveryMen;