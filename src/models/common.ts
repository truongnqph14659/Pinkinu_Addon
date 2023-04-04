import { BaseModalProps } from './../component/BaseModal/index';
import { ReactElement, ReactNode } from 'react';

export interface BaseModalState extends Partial<BaseModalProps> {
  content: ReactElement;
  onClose?: () => void;
  hiddenCloseBtn?: boolean;
}

export interface ConfirmModalState {
  title?: string | ReactNode;
  message?: string | ReactNode;
  onApply?: () => unknown;
  onCancel?: () => unknown;
  showCancel?: boolean;
  showIcon?: boolean;
  applyLabel?: string;
  cancelLabel?: string;
}

export interface ModalContextType {
  closeModal: () => void;
  showModal: (config: BaseModalState) => void;
  showConfirm: (
    config: Partial<ConfirmModalState>,
    baseModalConfig?: Partial<BaseModalState>
  ) => void;
}
