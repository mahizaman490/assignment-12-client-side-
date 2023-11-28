import Swal from "sweetalert2";
import useAxiosPublic from "../../useAxiosPublic";


const Allusertable = ({ user }) => {
    const axiosPublic = useAxiosPublic()
    const { _id, name,number, NumberofparcelBooked, role } = user;
    const handleDeliveryRole = () => {

        axiosPublic.put(`/users?id=${_id}`, { newRole: 'deliveryMan' })
            .then(res => {

                console.log(res.data);
                Swal.fire("He made now a deliveryMan!");    
            })


    }


    const handleMakeAdmin = () => {

        axiosPublic.put(`/users?id=${_id}`, { newRole:'admin' })
            .then(res => {

                console.log(res.data);
                Swal.fire("He made now an admin!");

            })
    }
    return (
        <div>
   
            <div className="card lg:card-side px-24" >
                <div className="card-body">
                    <div className="flex">
                        <small className="mt-8 ml-2 font-semibold ">Name: {name}</small>
                        <small className="mt-8 ml-2 font-semibold ">Number:{number}</small>

                        <small className="mt-8 ml-2 font-semibold text-green-600">Booked:{NumberofparcelBooked}</small> {/* Display Booking Date */}
                   
                       {
                        role === 'deliveryMan'? <small onClick={handleDeliveryRole} className="mt-8 ml-2 font-semibold btn btn-sm">Delivery Men</small>: <small onClick={handleDeliveryRole} className="mt-8 ml-2 font-semibold btn btn-sm">Make Delivery Men</small>
                       }

                        {
                            role === 'admin' ? <small className="mt-8 ml-2 font-semibold btn btn-sm">admin</small> : <small onClick={handleMakeAdmin} className="mt-8 ml-2 font-semibold btn btn-sm">Make admin</small>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Allusertable;