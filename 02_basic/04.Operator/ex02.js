/**
 * 단항연산자
 */
{
  let a = 10;
  // a++, a-- 출력 후 값 계산
  // ++a, --a 계산 후 출력
  console.log(a++); // 10
  console.log(a--); // 11
  console.log(++a); // 11
  console.log(--a); // 10
}

{
  // +a => 숫자로 변경 , 사용 지양
  console.log(+'5');
  console.log(+true);
  console.log(+false);
  console.log(+''); // 0
  console.log(+null); // 0
  console.log(+NaN); // NaN
  console.log(+undefined); // NaN
}

{
  let n = -10;
  console.log(-n);
}