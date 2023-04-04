import React, { useState } from 'react';
import BaseModal from 'src/component/BaseModal';
import ConfirmModal from 'src/component/modals/ConfirmModal';

import {
  BaseModalState,
  ConfirmModalState,
  ModalContextType,
} from 'src/models';

export const ModalContext = React.createContext<ModalContextType>(
  {} as ModalContextType
);

const initialBaseModalState: BaseModalState = {
  content: <></>,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBaseModalProps = (baseModalState: any) => {
  const { content, handleClose, onClose, ...rest } = baseModalState;

  return rest;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalProvider: React.FC<any> = ({ children }) => {
  const [openBaseModal, setOpenBaseModal] = useState<boolean>(false);
  const [baseModalState, setBaseModalState] = useState<BaseModalState>(
    initialBaseModalState
  );

  const showModal = (config: BaseModalState) => {
    config = {
      ...initialBaseModalState,
      ...config,
    };

    setBaseModalState(config);
    setOpenBaseModal(true);
  };

  const closeModal = () => {
    setOpenBaseModal(false);

    if (typeof baseModalState.onClose === 'function') {
      baseModalState.onClose();
    }
  };

  const showConfirm = (
    config: Partial<ConfirmModalState>,
    baseModalConfig?: Partial<BaseModalState>
  ) => {
    showModal({
      content: <ConfirmModal {...config} />,
      ...baseModalConfig,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        closeModal,
        showConfirm,
      }}
    >
      {children}

      <BaseModal
        open={openBaseModal}
        handleClose={closeModal}
        {...getBaseModalProps(baseModalState)}
      >
        {baseModalState.content}
      </BaseModal>
    </ModalContext.Provider>
  );
};
