import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Icon } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from "@mui/material";
const Navbar = () => {
  
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => Swal.fire("your logout is successfull!"))
      .catch(error => console.error(error))
  }
  const navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>

    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
  </>

  const nav2link = <>
  <li><NavLink>{user?.displayName}</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

    <li><NavLink onClick={handleLogOut} className="btn btn-warning  btn-sm ml-24">Logout</NavLink></li>


  </>
  return (
    <div className="navbar bg-[#707070]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case md:text-2xl">  
        <img className="rounded-full w-10  mt-1" src='https://i.ibb.co/pnh4mz4/2080823-272849-P5-U4-NT-925.jpg' />
        <h1 className="font-bold bg-gradient-to-r from-green-500 via-green-400 to-green-300  text-transparent   bg-clip-text">BD Parcel</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {navlinks}
          <Icon component={NotificationsIcon} className="icon text-2xl mt-2" />
        </ul>
      </div>
      <div className="navbar-end md:ml-48 lg:ml-72 hidden md:block  ">
      
        {
            user ?.email ? <>
            
        <div className="flex">
          <div className="dropdown">
            <label tabIndex={0} className="btn rounded-full btn-ghost w-20 ">
              <img className="rounded-full mt-4" src={user.photoURL} />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {nav2link}
            </ul>
          </div>
        </div>
            <a onClick={handleLogOut} >  <Button variant="contained" color="error">
  Logout
</Button></a>  
            </>
    : <Link to='login'>
       <a >  <Button variant="contained" color="success">
  logIn
</Button></a><Icon component={VpnKeyIcon} className="icon text-2xl mt-2 ml-2 text-white" />
    </Link>

        }
      </div>

      


    </div>
  );
};

export default Navbar;