import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

const Staking = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-10">
        <div className="mx-2 my-5 items-center justify-between font-bold text-white sm:flex md:m-14 lg:m-20">
          <div className="my-3">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl lg:text-6xl">Staking</h1>
            <p>{t('staking.personal.total_stakers',{ number: 120 })}</p>
            <p>{t('staking.personal.total_staked',{ total: 23,percent: 123 })}</p>
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