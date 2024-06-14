/**
 * undefined와 null
 */
{
  var a;
  console.log({ a });

  let b;
  console.log({ b });

  const c = 12; // 상수라서 선언과 동시에 값을 설정 해 줘야함
  console.log({ c });
}

// null은 직접 할당
{
  var a = null;
  console.log({ a });

  let b = null;
  console.log({ b });

  const c = null;
  console.log({ c });
}

// JS 에서 분모가 0이면 Infinity가 나옴
{
  function div(a, b) {
    if (b === 0) {
      return null;
    }
    return a / b;
  }
  console.log(div(10, 0));
}

// [].indexOf(value) => value값이 있는 인덱스를 찾아 줌
// 만약 []에 없는 값을 입력시 -1 반환 (JS의 인덱스는 0부터 양수를 반환하기에 음수가 될 수 없어서.)
console.log([1, 2, 3, -1].indexOf(-1));

// [].find() => 배열 안에 찾고자 하는 값이 있다면 그 값을 반환함
// 값이 없다면 undefined
const result = [1, 2, 3, -1].find((it) => it === 2);
console.log({ result });
