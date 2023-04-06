/* eslint-disable eqeqeq */
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Timer from './Timer';
import style from './buynow.module.scss';
import { useConnectWallet, useModal } from 'src/hooks';
import ExchangeForm from './ExchangeForm';
import { useEffect } from 'react';
import { APP_CONFIG } from 'src/config';
import { isValidNetwork } from 'src/utils';

const deadline = 'April, 8, 2023';
const ethereumChainId = APP_CONFIG.blockchain.ethereumChainId;

const Buynow = () => {
  const { showModal } = useModal();
  const { isConnected, connect, switchNetworks, chainId } = useConnectWallet();

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
            1 $PINKINU <span className="mx-2">=</span> 0.09345 USDT
          </p>
          <img src="images/icons/usdt.png" alt="" className="h-6 w-6" />
        </div>
        <p className="my-5">
          USDT Raised $2,598,184.43 <span className="px-1">/</span>
          $3,037,500
        </p>
        <Timer deadline={deadline} />
        <p className="my-3">Until Price Increase To $0.000150</p>
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
        <p className="my-1 text-[#f0749b]">Launch Price</p>
        <p className="mb-4"> $PINKINU = $0,2943453 USDT</p>
        {!isConnected && (
          <button
            className=" mt-3 rounded-[50px] bg-[#f0749b] px-4 py-2 text-sm font-bold text-white"
            onClick={connect}
          >
            BUY NOW
          </button>
        )}
        {isConnected && (
          <div>
            <div
              className={style.btnBuyCoin}
              onClick={() =>
                showModal({
                  content: <ExchangeForm />,
                  hiddenCloseBtn: false,
                  maxWidth: 'sm',
                })
              }
            >
              <img src="images/icons/bnb.svg" alt="" className="h-7 w-7" />
              <div className="w-full">
                <p>
                  Buy $PINKINU with {chainId == ethereumChainId ? 'ETH' : 'BNB'}
                </p>
              </div>
            </div>
            <div
              className={`${style.btnBuyCoin} my-2 `}
              onClick={() => showModal({ content: <ExchangeForm /> })}
            >
              <img src="images/icons/usdt.png" alt="" className="h-7 w-7" />
              <div className="w-full">
                <p>Buy $PINKINU with USDT</p>
              </div>
            </div>
            <p className="my-3">Next Stage: $PINKINU = 0.0342 USDT</p>
            <button
              className="rounded-3xl bg-[#f0749b] px-5 py-2 text-[#fff] hover:bg-[#ce4ec2]"
              onClick={() =>
                switchNetworks(
                  chainId == ethereumChainId
                    ? APP_CONFIG.blockchain.binanceHexChainId
                    : APP_CONFIG.blockchain.ethereumHexChainId
                )
              }
            >
              Buy with {chainId == ethereumChainId ? 'BNB' : 'ETH'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buynow;
