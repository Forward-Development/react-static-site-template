import BigNumber from 'bignumber.js';

export const toEther = (wei: string) => {
  return new BigNumber(wei).dividedBy(1e18).toFixed(6);
};
