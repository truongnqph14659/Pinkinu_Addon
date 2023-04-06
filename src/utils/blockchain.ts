import { APP_CONFIG } from 'src/config';

const SUPPORTED_NETWORKS = [
  {
    chainName: 'Ethereum Mainnet',
    rpcUrls: [
      'https://mainnet.infura.io/v3/'
    ],
    nativeCurrency: {
      name: 'Ethereum Token',
      symbol: 'ETH',
      decimals: 18,
    },
    chainId: 1,
    blockExplorerUrls: ['https://etherscan.io/'],
  }
];

export const getDefaultNetworkJson = () => {
  const network = SUPPORTED_NETWORKS.find(network => {
    return network.chainId === APP_CONFIG.blockchain.firstChainId;
  });

  return {
    ...network,
    chainId: APP_CONFIG.blockchain.firstHexChainId,
  };
};
