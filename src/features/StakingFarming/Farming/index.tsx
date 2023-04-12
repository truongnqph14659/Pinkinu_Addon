import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Farming = () => {
  return (
    <>
      <div className="px-10">
        <div className="my-20 items-center justify-between font-bold text-white md:flex">
          <div className="my-3">
            <p className='text-6xl font-extrabold text-white'> LP Farming</p>
          </div>
          <div className="max-w-[170px] place-self-end md:max-w-none">
            <div className="backdrop:blur[40px] flex items-center justify-center gap-x-1 rounded-[100px] bg-black py-0.5 ">
              <NavLink
                className={({ isActive }) =>
                  `${isActive
                    ? 'rounded-[100px] bg-[#FE6290] px-5 py-2 '
                    : 'px-2'
                  }`
                }
                to={'/general/lp-framing/pool'}
              >
                <button> Pool</button>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'rounded-[100px] bg-[#FE6290] px-5 py-2' : 'px-2'
                  }`
                }
                to={'/general/lp-framing/personal'}
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

export default Farming;
