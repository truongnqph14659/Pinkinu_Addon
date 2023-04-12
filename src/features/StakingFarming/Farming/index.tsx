import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Farming = () => {
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
            to={'/general/lp-framing/pool'}
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
            to={'/general/lp-framing/personal'}
          >
            <button className=" navigateBtn py-2">Personal</button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Farming;
