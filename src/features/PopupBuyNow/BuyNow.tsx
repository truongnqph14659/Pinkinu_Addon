import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Timer from './Timer';
import style from './buynow.module.scss';
import { useConnectWallet, useModal } from 'src/hooks';
import ExchangeForm from './ExchangeForm';
import { useEffect, useState } from 'react';
import {
  APP_CONFIG,
  FIRST_TOKEN,
  OWN_TOKEN,
  SECOND_TOKEN,
  THIRD_TOKEN,
} from 'src/config';
import { isValidNetwork } from 'src/utils';
import { useTranslation } from 'react-i18next';

const deadline = 'April, 10, 2023';

const secondChainId = APP_CONFIG.blockchain.secondChainId;

const BuyNow = () => {
  const { t } = useTranslation();
  const { showModal } = useModal();
  const { isConnected, connect, switchNetworks, chainId } = useConnectWallet();
  const [isInvalidTime, setIsInvalidTime] = useState<boolean>(true);

  useEffect(() => {
    if (isConnected && !isValidNetwork(chainId)) window.location.reload();
  }, [chainId]);

  return (
    <div className="mx-3 text-black sm:min-w-[414px] lg:mx-0">
      <div
        className={` ${style.boxBuyNow} my-5 w-full p-5 text-center  font-bold`}
      >
        <div className="flex justify-between px-0 sm:px-3">
          <img
            src="images/icons/icon-token-pinkinu.png"
            alt=""
            className="h-6 w-6"
          />
          <p className="font-bold">
            1 {OWN_TOKEN} <span className="mx-2">=</span> 0.09345 {THIRD_TOKEN}
          </p>
          <img src="images/icons/usdt.png" alt="" className="h-6 w-6" />
        </div>
        {isInvalidTime || (
          <p className="my-5">
            {t('usdt_raised')} $2,598,184.43 <span className="px-1">/</span>
            $3,037,500
          </p>
        )}
        {isInvalidTime && <p className="my-5">{t('message_asking')}</p>}

        <Timer deadline={deadline} checkTime={setIsInvalidTime} />
        {isInvalidTime || (
          <>
            <p className="my-3">{t('until_price_increase_to')} $0.000150</p>
            <Box>
              <Slider
                sx={{
                  '& .MuiSlider-thumb': {
                    display: 'none',
                  },
                  '&:disabled .MuiSlider-thumb': {
                    display: 'none',
                  },
                  '& .MuiSlider-rail': {
                    padding: '10px',
                  },
                  '& .MuiSlider-track': {
                    padding: '9px',
                    color: '#f0749b',
                  },
                }}
                defaultValue={6}
                max={10}
                disabled={true}
              />
            </Box>
          </>
        )}

        <p className="my-1 text-[#f0749b]">{t('launch_price')}</p>
        <p className="mb-4">
          {OWN_TOKEN} = $0,2943453 {THIRD_TOKEN}
        </p>
        {!isConnected && (
          <button
            className={`${
              isInvalidTime ? 'bg-[#4e4246] ' : 'bg-[#f0749b] '
            } mt-3 rounded-[50px] px-4 py-2 text-sm font-bold text-white`}
            onClick={connect}
            disabled={isInvalidTime}
          >
            {t('buy_now')}
          </button>
        )}
        {isConnected && (
          <div>
            <div
              className={style.btnBuyCoin}
              onClick={() => {
                if (isValidNetwork(chainId)) {
                  showModal({
                    content: <ExchangeForm />,
                    hiddenCloseBtn: false,
                    maxWidth: 'sm',
                  });
                } else {
                  switchNetworks(APP_CONFIG.blockchain.firstHexChainId);
                }
              }}
            >
              <img
                src={`images/icons/${
                  chainId === secondChainId ? 'bnb' : 'eth'
                }.svg`}
                alt=""
                className="h-7 w-7"
              />
              <div className="w-full">
                <p>
                  {t('buy_pinkInu_with')}
                  {chainId === secondChainId ? SECOND_TOKEN : FIRST_TOKEN}
                </p>
              </div>
            </div>
            <div
              className={`${style.btnBuyCoin} my-2 `}
              onClick={() => {
                if (isValidNetwork(chainId)) {
                  showModal({
                    content: <ExchangeForm />,
                    hiddenCloseBtn: false,
                    maxWidth: 'sm',
                  });
                } else {
                  switchNetworks(APP_CONFIG.blockchain.firstHexChainId);
                }
              }}
            >
              <img src="images/icons/usdt.png" alt="" className="h-7 w-7" />
              <div className="w-full">
                <p>{t('buy_pinkInu_with_usdt')}</p>
              </div>
            </div>
            <p className="my-3">
              {t('next_stage')} {OWN_TOKEN} = 0.0342 {THIRD_TOKEN}
            </p>
            <button
              className="rounded-3xl bg-[#f0749b] px-5 py-2 text-[#fff] hover:bg-[#ce4ec2]"
              onClick={() =>
                switchNetworks(
                  chainId === secondChainId
                    ? APP_CONFIG.blockchain.secondHexChainId
                    : APP_CONFIG.blockchain.firstHexChainId
                )
              }
            >
              {t('buy_with')}
              {chainId === secondChainId ? FIRST_TOKEN : SECOND_TOKEN}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNow;
