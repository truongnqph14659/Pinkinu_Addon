import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './stake.module.scss';

const GeneralFarmingStaking = () => {
  return (
    <div className={`${style.imageBg} text-black`}>
      <div className={`${style.navbar} h-[100px] w-full`}></div>
      <Outlet />
    </div>
  );
};

export default GeneralFarmingStaking;
