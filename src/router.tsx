import { Navigate, RouteObject } from 'react-router-dom';

import Dashboard from './layout/DashboardLayout';
import GeneralFarmingStaking from './features/StakingFarming';
import StakingPool from './features/StakingFarming/Staking/StakingPool';
import Staking from './features/StakingFarming/Staking';
import Farming from './features/StakingFarming/Farming';
import StakingPersonal from './features/StakingFarming/Staking/StakingPersonal';
import FarmingPool from './features/StakingFarming/Farming/FarmingPool';
import FarmingPersonal from './features/StakingFarming/Farming/FarmingPersonal';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: '', element: <Navigate to="/general" replace /> },
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
            children: [
              {
                path: '',
                element: <Navigate to="/general/lp-framing/pool" replace />,
              },
              { path: 'pool', element: <FarmingPool /> },
              { path: 'personal', element: <FarmingPersonal /> },
            ],
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
