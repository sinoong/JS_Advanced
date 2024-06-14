/**
 * 논리연산자
 */
{
  let x = 5;
  let y = -5;
  console.log(x > 0 && y > 0);
  console.log(x > 0 || y > 0);
  console.log(!true);
  console.log(!false);

  let z = -10;
  console.log(x > 0 && (y > 0 || z > 0));
  console.log(x > 0 && (y < 0 || z < 0));

  // 단축평가 (앞에서 판단 끝)
  console.log(x < 0 && (y > 0 || z > 0));
  console.log(x > 0 || (y > 0 || z > 0));
}