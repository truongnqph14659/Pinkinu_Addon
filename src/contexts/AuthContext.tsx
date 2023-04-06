import { useWeb3React } from '@web3-react/core';
import { NoEthereumProviderError } from '@web3-react/injected-connector';
import { verifyMessage } from 'ethers/lib/utils';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { APP_CONFIG } from 'src/config';
import { useSmartContract, useWalletNotification } from 'src/hooks';
import {
  Injected,
  formatAddress,
  setTokenCookies,
  getAccessTokenCookie,
  removeTokenCookies,
  getDefaultNetworkJson,
} from 'src/utils';

export interface User {
  id?: string;
  name?: string;
  avatar?: string | File;
  address?: string;
}

export interface AuthStateInterface {
  isLogging: boolean;
  isLoggedIn: boolean;
  user: User;
  accessToken: string;
}

export interface AuthContextInterface {
  authState: AuthStateInterface;
  isConnected: boolean;
  getAccount?: () => Promise<string>;
  connect?: () => Promise<void>;
  logout?: () => void;
  requireNetwork?: () => Promise<void>;
  setAuthState?: React.Dispatch<React.SetStateAction<AuthStateInterface>>;
  switchNetworks?: (hexChainId: string) => Promise<void>;
  chainId?: number;
}

const authStateInitial: AuthStateInterface = {
  isLogging: false,
  isLoggedIn: undefined,
  user: undefined,
  accessToken: undefined,
};

const authContextInitial: AuthContextInterface = {
  authState: authStateInitial,
  isConnected: false,
};

export const AuthContext =
  React.createContext<AuthContextInterface>(authContextInitial);

export const AuthProvider: React.FC<CommonReactNodeProps> = ({ children }) => {
  const [authState, setAuthState] =
    useState<AuthStateInterface>(authStateInitial);
  const { activate, deactivate, library, account, chainId } = useWeb3React();
  const wNotice = useWalletNotification();
  const { wHandleError } = useSmartContract();
  const { t } = useTranslation();

  // Login
  const login = async () => {
    const currentAddress = formatAddress(authState?.user?.address);

    if (account && formatAddress(account) !== currentAddress) {
      if (currentAddress) {
        removeState();
      }

      signMessage();
    }
  };

  useEffect(() => {
    login();
  }, [account]);

  // REQUIRE CONDITIONS
  const requireNetwork = async () => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: APP_CONFIG.blockchain.ethereumHexChainId }],
      });
    } catch (switchError) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: 'wallet_addEthereumChain',
            params: [getDefaultNetworkJson()],
          });
        } catch (error) {
          wNotice.wError({ header: t('wallet.errors.can_not_switch') });
        }
      }
    }
  };

  const switchNetworks = async (
    chainId = APP_CONFIG.blockchain.ethereumHexChainId
  ) => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId,
          },
        ],
      });
    } catch (switchError) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: 'wallet_addEthereumChain',
            params: [getDefaultNetworkJson()],
          });
        } catch (error) {
          wNotice.wError({ header: t('wallet.errors.can_not_switch') });
        }
      }
    }
  };

  const requireAccount = async () => {
    return (
      account ||
      ((await library.provider.request({
        method: 'eth_requestAccounts',
        params: [],
      })) as string)
    );
  };

  // Helpers
  const connect = async () => {
    if (!library) {
      wNotice.wConfirm();
    }
    try {
      await activate(Injected, error => null, true);

      wNotice.wClose();
    } catch (e) {
      removeState();

      if (e instanceof NoEthereumProviderError) {
        return wNotice.wWarning({
          header: t('wallet.errors.not_found'),
          applyLabel: t('wallet.install_open_now'),
          onApply: () => {
            window.open(APP_CONFIG.blockchain.metamaskDeepLink, '_blank');
          },
        });
      }

      return wHandleError(e);
    }
  };

  const getAccount = async () => {
    // await requireNetwork();

    return requireAccount();
  };

  const signMessage = async () => {
    try {
      wNotice.wConfirm();

      const account = await getAccount();

      const nonce = md5(APP_CONFIG.blockchain.prefixNonce);

      wNotice.wConfirm({ message: t('wallet.confirm_signature') });
      const signature = await library.provider.request({
        method: 'personal_sign',
        params: [`${APP_CONFIG.blockchain.prefixSignature} ${nonce}`, account],
      });

      const params = {
        signature,
        address: account,
        nonce,
      };

      const verifySignatureResponse = verifySignature(params);

      setTokenCookies(verifySignatureResponse);

      getMyProfile(account);

      wNotice.wClose();
    } catch (e) {
      logout();

      wHandleError(e);
    }
  };

  const verifySignature = ({ signature, address, nonce }) => {
    address = address.toLowerCase();

    canVerifyNonce({ signature, address, nonce });

    return generateToken(address);
  };

  const generateToken = (address: string) => {
    return { accessToken: md5(address) };
  };

  const canVerifyNonce = ({ signature, address, nonce }) => {
    let addressVerify = '';

    try {
      addressVerify = verifyMessage(
        `${APP_CONFIG.blockchain.prefixNonce} ${nonce}`,
        signature
      );

      if (addressVerify.toLowerCase() !== address.toLocaleLowerCase()) {
        return false;
      }
    } catch (e) {
      return false;
    }
  };

  const getMyProfile = async address => {
    try {
      setAuthState(previous => ({
        ...previous,
        isLoggedIn: true,
        isLogging: false,
        user: { address },
        accessToken: getAccessTokenCookie(),
      }));
    } catch (e) {
      logout();
    }
  };

  // Logout
  const logout = () => {
    deactivate && deactivate();

    removeTokenCookies();

    setAuthState({ ...authStateInitial, isLoggedIn: false, isLogging: false });
  };

  const removeState = () => {
    removeTokenCookies();

    setAuthState({ ...authStateInitial, isLoggedIn: false, isLogging: false });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        isConnected: Boolean(authState.isLoggedIn && account),
        getAccount,
        connect,
        logout,
        requireNetwork,
        setAuthState,
        switchNetworks,
        chainId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
