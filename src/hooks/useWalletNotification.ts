import { useContext } from 'react';
import { WalletNotificationContext } from 'src/contexts';

export const useWalletNotification = () =>
  useContext(WalletNotificationContext);
