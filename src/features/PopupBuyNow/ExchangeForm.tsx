import React, { useState } from 'react';
import { Select, FormControl, MenuItem, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
interface dataCoins {
  id: string;
  name: string;
  image: string;
}
// interface props {
//   dataCoins: dataCoins[];
//   valueFromDefault: string;
//   getCoin: (coin: string) => void;
//   handleKeyPress: (e) => void;
// }

const dataCoins = [
  {
    id: '001',
    name: 'USDT',
    image: '/images/icons/usdt.png',
  },
  // {
  //   id: '002',
  //   name: 'BNB',
  //   image: '/images/general/BNB.png',
  // },
  {
    id: '003',
    name: 'ETH',
    image: '/images/icons/eth-logo.png',
  },
];

const ExchangeForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const [coinSelected, setCoinSelected] = useState('ETH');

  const getCoin = e => {
    setCoinSelected(e);
  };

  const handleKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const checkDot = keyCode === 190 ? '190' : keyValue;
    const pattern = /^[0-9.\b]+$/;
    if (!pattern.test(checkDot)) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-2 border-b-2 border-[#f0749b] px-3 pb-4 md:gap-6">
        <img src="images/icons/eth-logo.png" alt="" className="h-6 w-6" />
        <p className="text-xs font-bold text-black sm:text-lg">
          ETH balance: <span>0.0008723048712908347</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="my-2 text-[18px] font-bold text-black">Amount</p>
        <div>
          <Box sx={{ minWidth: { xs: '40%', md: '50%' } }}>
            <FormControl className="" size="small">
              <Select
                labelId="select-label"
                id="demo-simple-select"
                defaultValue={coinSelected}
                value={coinSelected}
                sx={{
                  color: 'black',
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'red',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'red',
                    borderWidth: '1px',
                  },
                  '& .MuiSelect-icon': {
                    color: 'black',
                  },
                  borderRadius: '7px',
                }}
                onChange={event => {
                  getCoin(event.target.value);
                }}
              >
                {dataCoins.map(coin => (
                  <MenuItem value={coin.name} key={coin.id}>
                    <div className="flex items-center gap-3">
                      <img
                        src={coin.image}
                        alt={coin.image}
                        className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
                      />
                      <p className="text-sm font-bold sm:text-lg">
                        {coin.name}
                      </p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="flex justify-between gap-x-3">
        <div className="flex w-full items-center justify-between">
          <input
            type="number"
            placeholder="0"
            className=" w-full rounded-[5px] bg-[#F6F6F6] py-3 pl-[11px] pr-9 font-bold  text-[#f0749b] placeholder:text-[#f0749b] focus:outline-none md:py-3.5 md:text-[18px]"
            onKeyDown={handleKeyPress}
          />
          <InfoOutlinedIcon
            color="error"
            className="absolute right-[95px] z-10  sm:right-[118px] "
          />
        </div>
        <button className="rounded-md bg-[#f0749b] px-2 font-bold text-white hover:bg-[#FF1C7B] md:px-3">
          MAX
        </button>
      </div>
      <p className="py-2 text-sm text-[#FF1C7B] md:text-base">
        You do not have enough ETH to pay for this transaction
      </p>
      <div className="flex items-center justify-between">
        <p className="my-2 text-[18px] font-bold text-black">Buying</p>
        <div className="flex gap-x-2">
          <img
            src="images/icons/icon-token-pinkinu.png"
            alt=""
            className="h-6 w-6"
          />
          <p className="font-bold text-black">$PINKINU</p>
        </div>
      </div>
      <input
        type="number"
        placeholder="0"
        className=" w-full rounded-[5px] bg-[#F6F6F6] py-3 pl-[11px] pr-7 font-bold text-black  placeholder:text-black focus:outline-none md:py-3.5 md:text-[18px]"
        disabled
      />
      <p className="py-2 text-sm text-[#FF1C7B] md:text-base">
        You do not have enough ETH to pay for this transaction
      </p>
      <button className="mb-3 mt-4 w-full rounded-3xl bg-[#f0749b] py-2 font-bold">
        Convert ETH
      </button>
    </div>
  );
};

export default ExchangeForm;
