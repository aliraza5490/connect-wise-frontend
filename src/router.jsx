import { createBrowserRouter, redirect } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import About from './pages/About';
import Landing from './pages/Landing';
import Premium from './pages/Premium';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import BecomeMentor from './pages/auth/mentor/BecomeMentor';
import Failure from './pages/auth/mentor/Failure';
import Success from './pages/auth/mentor/Success';
import { decodeJWT, getTokenCookie } from './utils/helpers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/pricing',
    element: <Premium />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        loader: () => {
          const token = getTokenCookie();
          if (token) {
            const decode = decodeJWT(token);
            if (decode && decode.exp > Date.now() / 1000) {
              return redirect('/dashboard');
            }
          }
          return null;
        },
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/become-mentor',
        element: <BecomeMentor />,
      },
      {
        path: '/become-mentor/success',
        element: <Success />,
      },
      {
        path: '/become-mentor/failure',
        element: <Failure />,
      },
    ],
  },
  // loader: () => {
  //           const token = getTokenCookie()
  //           if (!token) {
  //               return redirect('/login')
  //           }
  //           const decode = decodeJWT(token)
  //           if (decode && decode.exp < Date.now() / 1000) {
  //               return redirect('/login')
  //           }
  //           return null
  //       },
]);

export default router;
