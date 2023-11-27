import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-emerald-700 text-white">
                <ul className="menu">

                    <li><NavLink to='/dashboard/bookAparcel'>Book a Parcel</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'>My Parcels</NavLink></li>
                    <li><NavLink to='/dashboard/myProfile'>My Profile </NavLink></li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;