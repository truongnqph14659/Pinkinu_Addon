import { ethers, Signer } from 'ethers';
import { ADDRESSES } from './config/constant';
import bearAdminAbi from 'src/services/smartContracts/abis/BearAdmin.json';
import tokenAbi from 'src/services/smartContracts/abis/Token.json';
import bearNftAbi from 'src/services/smartContracts/abis/AlphaBearNFT.json';
import marketplaceAbi from 'src/services/smartContracts/abis/Marketplace.json';

export const getBearAdminContract = (signer: Signer) =>
  new ethers.Contract(ADDRESSES.bearAdmin, bearAdminAbi.abi, signer);

export const getBusdContract = (signer: Signer) =>
  new ethers.Contract(ADDRESSES.busd, tokenAbi.abi, signer);

export const getBearNftContract = (signer: Signer) =>
  new ethers.Contract(ADDRESSES.bearNft, bearNftAbi.abi, signer);

export const getMarketplaceContract = (signer: Signer) =>
  new ethers.Contract(ADDRESSES.marketplace, marketplaceAbi.abi, signer);
