export const numberToWon = (price: number | string): string => {
  if (typeof price === 'string') price = parseInt(price, 10);

  return price.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
};
