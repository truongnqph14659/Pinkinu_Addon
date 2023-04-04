import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Loading from './component/loading';

import Dashboard from './layout/DashboardLayout';
import Buynow from './features/PopupBuyNow/BuyNow';

// import { withAuth } from "./hocs";
// import DashboardLayout from "./layouts/DashboardLayout";

// const Loader = Component => props =>
//   (
//     <Suspense
//       fallback={<Loading loading={true} className="min-h-[100vh]"></Loading>}
//     >
//       <Component {...props} />
//     </Suspense>
//   );

// Dashboard
// const Dashboard = withAuth()(
//   Loader(lazy(() => import('./features/dashboard')))
// );

// const Room = withAuth()(Loader(lazy(() => import("./features/room/Room"))));
// const Chat = withAuth()(Loader(lazy(() => import("./features/chat/Chat"))));

// Auth

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: '', element: <Navigate to="/buy-now" replace /> },
      {
        path: 'buy-now',
        element: <Buynow />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/" replace />,
  },
];
