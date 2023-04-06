import { ethers, Signer } from 'ethers';
import { ADDRESSES } from './config/constant';
import pinkInuPHOAbi from 'src/services/smartContracts/abis/PinkInuPHO.json';
import tokenAbi from 'src/services/smartContracts/abis/Token.json';
import { Units } from 'src/config';

export const getPinkInuPHOContract = (signer: Signer) =>
  new ethers.Contract(ADDRESSES.pinkInuPHO, pinkInuPHOAbi.abi, signer);

export const getTokenContract = (unit: Units, signer: Signer) =>
  new ethers.Contract(ADDRESSES[unit], tokenAbi.abi, signer);
