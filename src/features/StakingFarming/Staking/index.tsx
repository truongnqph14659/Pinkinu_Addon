import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Staking = () => {
  return (
    <>
      <div className="px-10">
        <div className="my-20 items-center justify-between font-bold text-white md:flex">
          <div className="my-3">
            <h1 className="text-4xl">Staking</h1>
            <p>Total stakers: 1,120</p>
            <p>Total staked: 246,068,942 Arbinu or 28.1% of supply</p>
          </div>
          <div className="max-w-[170px] place-self-end md:max-w-none">
            <div className="backdrop:blur[40px] flex items-center justify-center gap-x-1 rounded-[100px] bg-black py-0.5 ">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'rounded-[100px] bg-[#FE6290] px-5 py-2 '
                      : 'px-2'
                  }`
                }
                to={'/general/staking/pool'}
              >
                <button> Pool</button>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? 'rounded-[100px] bg-[#FE6290] px-5 py-2' : 'px-2'
                  }`
                }
                to={'/general/staking/personal'}
              >
                <button>Personal</button>
              </NavLink>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Staking;
