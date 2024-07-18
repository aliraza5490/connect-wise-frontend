import { createBrowserRouter, redirect } from 'react-router-dom';
import GeneralError from './pages/errors/GeneralError';
import MaintenanceError from './pages/errors/MaintenanceError';
import NotFoundError from './pages/errors/NotFoundError';
import UnauthorisedError from './pages/errors/UnauthorisedError';
import { decodeJWT, getTokenCookie } from './utils/helpers';

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      let page = await import('./pages/Landing');
      return { Component: page.default };
    },
    errorElement: <GeneralError />,
  },
  {
    path: '/about',
    async lazy() {
      let page = await import('./pages/About');
      return { Component: page.default };
    },
    errorElement: <GeneralError />,
  },
  {
    path: '/pricing',
    async lazy() {
      let page = await import('./pages/Premium');
      return { Component: page.default };
    },
    errorElement: <GeneralError />,
  },
  {
    async lazy() {
      let page = await import('./layouts/AuthLayout');
      return { Component: page.default };
    },
    errorElement: <GeneralError />,
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
        async lazy() {
          let page = await import('./pages/auth/Login');
          return { Component: page.default };
        },
      },
      {
        path: '/register',
        async lazy() {
          let page = await import('./pages/auth/Register');
          return { Component: page.default };
        },
      },
      {
        path: '/become-mentor',
        async lazy() {
          let page = await import('./pages/auth/mentor/BecomeMentor');
          return { Component: page.default };
        },
      },
      {
        path: '/become-mentor/success',
        async lazy() {
          let page = await import('./pages/auth/mentor/Success');
          return { Component: page.default };
        },
      },
      {
        path: '/become-mentor/failure',
        async lazy() {
          let page = await import('./pages/auth/mentor/Failure');
          return { Component: page.default };
        },
      },
    ],
  },
  {
    path: '/dashboard',
    errorElement: <GeneralError />,
    async lazy() {
      let page = await import('./layouts/DashboardLayout');
      return { Component: page.default };
    },
    loader: () => {
      const token = getTokenCookie();
      if (!token) {
        return redirect('/login');
      }
      const decode = decodeJWT(token);
      if (decode && decode.exp < Date.now() / 1000) {
        return redirect('/login');
      }
      return null;
    },
    children: [
      {
        path: '',
        async lazy() {
          let page = await import('./pages/dashboard/Dashboard');
          return { Component: page.default };
        },
      },
    ],
  },

  // Error routes
  { path: '/500', element: <GeneralError /> },
  { path: '/404', element: <NotFoundError /> },
  { path: '/503', element: <MaintenanceError /> },
  { path: '/401', element: <UnauthorisedError /> },

  // Fallback 404 route
  { path: '*', element: <NotFoundError /> },
]);

export default router;
