/**
 * 부동소수점 (왜 오차가 발생할까?)
 */
{
  console.log(0.1);
  console.log(0.2);
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3); // false
  console.log(Number.EPSILON); // 굉장히 작은 수
  console.log((0.1 + 0.2) - 0.3 < Number.EPSILON); // 엡실론과 비교해서 작으면 같다고 보게끔 설정
}

{
  function compareNumbers(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
  }
  const result = compareNumbers(0.1 + 0.2, 0.3);
  console.log(result);
}