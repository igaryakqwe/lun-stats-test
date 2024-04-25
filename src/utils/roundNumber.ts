export const roundNumber = (num: number): number => {
  const number = num.toString();
  if (+number[1] > 4) {
    return +(+number[0] + 1 + '00');
  } else {
    return +(+number[0] + '50');
  }
}
