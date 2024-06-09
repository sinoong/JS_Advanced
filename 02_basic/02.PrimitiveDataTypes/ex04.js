/**
 * 부동소수점
 */
{
  console.log(0.1);
  console.log(0.2);
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3);
  console.log(Number.EPSILON);
  console.log((0.1 + 0.2) - 0.3 < Number.EPSILON);
}

{
  function compareNumbers(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
  }
  const result = compareNumbers(0.1 + 0.2, 0.3);
  console.log(result);
}