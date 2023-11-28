import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Swal from "sweetalert2";


const MydeliveryCard = ({deliveryList}) => {
   
  
const {Phone_Number,name,Receivers_Name,Receiver_Phone_Number,Requested_Delivery_Date,Parcel_Delivery_Address} = deliveryList;

const handleCancel = () =>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, cancel it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "canceled!",
        text: "Your file has been canceled.",
        icon: "success"
      });
    }
  });
  
}

const handledeliver = () =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delivery it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Delivery!",
        text: "Your paecel has been deliveried.",
        icon: "success"
      });
    }
  });

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
           
            
            
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn mt-8 ml-2  btn-sm" onClick={()=>document.getElementById('my_modal_1').showModal()}>See Location</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
   

<div className="mb-4"> 



  <div className="h-full flex items-center justify-center bg-gray-800">
      <MapContainer center={[51.505, -0.09]} zoom={100} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup className="bg-white text-gray-800">
            <div className="p-2">
              <h3 className="text-lg font-semibold mb-2">Your delivery location </h3>
           
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
</div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-secondary">Close</button>
      </form>
    </div>
  </div>
</dialog>
            
            
            
            
            
            
            
            
            
     
            <small onClick={handleCancel} className="mt-8 ml-2 font-semibold btn btn-sm">Cancel </small>
            <small onClick={handledeliver} className="mt-8 ml-2 font-semibold btn btn-sm">Deliver</small>
          </div>
        </div>

{/* 
      map */}
       {/* <div className="h-screen flex items-center justify-center bg-gray-800">
      <MapContainer center={[51.505, -0.09]} zoom={13} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup className="bg-white text-gray-800">
            <div className="p-2">
              <h3 className="text-lg font-semibold mb-2">Location Title</h3>
              <p className="text-sm">A brief description of the location.</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div> */}
      </div>




/////
    );
};

export default MydeliveryCard;

