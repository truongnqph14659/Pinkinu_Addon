import { useTranslation } from 'react-i18next';
import style from '../stake.module.scss';
const FarmingPool = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-[350px] rounded-lg bg-[#000000] pb-2 ">
      <div className={`relative min-h-[100px] ${style.header_box} `}>
        <div className="flex">
          <div className="mx-7 mt-5 basis-2/3 items-center">
            <div className="flex items-center gap-2">
              <img src="/images/icons/icon-token-pinkinu.png" alt="" />
              <h1 className="font-black text-[#FFFFFF]">{t('days',{ day: 14 })}</h1>
            </div>
          </div>
          <div className="absolute bottom-0 right-4 max-w-[80px] basis-1/3">
            <img src="/images/general/icon-pinkinu.png" alt="" />
          </div>
        </div>
      </div>

      <div className="mx-7 my-3 text-base text-[#FFFFFF]">
        <p className="my-5 font-bold text-[#FE6290]">
          {t('reward_pool',{ percent: 35 })}
        </p>
        <div className="my-3 flex">
          <p className="font-normal">{t('farming.pool.currently_staked')}</p>
          <p className="ml-auto font-bold">770 {t('farming.pool.lp')}</p>
        </div>
        <div className="my-3 flex">
          <p className="font-normal">{t('farming.pool.rewards_unclaimed')}</p>
          <div className="ml-auto  flex items-center gap-1">
            <p className="font-bold">770</p>
            <img className="h-4 w-4" src="/images/icons/icon-token-pinkinu.png" alt="" />
          </div>
        </div>
        <div className="my-3 flex">
          <p className="font-normal">{t('farming.pool.total_staked')}</p>
          <p className="ml-auto font-bold">770 {t('farming.pool.lp')}</p>
        </div>
        <div className="my-3 flex">
          <p className="font-normal">{t('farming.pool.total_withdrawn')}</p>
          <p className="ml-auto font-bold">770 {t('farming.pool.lp')}</p>
        </div>
        <div className="my-6 border-b-[1px] border-white"></div>
        <div className="flex font-bold">
          <p className="font-normal">{t('balance')}</p>
          <p className="ml-auto font-bold">0.00</p>
        </div>
        <div className="my-4 h-14 rounded-lg">
          <input
            className="h-full w-full rounded-lg pl-3"
            placeholder={t('enter_amount_to_stake')}
          />
        </div>
        <div className="h-12 rounded-[100px] bg-[#FE6290] text-center">
          <button className="h-full font-bold"> {t('stake_lp')}</button>
        </div>
        <div className="my-3 flex text-center text-sm font-normal">
          <p className="mx-auto"><i>{t('farming.get_lp_tokens_by_providing')}</i></p>
        </div>
      </div>
    </div>
  );
};

export default FarmingPool;
