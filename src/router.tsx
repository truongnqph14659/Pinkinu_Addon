import { Navigate, RouteObject } from 'react-router-dom';

import Dashboard from './layout/DashboardLayout';
import BuyNow from './features/PopupBuyNow/BuyNow';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: '', element: <Navigate to="/buy-now" replace /> },
      {
        path: 'buy-now',
        element: <BuyNow />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/" replace />,
  },
];
