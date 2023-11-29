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
import Checkout from '../pages/Dashboard/bookAparcel/Checkout';

import Confettii from '../pages/Dashboard/bookAparcel/Confettii';


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
      element:<PrivateRoutes><BookAparcel></BookAparcel></PrivateRoutes>
    },
    {
      path:'updateAparcel/:id',
      element:<PrivateRoutes><UpdateParcel></UpdateParcel></PrivateRoutes>,
      loader:({params}) => fetch(`https://bd-parcel-management-server.vercel.app/bookings/${params.id}`)
    },
    {
      path:'myProfile',
      element:<PrivateRoutes><Myprofile></Myprofile></PrivateRoutes>
    },
    {
      path:'bookings',
      element:<PrivateRoutes><Myparcels></Myparcels></PrivateRoutes>,
      loader: () => fetch('https://bd-parcel-management-server.vercel.app/bookings')

    },
    ///testing for admin
    {
      path:'allParcels',
      element:<PrivateRoutes><AllParcels></AllParcels></PrivateRoutes>,
      loader: () => fetch('https://bd-parcel-management-server.vercel.app/bookings')

    },
    {
      path:'statistics',
      element:<PrivateRoutes><Statistics></Statistics></PrivateRoutes>,
      loader: () => fetch('https://bd-parcel-management-server.vercel.app/bookings')

    },
    {
      path:'allDeliveryMan',
      element:<PrivateRoutes><AllDeliveryMen></AllDeliveryMen></PrivateRoutes>,
      loader: () => fetch('https://bd-parcel-management-server.vercel.app/allDeliveryMan')
    },
    {
      path:'allUsers',
      element:<PrivateRoutes><Allusers></Allusers></PrivateRoutes>,
      loader: () => fetch('https://bd-parcel-management-server.vercel.app/users') //
    },
    /////deliveryman will see
    {
      path:'myDeliveryList',
      element:<PrivateRoutes><MyDeliveryList></MyDeliveryList></PrivateRoutes>,
      loader: () => fetch('https://bd-parcel-management-server.vercel.app/bookings')
   
    },
    {
      path:'myReviews',
      element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
      loader: () => fetch('https://bd-parcel-management-server.vercel.app/users') //
    },
    {
      path:'checkout',
      element:<Checkout></Checkout>,
     
    },
   
    {
      path:'confettii',
      element:<Confettii></Confettii>,
     
    }
  ]





}


]);
