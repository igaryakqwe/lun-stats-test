export const stringToRGB = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = Math.abs(hash) % 16777216;
  const r = (color >> 16) & 255;
  const g = (color >> 8) & 255;
  const b = color & 255;

  return `rgb(${r}, ${g}, ${b})`;
}
