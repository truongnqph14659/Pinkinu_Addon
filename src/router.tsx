import { Navigate, RouteObject } from 'react-router-dom';

import Dashboard from './layout/DashboardLayout';
import BuyNow from './features/PopupBuyNow/BuyNow';
import GeneralFarmingStaking from './features/StakingFarming';
import Farming from './features/StakingFarming/Farming';
import StakingPool from './features/StakingFarming/Staking/StakingPool';
import StakingPersonal from './features/StakingFarming/Staking/StakingPersonal';
import Staking from './features/StakingFarming/Staking';

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
      {
        path: '/general',
        element: <GeneralFarmingStaking />,
        children: [
          { path: '', element: <Navigate to="/general/staking" replace /> },
          {
            path: 'staking',
            element: <Staking />,
            children: [
              {
                path: '',
                element: <Navigate to="/general/staking/pool" replace />,
              },
              { path: 'pool', element: <StakingPool /> },
              { path: 'personal', element: <StakingPersonal /> },
            ],
          },
          {
            path: 'lp-framing',
            element: <Farming />,
          },
        ],
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/" replace />,
  },
];
