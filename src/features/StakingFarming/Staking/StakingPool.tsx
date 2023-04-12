import React from 'react';

const StakingPool = () => {
  return (
    <div className="max-w-[350px] rounded-lg border-[1px] border-black bg-[#000000]">
      <div
        className="relative h-[80px] rounded-t-lg"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <div className="flex">
          <div className="mx-7 mt-5 basis-2/3 items-center">
            <div className="flex items-center gap-2">
              <img src="/images/icons/icon-token-pinkinu.png" alt="" />
              <h1 className="font-black text-[#FFFFFF]">14 Days</h1>
            </div>
          </div>
          <div className="absolute bottom-0 right-4 max-w-[80px] basis-1/3">
            <img src="/images/general/icon-pinkinu.png" alt="" />
          </div>
        </div>
      </div>

      <div className="mx-7 my-3 text-base text-[#FFFFFF]">
        <p className="font-bold  text-[#FE6290]">
          {' '}
          Reward Poll: 15% of Stake Tax
        </p>

        <div className="my-3 flex">
          <p className="font-normal">Stakers</p>
          <p className="ml-auto font-bold">770</p>
        </div>
        <div className="my-3 flex">
          <p className="font-normal">Stakers</p>
          <p className="ml-auto font-bold">770</p>
        </div>

        <div className="my-3 flex">
          <p className="font-normal">Stakers</p>
          <p className="ml-auto font-bold">770</p>
        </div>

        <div className="my-4 flex border-[2px] border-black"></div>
        <div className="my-4 border-b-[1px] border-white"></div>

        <div className="flex font-bold">
          <p className="font-normal">Balance</p>
          <p className="ml-auto font-bold">0.00</p>
        </div>

        <div className="my-3 h-8 rounded-lg">
          <input
            className="h-full w-full rounded-lg pl-3"
            placeholder="Enter amount to stake"
          />
        </div>
        <div className="h-7 rounded-[100px] bg-[#FE6290] text-center">
          <button className="h-full font-bold"> Stake</button>
        </div>
      </div>
    </div>
  );
};

export default StakingPool;
