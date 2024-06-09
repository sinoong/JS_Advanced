/**
 * 비트 연산자
 */

/**
 * AND
 */
{
  console.log(1 & 1);
  console.log(1 & 0);
}

/**
 * OR
 */
{
  console.log(1 | 1);
  console.log(1 | 0);
}

/**
 * XOR
 */
{
  console.log(1 ^ 1);
  console.log(0 ^ 0);
  console.log(1 ^ 0);
  console.log(0 ^ 1);
}

/**
 * NOT
 */
{
  // 32비트 정수 피연산자는 2의 보수에 따라 반전된다.
  // 최상위 비트를 부호 비트로 사용하기 때문에
  // 어떤 수 x에 NOT 비트 연산을 하면 -(x + 1) 의 값이 된다.
  console.log(~0); // -1
  console.log(~1); // -2
}

{
  console.log(10 << 2);
  console.log(10 >> 2);
  console.log(10 >>> 2);
}

/**
 * 10진수를 2진수로 표현하기
 */
{
  // 양수는 잘 변환되지만
  console.log((3).toString(2));
  // 음수는 그렇지 않다
  console.log((-3).toString(2)); // -11
  // 그러나 >>> 0 을 사용해서 fake로 타입을 unsigned number로
  // 변환을 해서 실행하면 올바르게 출력된다.
  console.log((-3 >>> 0).toString(2));
}

/**
 * 위 내용을 바탕으로 10진수를 2진수 문자열로 변경하는 함수를 작성해 보자
 */
{
  function decToBin(n) {
    if (typeof n !== 'number') {
      throw new Error('숫자값을 입력해 주세요');
    }

    if (n < 0) {
      return (n >>> 0).toString(2);
    }

    let binary = '';
    do {
      const bit = n & 0b1;
      n = n >> 1;
      binary = `${bit}` + binary;
    } while (n > 0);
    return binary.padStart(32, '0');
  }

  console.log(decToBin(10));
  console.log(decToBin(-10));
  console.log(decToBin(10 >>> 2));
  console.log(decToBin(-10 >>> 2));
}
