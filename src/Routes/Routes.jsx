import {
  createBrowserRouter,
} from 'react-router-dom';
import Main from '../Layout/Main';

import Error from '../errPage/Error';

import Home from '../pages/Home/Home';
import LogIn from '../pages/Login/LogIn';
import Register from '../pages/Register/Register';

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
    ],
  },
]);
