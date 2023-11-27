import {
  createBrowserRouter,
} from 'react-router-dom';
import Main from '../Layout/Main';

import Error from '../errPage/Error';

import Home from '../pages/Home/Home';
import LogIn from '../pages/Login/LogIn';
import Register from '../pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import BookAparcel from '../pages/Dashboard/bookAparcel/BookAparcel';
import Myprofile from '../pages/Dashboard/Myprofile';
import PrivateRoutes from '../private/PrivateRoutes';
import UpdateParcel from '../pages/Dashboard/bookAparcel/UpdateParcel';
import Myparcels from '../pages/Dashboard/bookAparcel/Myparcels';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element:<LogIn></LogIn>,
    },
    {
        path:'/register',
        element:<Register></Register>,
    },
    // {
    //     path:'/dashboard',
    //     element:<Dashboard></Dashboard>,
    // },
    ],  
  },

{
  path: 'dashboard',
  element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
  children:[
    {
      path:'bookAparcel',
      element:<BookAparcel></BookAparcel>
    },
    {
      path:'updateAparcel/:id',
      element:<UpdateParcel></UpdateParcel>,
      loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
    },
    {
      path:'myProfile',
      element:<Myprofile></Myprofile>
    },
    {
      path:'bookings',
      element:<Myparcels></Myparcels>,
      loader: () => fetch('http://localhost:5000/bookings')

    }

  ]
}


]);
