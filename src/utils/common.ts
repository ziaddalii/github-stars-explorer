export function formatNumber(num: number) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export function getTotalPagesCount(x: number, y: number) {
  if (y === 0) {
    throw new Error("Denominator cannot be zero.");
  }
  return Math.ceil(x / y);
}
