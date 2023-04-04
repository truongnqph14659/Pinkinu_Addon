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
            maxWidth: 'calc(100% - 48px)',
          },
        },
        '.MuiDialog-paper': {
          margin: '16px',
          width: 'calc(100% - 48px)',
          borderRadius: '10px',
        },
        background: 'rgba(226,88,132,0.5)',
        backdropFilter: 'blur(5px)',
        '.MuiPaper-root': { background: 'rgba(255,255,255,255)' },
        ...(sx as unknown as object),
        ...(isTransparent ? sxTransparent : {}),
      })}
    >
      {!hiddenCloseBtn && (
        <CloseIcon
          className="absolute right-3 top-3 z-10 cursor-pointer font-bold text-white md:!h-8 md:!w-8"
          onClick={handleClose}
        />
      )}
      <DialogContent
        sx={theme => ({
          paddingTop: '30px',
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
