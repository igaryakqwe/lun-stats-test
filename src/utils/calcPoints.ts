export const calcPoints = (maxValue: number): number[] => {
  const points = [];
  const point = maxValue / 7;
  for (let i = 7; i >= 0; i--) {
    points.push(Math.round(point * i));
  }
  return points;
}
