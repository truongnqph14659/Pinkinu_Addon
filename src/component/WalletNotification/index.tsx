import { FC, ReactNode } from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import BaseModal, { BaseModalProps } from '../BaseModal';
import DefaultButton from '../DefaultButton';

export enum WalletNotificationType {
  CONFIRMING = 'confirming',
  WARNING = 'warning',
  WAITING = 'waiting',
  SUCCESS = 'success',
  ERROR = 'error',
}

export const NotificationIcon = ({
  notificationType,
  className,
}: {
  notificationType: WalletNotificationType;
  className?: string;
}) => {
  switch (notificationType) {
    case WalletNotificationType.WAITING:
      return (
        <img
          className={`${className}`}
          src="/images/loaders/hourglass.gif"
          alt="loading"
        />
      );
    case WalletNotificationType.WARNING:
      return (
        <ExclamationTriangleIcon className={`text-yellow-300 ${className}`} />
      );
    case WalletNotificationType.SUCCESS:
      return <CheckCircleIcon className={`text-color-halo ${className}`} />;
    case WalletNotificationType.ERROR:
      return <ExclamationCircleIcon className={`text-red-500 ${className}`} />;
    default:
      return (
        <img
          className={`${className}`}
          src="/images/loaders/pendulum.svg"
          alt="loading"
        />
      );
  }
};

interface WalletNotificationProps extends Partial<BaseModalProps> {
  type?: WalletNotificationType;
  header?: ReactNode | string;
  message?: ReactNode | string;
  applyLabel?: string;
  onApply?: () => void;
}

const WalletNotification: FC<WalletNotificationProps> = ({
  type = WalletNotificationType.CONFIRMING,
  open = false,
  header = '',
  message,
  applyLabel,
  onApply,
  handleClose,
  ...rest
}) => {
  return (
    <BaseModal open={open} handleClose={handleClose} {...rest}>
      <div className="flex flex-col items-center gap-6">
        <NotificationIcon notificationType={type} className="h-20 w-20" />
        <div className="text-center">
          <h1 className="mb-3 text-2xl font-bold md:text-3xl">
            {header || `${type.toLocaleLowerCase()}`}
          </h1>
          <p className="break-all">{message}</p>
        </div>
        {applyLabel && (
          <DefaultButton
            className="font-bold"
            text={applyLabel}
            onClick={onApply || handleClose}
          />
        )}
      </div>
    </BaseModal>
  );
};

export default WalletNotification;
