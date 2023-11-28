import Swal from "sweetalert2";


const MydeliveryCard = ({deliveryList}) => {
   
  
const {Phone_Number,name,Receivers_Name,Receiver_Phone_Number,Requested_Delivery_Date,Parcel_Delivery_Address} = deliveryList;

const handleCancel = () =>{

  Swal.fire("this percel has been canceled!");
  
}

const handledeliver = () =>{
  Swal.fire("this percel has been delivered!");

}
    return (
        <div className="card lg:card-side px-30">
        <div className="card-body">
          <div className="flex">
          
            <small className="mt-8 ml-2 font-semibold">
           {name}
            </small>
            <small className="mt-8 ml-2 font-semibold text-green-600">
              {Receivers_Name}
            </small>
            
            <small className="mt-8 ml-2 font-semibold">
             {Phone_Number}
            </small>
            <small className="mt-8 ml-2 font-semibold text-red-600">
              {Requested_Delivery_Date}
            </small>
            <small className="mt-8 ml-2 font-semibold text-red-600">
              {Requested_Delivery_Date}
            </small>
            <small className="mt-8 ml-2 font-semibold text-red-600">
              {Receiver_Phone_Number}
            </small>
            <small className="mt-8 ml-2 font-semibold text-red-600">
              {Parcel_Delivery_Address}
            </small>
           
            <small className="mt-8 ml-2 font-semibold btn btn-sm">View Location</small>
            <small onClick={handleCancel} className="mt-8 ml-2 font-semibold btn btn-sm">Cancel </small>
            <small onClick={handledeliver} className="mt-8 ml-2 font-semibold btn btn-sm">Deliver</small>
          </div>
        </div>
      </div>
    );
};

export default MydeliveryCard;