/**
 * boolean
 */

{
  let a = 10;
  let b = 5;

  // 비교문
  console.log(a > b);
  console.log(a === b);
  console.log(a !== b);
}

{
  // 논리 연산
  let TRUE = true;
  let FALSE = false;
  console.log(TRUE && FALSE); // AND
  console.log(TRUE || FALSE); // OR
  console.log(!TRUE); // NOT
  console.log(!FALSE);
}

{
  // Boolean() === !! 하지만 명시적으로 Boolean으로 쓰기
  console.log(Boolean(true));
  console.log(Boolean(42));
  console.log(Boolean("Hello"));
  console.log(Boolean(false));
  console.log(Boolean(null)); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean(0)); // false
  console.log(Boolean(NaN)); // false
  console.log(Boolean("")); // false
}
