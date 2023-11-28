
import { useLoaderData } from "react-router-dom";
import MydeliveryCard from "./MydeliveryCard";

const MyDeliveryList = () => {

    const mydelivery = useLoaderData()
    
    return (
        <div>
              <h1 className="text-4xl text-center">
              My DeliveryList
            </h1>
                <div>
                <div className="card lg:card-side px-24">

<div className="card-body ">

    <div className="flex ">

        <small className="mt-8 ml-2 font-semibold ">Booked Users Name
</small>
        <small className="mt-8 ml-2 font-semibold ">Receivers Name</small>
        <small className="mt-8 ml-2 font-semibold ">Booked Users Phone</small>
        <small className="mt-8 ml-2 font-semibold ">Requested Delivery Date</small>
        <small className="mt-8 ml-2 font-semibold ">Approximate Delivery Date</small>
        <small className="mt-8 ml-2 font-semibold ">Recievers phone number</small>
        <small className="mt-8 ml-2 font-semibold ">Receivers Address
</small>

        <small className="mt-8 ml-2 font-semibold ">Cancel</small>
        <small className="mt-8 ml-2 font-semibold ">Deliver</small>
       
      
    </div>

</div>
       </div>



{

mydelivery.map(deliveryList=><MydeliveryCard deliveryList={deliveryList} key={deliveryList._id}></MydeliveryCard>)






}




                </div>
        </div>
    );
};

export default MyDeliveryList;