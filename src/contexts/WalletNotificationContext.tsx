import React, { ReactNode, useState } from 'react';
import WalletNotification, {
  WalletNotificationType,
} from 'src/component/WalletNotification';

interface WalletNotificationConfig {
  header?: ReactNode | string;
  message?: ReactNode | string;
  applyLabel?: string;
  onApply?: (() => void) | (() => Promise<void>);
  type: WalletNotificationType;
}

interface WalletNotificationContextInterface {
  wConfirm: (config?: Partial<WalletNotificationConfig>) => void;
  wWarning: (config?: Partial<WalletNotificationConfig>) => void;
  wWaiting: (config?: Partial<WalletNotificationConfig>) => void;
  wSuccess: (config?: Partial<WalletNotificationConfig>) => void;
  wError: (config?: Partial<WalletNotificationConfig>) => void;
  wClose: () => void;
}

export const WalletNotificationContext =
  React.createContext<WalletNotificationContextInterface>(
    {} as unknown as WalletNotificationContextInterface
  );

export const WalletNotificationProvider: React.FC<CommonReactNodeProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<WalletNotificationConfig>();

  const wConfirm = (config: Partial<WalletNotificationConfig>) => {
    setConfig({ ...(config || {}), type: WalletNotificationType.CONFIRMING });
    setOpen(true);
  };

  const wWarning = (config: Partial<WalletNotificationConfig>) => {
    setConfig({ ...(config || {}), type: WalletNotificationType.WARNING });
    setOpen(true);
  };

  const wWaiting = (config: Partial<WalletNotificationConfig>) => {
    setConfig({ ...(config || {}), type: WalletNotificationType.WAITING });
    setOpen(true);
  };

  const wSuccess = (config: Partial<WalletNotificationConfig>) => {
    setConfig({ ...(config || {}), type: WalletNotificationType.SUCCESS });
    setOpen(true);
  };

  const wError = (config: Partial<WalletNotificationConfig>) => {
    setConfig({ ...(config || {}), type: WalletNotificationType.ERROR });
    setOpen(true);
  };

  return (
    <WalletNotificationContext.Provider
      value={{
        wConfirm,
        wWarning,
        wWaiting,
        wSuccess,
        wError,
        wClose: () => setOpen(false),
      }}
    >
      {children}
      <WalletNotification
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        {...config}
      />
    </WalletNotificationContext.Provider>
  );
};

export default WalletNotificationContext;
