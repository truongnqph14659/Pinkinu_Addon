import Cookies from 'js-cookie';
import { CONSTANTS } from 'src/config';

export const getAccessTokenCookie = () =>
  Cookies.get(CONSTANTS.ACCESS_TOKEN_KEY);

export const setTokenCookies = (
  { accessToken }: AuthTokenData,
  remember = true
) => {
  if (remember) {
    return Cookies.set(CONSTANTS.ACCESS_TOKEN_KEY, accessToken, {
      expires: CONSTANTS.TOKEN_COOKIE_EXPIRES,
    });
  }

  Cookies.set(CONSTANTS.ACCESS_TOKEN_KEY, accessToken);
};

export const removeTokenCookies = () => {
  Cookies.remove(CONSTANTS.ACCESS_TOKEN_KEY);
};

export const isAuthenticated = () => {
  try {
    const token = getAccessTokenCookie();
    if (token) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export const getDeviceId = () => {
  return sessionStorage.getItem(CONSTANTS.FIREBASE_TOKEN_KEY);
};
