import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Staking = () => {
  return (
    <>
      <div>
        <div>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? 'rounded-[5px]  bg-gradient-to-r from-[#24EA5B] to-[#068E55]'
                  : ''
              }`
            }
            to={'/general/staking/pool'}
          >
            <button className="navigateBtn py-2"> Pool</button>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? 'rounded-[5px]  bg-gradient-to-r from-[#24EA5B] to-[#068E55]'
                  : ''
              }`
            }
            to={'/general/staking/personal'}
          >
            <button className=" navigateBtn py-2">Personal</button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Staking;
