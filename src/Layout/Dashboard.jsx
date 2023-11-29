// import { useContext, useEffect, useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import useAxiosPublic from "../useAxiosPublic";
// import { AuthContext } from "../providers/AuthProvider";
// // import useUser from "../Api/useUser";

// const Dashboard = () => {
//     const { user } = useContext(AuthContext);
//     const axiosPublic = useAxiosPublic();
//     const [singleuser, setSingleuser] = useState([])
//     console.log(singleuser);
//     useEffect(() => {
//         axiosPublic.get(`/singleUser?email=${user?.email}`).then((res) => {
//             setSingleuser(res.data);
//             console.log(res.data);
//         });
//     }, [axiosPublic, user?.email]);


//     // fetch('http://localhost:5000/singleUser')
//     return (
//         <div className="flex">


//             <div className="w-64 min-h-screen bg-emerald-700 text-white">
//                 <ul className="menu">
//                     {/* ❖ Users Will See - Book a Parcel, My Parcels, My Profile menu in the
// sidebar. */}
//                     {
//                         singleuser.role === "user" && <>

//                             <li><NavLink to='/dashboard/bookAparcel'>Book a Parcel</NavLink></li>
//                             <li><NavLink to='/dashboard/bookings'>My Parcels</NavLink></li>
//                             <li><NavLink to='/dashboard/myProfile'>My Profile </NavLink></li>

//                         </>
//                     }




//                     {
//                         singleuser.role === "deliveryMan" && <>    <li><NavLink to='/dashboard/myDeliveryList'>My Delivery List</NavLink></li>
//                             <li><NavLink to='/dashboard/myReviews'>My Reviews</NavLink></li>
//                         </>


//                     }
//                     {
//                         singleuser.role === "admin" && <>    
//                         <li><NavLink to='/dashboard/allParcels'>All Parcels</NavLink></li>
//                         <li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
//                         <li><NavLink to='/dashboard/allDeliveryMan'>All Delivery Men</NavLink></li>
//                         <li><NavLink to='/dashboard/statistics'>Statistics</NavLink></li>
//                         </>


//                     }





//                 </ul>
//                 {/* ❖ Delivery Men Will See - My Delivery List, My Reviews menu in the
// sidebar */}

//                 {/* 
// Admin Will See - All Parcels, All Users, All Delivery Men, Statistics,
// menu in the sidebar */}

//             </div>
//             <div className="flex-1">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAxiosPublic from "../useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [singleuser, setSingleuser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axiosPublic.get(`/singleUser?email=${user?.email}`).then((res) => {
            setSingleuser(res.data);
        });
    }, [axiosPublic, user?.email]);

    useEffect(() => {
        // Check if user is an admin and navigate to Statistics page by default
        if (singleuser.role === "admin") {
            navigate("/dashboard/statistics");
        }
    }, [singleuser.role, navigate]);

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-emerald-700 text-white">
                <ul className="menu">
                    {singleuser.role === "user" && (
                        <>
                            <li><NavLink to='/dashboard/bookAparcel'>Book a Parcel</NavLink></li>
                            <li><NavLink to='/dashboard/bookings'>My Parcels</NavLink></li>
                            <li><NavLink to='/dashboard/myProfile'>My Profile </NavLink></li>
                        </>
                    )}

                    {singleuser.role === "deliveryMan" && (
                        <>
                            <li><NavLink to='/dashboard/myDeliveryList'>My Delivery List</NavLink></li>
                            <li><NavLink to='/dashboard/myReviews'>My Reviews</NavLink></li>
                        </>
                    )}

                    {singleuser.role === "admin" && (
                        <>
                            <li><NavLink to='/dashboard/allParcels'>All Parcels</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
                            <li><NavLink to='/dashboard/allDeliveryMan'>All Delivery Men</NavLink></li>
                            <li><NavLink to='/dashboard/statistics'>Statistics</NavLink></li>
                        </>
                    )}
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
