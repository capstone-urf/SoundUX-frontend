export const numberToWon = (number: number | string): string => {
  if (typeof number === 'string') number = parseInt(number, 10);

  return number.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
};
