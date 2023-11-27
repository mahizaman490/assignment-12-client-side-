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
import AllParcels from '../pages/admin/AllParcels';
import Statistics from '../pages/admin/Statistics';
import AllDeliveryMen from '../pages/admin/AllDeliveryMen';
import Allusers from '../pages/admin/Allusers';
import MyDeliveryList from '../pages/deliveryMan/MyDeliveryList';
import MyReviews from '../pages/deliveryMan/MyReviews';


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

    },
    ///testing for admin
    {
      path:'allParcels',
      element:<AllParcels></AllParcels>,
      loader: () => fetch('http://localhost:5000/bookings')

    },
    {
      path:'statistics',
      element:<Statistics></Statistics>,
      loader: () => fetch('http://localhost:5000/bookings')

    },
    {
      path:'allDeliveryMan',
      element:<AllDeliveryMen></AllDeliveryMen>,
      loader: () => fetch('http://localhost:5000/allDeliveryMan')
    },
    {
      path:'allUsers',
      element:<Allusers></Allusers>,
      loader: () => fetch('http://localhost:5000/users')
    },
    /////deliveryman will see
    {
      path:'myDeliveryList',
      element:<MyDeliveryList></MyDeliveryList>,
      loader: () => fetch('http://localhost:5000/bookings')
   
    },
    {
      path:'myReviews',
      element:<MyReviews></MyReviews>,
   
    }

  ]
}


]);
