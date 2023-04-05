import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers, Signer } from 'ethers';
import { useWalletNotification } from 'src/hooks';
import { useConnectWallet } from './useConnectWallet';
import {
  extractMetamaskErrorMessage,
  getDefaultNetworkJson,
  isValidNetwork,
} from 'src/utils';
import {
  EXCEPTION_CODE,
  EXCEPTION_CODE_STRING,
  WalletException,
} from 'src/services/smartContracts/config';
import { useTranslation } from 'react-i18next';

const RETRY_ALLOWANCE = 10;
const RETRY_ALLOWANCE_DURATION = 3000;

export const useSmartContract = () => {
  const { library, chainId, account } = useWeb3React();
  const { isConnected, requireNetwork, connect } = useConnectWallet();
  const { wWarning, wClose, wConfirm, wWaiting, wError } =
    useWalletNotification();
  const { t } = useTranslation();

  const makeContract = async (
    contractInstance: (signer: Signer) => ethers.Contract
  ) => {
    if (!isConnected) {
      throw new WalletException(EXCEPTION_CODE.NOT_CONNECT);
    }

    if (!isValidNetwork(chainId)) {
      throw new WalletException(EXCEPTION_CODE.INVALID_NETWORK);
    }

    return contractInstance(library.getSigner());
  };

  const approve = (
    tokenContract: ethers.Contract,
    receivedContract: ethers.Contract,
    amount: BigNumber
  ) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        wWaiting({ message: t('wallet.checking_approve') });

        const userBalance = await tokenContract.balanceOf(account);

        if (userBalance.lt(amount)) {
          reject(new WalletException(EXCEPTION_CODE.NOT_ENOUGH_AMOUNT));
          return;
        }

        const existingAllowance = await tokenContract.allowance(
          account,
          receivedContract.address
        );

        if (existingAllowance.gte(amount)) {
          resolve(true);
          return;
        }

        wConfirm({ message: t('wallet.approve') });
        await tokenContract.approve(receivedContract.address, amount);
        wWaiting({
          message: t('wallet.waiting_approve_complete'),
        });

        let retryAllowance = 0;
        const allowanceInterval = setInterval(async () => {
          if (retryAllowance >= RETRY_ALLOWANCE) {
            clearInterval(allowanceInterval);
            reject(new WalletException(EXCEPTION_CODE.APPROVE_TIMEOUT));
            return;
          }

          const newExistingAllowance = await tokenContract.allowance(
            account,
            receivedContract.address
          );

          if (newExistingAllowance.gte(amount)) {
            clearInterval(allowanceInterval);
            resolve(true);
          }

          retryAllowance++;
        }, RETRY_ALLOWANCE_DURATION);
      } catch (e) {
        reject(e);
      }
    });
  };

  const wHandleError = error => {
    switch (error?.code) {
      case EXCEPTION_CODE.USER_REJECTED_REQUEST:
      case EXCEPTION_CODE_STRING.USER_REJECTED_REQUEST:
        return wClose();
      case EXCEPTION_CODE.NOT_CONNECT:
        return wWarning({
          header: t('wallet.errors.not_connect'),
          message: t('wallet.require_connect'),
          applyLabel: t('wallet.connect_now'),
          onApply: connect,
        });
      case EXCEPTION_CODE.INVALID_NETWORK:
        return wWarning({
          header: t('wallet.errors.invalid_network'),
          message: t('wallet.switch_network', {
            network: getDefaultNetworkJson().chainName,
          }),
          applyLabel: t('wallet.add_switch_network'),
          onApply: async () => {
            await requireNetwork();
            wClose();
          },
        });
      case EXCEPTION_CODE.APPROVE_TIMEOUT:
        return wWarning({
          message: t('wallet.approve_timeout'),
        });
      case EXCEPTION_CODE.NOT_ENOUGH_AMOUNT:
        return wError({ header: t('wallet.errors.not_enough_amount') });
      default:
        wError({ message: extractMetamaskErrorMessage(error) });
    }
  };

  return { makeContract, approve, wHandleError };
};
