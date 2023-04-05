import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import {
  AuthProvider,
  ModalProvider,
  WalletNotificationProvider,
} from './contexts';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const getLibrary = provider => {
  return new ethers.providers.Web3Provider(provider);
};

root.render(
  <BrowserRouter>
    <WalletNotificationProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AuthProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </AuthProvider>
      </Web3ReactProvider>
    </WalletNotificationProvider>
  </BrowserRouter>
);
