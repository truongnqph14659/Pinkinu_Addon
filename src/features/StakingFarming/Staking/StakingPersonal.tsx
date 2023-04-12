import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const StakingPersonal = () => {
  const { t } = useTranslation();
  const [data] = useState('');

  const NoData = () => {
    return (
      <div className="">
        <p className="text-base font-bold">{t('staking.personal.you_have_not_staked_any')}
          <span className='text-[#FE6290]'> {t('pinkinu')} </span>
          {t('staking.personal.yet')}
        </p>
      </div>
    );
  };

  return (
    <div className="relative mx-auto min-h-[277px] max-w-[1110px] overflow-x-auto rounded-[5px] bg-[#1B1B1B] px-10 py-[20px]">
      <table className="w-full table-auto border-collapse text-left text-sm  text-white">
        <thead className="pl-6">
          <tr className="border-b-[1px] border-[#FFFFFF]">
            <th scope="col" className="px-2 py-3">
              {t('staking.personal.#')}
            </th>
            <th scope="col" className="px-2 py-3">
              {t('staking.personal.staked')}
            </th>
            <th scope="col" className="px-2 py-3">
              {t('staking.personal.rewards_total')}
            </th>
            <th scope="col" className="px-2 py-3">
              {t('staking.personal.rewards_harvested')}
            </th>
            <th scope="col" className="px-2 py-3">
              {t('staking.personal.lock_period')}
            </th>
            <th scope="col" className="px-2 py-3 text-right">
              {t('staking.personal.unlock_time')}
            </th>
            <th scope="col" className="px-2 py-3 text-right">
              {t('staking.personal.actions')}
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data ? (<tr className="">
            <th scope="row" className="space-nowrap px-2 py-4 font-medium">
              1
            </th>
            <td className="px-2 py-4">3</td>
            <td className="px-2 py-4">4</td>
            <td className="px-2 py-4">5</td>
            <td className="px-2 py-4">6</td>
            <td className="px-2 py-4 text-right">2</td>
          </tr>) : (<tr className="">
            <td colSpan={6} className="pt-6 text-center">
              <NoData />
            </td>
          </tr>)}
        </tbody>
      </table>
    </div >
  );
};

export default StakingPersonal;