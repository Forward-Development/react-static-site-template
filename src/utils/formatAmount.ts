import numeral from 'numeral';

import { toEther } from './toEther';

// Returns first 2 digits after first non-zero decimal
// i.e. 0.001286 -> 0.0012, 0.9845 -> 0.98, 0.0102 -> 0.010, etc
// Intended to be used for tokens whose value is less than $1
// https://stackoverflow.com/a/23887837
export const getFirstThreeNonZeroDecimals = (value: number) => {
  const result = value.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/);
  if (result === null) return null;
  return result[0];
};

export const withNotRoundedPrecision = (amount: number, precision: number) => {
  const stringNum = amount.toString();
  const numbersAndPow = stringNum?.split('e');
  const pow = numbersAndPow?.[1] || '1';
  const numbers = numbersAndPow?.[0]?.split('.');
  const integer = numbers[0] || '0';
  const decimal = numbers[1]?.split('e')[0] || '0';

  // if power less than 0 -> add zero after '.'
  if (parseInt(pow) < 0) {
    let newDecimal = '0'.repeat(-parseInt(pow) - 1) + integer + decimal;
    newDecimal = newDecimal.slice(0, precision);
    return '0.' + newDecimal;
  }

  // if decimal shorter than precision -> add zero after number
  if (decimal.length < precision) {
    const addZero = precision - decimal.length;
    return integer + '.' + decimal + '0'.repeat(addZero);
  }

  // if input number is an integer -> add precision
  if (!stringNum.includes('.') && precision > 0)
    return stringNum + '.' + '0'.repeat(precision);

  // pow >= 0, decimal >= precision, not integer
  const newDecimal = decimal.slice(0, precision);
  return integer + '.' + newDecimal;
};

export type formatAmountNotation = 'compact' | 'standard';

/**
 * This function is used to format token prices, liquidity, amount of tokens in TX, and in general any numbers on info section
 * @param amount - amount to be formatted
 * @param notation - whether to show 1M or 1,000,000
 * @param displayThreshold - threshold below which it will return simply <displayThreshold instead of actual value, e.g. if 0.001 -> returns <0.001 for 0.0005
 * @param tokenPrecision - set to true when you want precision to be 3 decimals for values < 1 and 2 decimals for values > 1
 * @param isInteger - if true the values will contain decimal part only if the amount is > 1000
 * @returns formatted string ready to be displayed
 */
export const formatAmount = <T>(
  _formatAmount: number | undefined | string,
  options?: {
    notation?: formatAmountNotation;
    displayThreshold?: number;
    tokenPrecision?: number;
    isRoundUp?: boolean;
  }
): string | (T extends undefined ? undefined : string) => {
  const formatAmount = toEther((_formatAmount ?? 0).toString());
  const { notation, displayThreshold, tokenPrecision, isRoundUp } = options || {
    notation: 'compact',
  };

  if (typeof formatAmount === 'undefined') {
    return '0.00';
  }

  const amount = parseFloat(formatAmount?.toString());

  // no input number
  if (isNaN(amount)) return '-';

  // compare with threshold
  if (displayThreshold && amount < displayThreshold) {
    const toPlainString = (num: number) => {
      return ('' + +num).replace(
        /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
        function (a, b, c, d, e) {
          return e < 0
            ? b + '0.' + Array(1 - e - c.length).join('0') + c + d
            : b + c + d + Array(e - d.length + 1).join('0');
        }
      );
    };
    return `<${toPlainString(displayThreshold)}`;
  }

  // is zero
  if (amount === 0) {
    return '0.00';
  }

  if (amount < 1 && !tokenPrecision) {
    return getFirstThreeNonZeroDecimals(amount) ?? '0.00';
  }

  // precision & comma & format
  const precision = tokenPrecision || 2;

  let format;
  if (notation === 'standard') {
    format = `0,0.${'0'.repeat(precision)}`;
  } else format = `0.${'0'.repeat(precision)}a`;

  let amountWithPrecision;

  if (isRoundUp) {
    //rounded up and added comma
    amountWithPrecision = amount.toLocaleString(undefined, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    });

    // with format
    // 'standard' doesn't need to format because the comma are already added
    if (notation === 'standard') return amountWithPrecision;
    else return numeral(amountWithPrecision).format(format).toUpperCase(); // 'compact'
  } else {
    // rounded down and no comma
    amountWithPrecision = withNotRoundedPrecision(amount, precision);
    //when we don't need the format
    if (amount < 1000) {
      return amountWithPrecision;
    }

    // with format
    //use Math.floor to avoid rounding up
    return numeral(amountWithPrecision)
      .format(format, Math.floor)
      .toUpperCase();
  }
};
