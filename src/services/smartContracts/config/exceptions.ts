export const EXCEPTION_CODE = {
  USER_REJECTED_REQUEST: 4001,
  NOT_CONNECT: 6001,
  INVALID_NETWORK: 6002,
  APPROVE_TIMEOUT: 6003,
  NOT_ENOUGH_AMOUNT: 6004,
  UNKNOWN_ERROR: 6005,
};

export const EXCEPTION_CODE_STRING = {
  USER_REJECTED_REQUEST: 'ACTION_REJECTED',
};

const EXCEPTIONS = [
  {
    code: EXCEPTION_CODE.NOT_CONNECT,
    message: 'Not connected.',
  },
  {
    code: EXCEPTION_CODE.INVALID_NETWORK,
    message: 'Invalid network.',
  },
  {
    code: EXCEPTION_CODE.APPROVE_TIMEOUT,
    message: 'Approve timeout.',
  },
  {
    code: EXCEPTION_CODE.NOT_ENOUGH_AMOUNT,
    message: 'Not enough BUSD.',
  },
];

export function WalletException(exceptionCode: number) {
  const { code, message } = EXCEPTIONS.find(
    exception => exceptionCode === exception.code
  ) || { code: EXCEPTION_CODE.UNKNOWN_ERROR, message: 'Unknown error.' };

  this.code = code;
  this.message = message;
}
