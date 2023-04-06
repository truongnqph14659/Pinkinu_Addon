import { useTranslation } from 'react-i18next';
import { useSmartContract } from './useSmartContract';
import { useWalletNotification } from './useWalletNotification';
import { getPinkInuPHOContract } from 'src/services/smartContracts/instances';
import { Units } from 'src/config';
import { bigNumberToNumber } from 'src/utils';

type SwapParams = {
  quantity: number;
  unit: Units
}

export const useSMSwap = () => {
  const { t } = useTranslation();
  const { makeContract, approve, wHandleError } = useSmartContract();
  const { wConfirm, wSuccess, wWaiting, wClose } = useWalletNotification();

  const getTokenPrice = async (quantity = 1) => {
    wWaiting({
      header: t('waiting_get_bear_price'),
    });

    try {
      const price = await getTokenPriceRaw(quantity);
      wClose();
      return bigNumberToNumber(price);
    } catch (e) {
      wHandleError(e);
    }
  };

  const getTokenPriceRaw = async (quantity = 1) => {
    const pinkInuContract = await makeContract(getPinkInuPHOContract);

    return await pinkInuContract.currentPrice(quantity);
  };

  // const swap = async ({ quantity, unit }: ) => {
  //   try {
  //     wConfirm();
  //     const swapContract = await makeContract(getPinkInuPHOContract);
  //     const tokenContract = await makeContract(getBusdContract);
  //     const price = await getTokenPrice();

  //     wSuccess({
  //       header: t('wallet.request_transaction_success'),
  //       message: t('wallet.transaction_take_time'),
  //       applyLabel: t('wallet.got_it'),
  //     });
  //   } catch (e) {
  //     wHandleError(e);
  //   }
  // };

  // const getTokenContract(unit: Units) {
  //   return makeContract(getBusdContract)
  // }

  return {
    getTokenPrice
  };
};
