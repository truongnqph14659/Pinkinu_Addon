import React from 'react';

const Buynow = () => {
  return (
    <div className="mx-3  text-black lg:mx-0">
      <button className="w-full rounded-lg bg-[#000] p-3 font-bold text-white">
        BUY NOW!
      </button>
      <div className="my-5 w-full rounded-md bg-slate-100 p-5">
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
        <p className="my-3 text-center font-bold">
          USDT Raised $2,598,184.43 <span className="px-1">/</span>
          $3,037,500
        </p>
      </div>
    </div>
  );
};

export default Buynow;
