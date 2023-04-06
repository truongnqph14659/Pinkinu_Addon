export const APP_CONFIG = {
  captcha: {
    hCaptcha: {
      siteKey: process.env.REACT_APP_HCAPTCHA_SITE_KEY,
    },
  },
  api: {
    apiBaseUrl: process.env.REACT_APP_API_URL,
    socketBaseUrl: process.env.REACT_APP_SOCKET_URL,
  },
  blockchain: {
    ethereumChainId: 1,
    ethereumHexChainId: `0x${(1).toString(16)}`,
    binanceChainId: 56,
    binanceHexChainId: `0x${(56).toString(16)}`,
    metamaskDeepLink: process.env.REACT_APP_METAMASK_DEEP_LINK,
    prefixSignature:
      process.env.REACT_APP_PREFIX_SIGNATURE ||
      `I am going to sign my PinkInu AI:`,
    prefixNonce:
      process.env.REACT_APP_PREFIX_NONCE ||
      `I am going to sign my PinkInu AI:`,
  },
  socket: {
    url: process.env.REACT_APP_SOCKET_URL,
    timeout: (+process.env.REACT_APP_SOCKET_TIMEOUT || 15) * 1000,
  },
};

export const CONSTANTS = {
  ACCESS_TOKEN_KEY: 'accessToken',
  REFRESH_TOKEN_KEY: 'refreshToken',
  FIREBASE_TOKEN_KEY: 'tokenFireBase',
  TOKEN_COOKIE_EXPIRES: 1,
  REQUEST_TIME_OUT: 1200000,
  MIN_PASSWORD: 6,
  MAX_PASSWORD: 255,
  PASSWORD_REGEX: /^\S*$/,
  TIMING_BANNER_KEY: 'timingBanner',
};
