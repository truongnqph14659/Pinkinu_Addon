import React, { useCallback } from 'react';
import { Dialog, DialogContent, DialogProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const sxTransparent = {
  '.MuiPaper-root': {
    background: 'transparent',
    boxShadow: 'none',
  },
};

export interface BaseModalProps extends DialogProps {
  handleClose: () => void;
  open: boolean;
  hiddenCloseBtn?: boolean;
  isTransparent?: boolean;
}

const BaseModal: React.FC<BaseModalProps> = ({
  open = false,
  handleClose,
  children,
  hiddenCloseBtn = false,
  isTransparent = false,
  sx,
  ...rest
}) => {
  const disableBackdropCloseHandle = useCallback(
    (event, reason) => {
      if (reason === 'backdropClick') {
        return;
      }

      handleClose();
    },
    [handleClose]
  );

  return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={disableBackdropCloseHandle}
      disableEscapeKeyDown
      scroll="body"
      {...rest}
      sx={theme => ({
        [theme.breakpoints.down('sm')]: {
          '.MuiDialog-paper.MuiDialog-paperScrollBody': {
            // maxWidth: 'calc(100% - 48px)',
          },
        },
        '.MuiDialog-paper': {
          // margin: '16px',
          width: 'calc(100% - 48px)',
          borderRadius: '10px',
        },
        background: 'rgba(255, 255,255,0.1)',
        backdropFilter: 'blur(5px)',
        '.MuiPaper-root': { background: '#ffff' },
        ...(sx as unknown as object),
        ...(isTransparent ? sxTransparent : {}),
      })}
    >
      {!hiddenCloseBtn && (
        <div className="flex h-12 w-full items-center justify-between bg-[#f0749b] px-4">
          <p className="font-bold text-white">Exchange</p>
          <CloseIcon
            className="z-10 cursor-pointer font-bold text-white md:!h-8 md:!w-8"
            onClick={handleClose}
          />
        </div>
      )}
      <DialogContent
        sx={theme => ({
          // paddingTop: '0px',
          color: 'white',
          [theme.breakpoints.up('sm')]: {
            padding: '32px 40px',
          },
        })}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
