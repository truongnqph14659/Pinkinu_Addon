import { BigNumber, utils } from 'ethers';
import { APP_CONFIG } from "src/config";

export const truncateString = (string: string, endLength = 5) => {
  return {
    first: string.slice(0, string.length - endLength),
    last: string.slice(string.length - endLength, string.length),
  };
};

export const dateToYMD = (date = new Date()) => {
  const strArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const d = date.getDate();
  const m = strArray[date.getMonth()];
  const y = date.getFullYear();

  return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ', ' + y;
};

export const dateToYMDHM = (date: Date) => {
  const fullMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = date.getDate();
  const m = fullMonth[date.getMonth()];
  const y = date.getFullYear();
  const h = date.getHours();
  const mi = date.getMinutes();

  return (
    '' +
    (d <= 9 ? '0' + d : d) +
    ' ' +
    m +
    ', ' +
    y +
    ' - ' +
    (h <= 9 ? '0' + h : h) +
    ':' +
    (mi <= 9 ? '0' + mi : mi)
  );
};

export const formatDateReward = (dateStr: string) => {
  const date = new Date(dateStr);
  const strArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const d = date.getDate();
  const m = strArray[date.getMonth()];
  const h = date.getHours();
  const i = date.getMinutes();

  return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' - ' + h + ':' + i;
};

export const formatDateMyReward = (dateStr: string) => {
  const date = new Date(dateStr);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const h = date.getHours();
  const i = date.getMinutes();

  return `${h}.${i} ${m}.${d}.${y}`;
};

export const roundCoin = (coin = 0, fractionDigits = 3) => {
  return coin === 0 || Number.isInteger(coin)
    ? coin
    : coin.toFixed(fractionDigits);
};

export const formatAddress = (address: string) =>
  address && address.toLocaleLowerCase();

export const isValidNetwork = (chainId: number) =>
  [APP_CONFIG.blockchain.firstChainId, APP_CONFIG.blockchain.secondChainId].includes(chainId);

export const bigNumberToNumber = (bigNumber: BigNumber) => {
  return parseFloat(utils.formatEther(bigNumber));
};

export const numberToBigNumber = (number: number) => {
  return utils.parseEther(number.toString());
};

export const convertTZ = (date: Date, tz: string) => {
  return new Date(date.toLocaleString('en-US', { timeZone: tz }));
};

export const teamToFlag = (nationName: string) => {
  return nationName
    ? `/images/countries/${nationName.replace(' ', '').toLocaleLowerCase()}.svg`
    : '';
};

export const extractMetamaskErrorMessage = e => {
  let mainMessage = e?.message as string;
  let subMessage = e?.data?.message as string;

  mainMessage =
    mainMessage &&
    mainMessage.slice(0, getMetamaskMessageBreakpoint(mainMessage));

  subMessage =
    subMessage &&
    subMessage.slice(getMetamaskMessageBreakpoint(subMessage) || 0);

  return `${mainMessage} ${subMessage ? `- ${subMessage}` : ''}`;
};

const getMetamaskMessageBreakpoint = string => {
  const breakPointSymbols = ['(', ':'];

  const existSymbol = breakPointSymbols.find(
    symbol => string.indexOf(symbol) !== -1
  );

  return existSymbol && string.indexOf(existSymbol);
};

export const toTwoDigit = (number: number) => {
  return ('0' + number).slice(-2);
};

export const formatLocalString = (
  number: number,
  options?: Intl.NumberFormatOptions
) => {
  return number
    ? number.toLocaleString('en-US', { maximumFractionDigits: 2, ...options })
    : '0';
};

export const formatAmount = (amount: number, decimal = 3) => {
  return formatLocalString(amount, { maximumFractionDigits: decimal });
};

export const formatTeamId = (teamId: string) => {
  return (
    '#' +
    (teamId.length > 6
      ? teamId.substring(teamId.length - 6, teamId.length)
      : teamId)
  );
};

export const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const dateToHMYMD = (date: Date) => {
  const h = date.getHours();
  const mi = date.getMinutes();
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  return (
    (h <= 9 ? '0' + h : h) +
    ':' +
    (mi <= 9 ? '0' + mi : mi) +
    ' - ' +
    (d <= 9 ? '0' + d : d) +
    '.' +
    m +
    '.' +
    y
  );
};
export const addHours = (startTime: Date, hours: number) => {
  return new Date(startTime.setHours(startTime.getHours() + hours));
};

export const dateShortFormat = (timestamp: number | string) => {
  const date = new Date(timestamp);

  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1 < 10 ? '0' : ''}${date.getUTCMonth() + 1}-${date.getUTCDate() < 10 ? '0' : ''}${date.getUTCDate()}`;
};
