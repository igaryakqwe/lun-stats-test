export const convertAmount = (num: number): string => {
  if (num >= 1000000) {
    const million = num / 1000000;
    return `Сума: ${million.toLocaleString('en-US', { maximumFractionDigits: 6 })} млн`;
  } else {
    return num.toLocaleString('en-US');
  }
}
