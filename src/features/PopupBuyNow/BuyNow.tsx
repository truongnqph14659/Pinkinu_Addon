import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Timer from './Timer';
import style from './buynow.module.scss';

const deadline = 'April, 5, 2023';

const Buynow = () => {
  return (
    <div className="mx-3  text-black lg:mx-0 lg:min-w-[414px]">
      <button className="w-full rounded-lg bg-[#000] p-3 font-bold text-white">
        BUY NOW!
      </button>
      <div className="my-5 w-full rounded-md bg-slate-100 p-5 text-center font-bold">
        <div className="flex justify-between px-0 sm:px-3">
          <img
            src="https://lovehateinu.com/assets/images/dark-logo.svg"
            alt=""
            className="h-6 w-6"
          />
          <p className="font-bold">
            1$ LHINU <span className="mx-2">=</span> 0.09345 USDT
          </p>
          <img
            src="https://lovehateinu.com/assets/images/t-icon.svg"
            alt=""
            className="h-6 w-6"
          />
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
        <p className="my-2">Your purchased $LHINU = 3,294</p>
        <div>
          <div className={style.btnBuyCoin}>
            <img
              src="https://lovehateinu.com/assets/images/metamask.svg"
              alt=""
              className="h-7 w-7"
            />
            <p>BUY $LHINU WITH ETH</p>
          </div>
          <div className={`${style.btnBuyCoin} my-2`}>
            <img
              src="https://lovehateinu.com/assets/images/metamask.svg"
              alt=""
              className="h-7 w-7"
            />
            <p>BUY $LHINU WITH USDT</p>
          </div>
          <p className="my-3">Next Stage: $LHINU = 0.0342 USDT</p>
          <button className="w-[70%] rounded-3xl bg-[#f0749b] py-2 text-[#fff]">
            Buy with BNB
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buynow;
