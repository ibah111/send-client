export function getPrecision(num: number): number {
  const value = (Math.round(num * 100) / 100).toFixed(2);
  return Number(value);
}
