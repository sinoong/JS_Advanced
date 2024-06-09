export function div(a, b) {
  if (b === 0) {
    throw new Error('0이 아닌 수로 나누어 주세요.');
  }
  return a / b;
}