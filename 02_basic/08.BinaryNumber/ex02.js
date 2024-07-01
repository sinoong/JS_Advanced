/**
 * 비트 연산자
 */

/**
 * 비트 이동 연산자
 * 
 * LEFT SHIFT : a<<b
 * 값 a의 비트를 왼쪽으로 b 만큼 이동한다.
 * 왼쪽으로 이동할 때 맨 오른쪽에 추가되는 비트는 항상 0이다
 * 00101<<2 => 10100 => 00101에 2^2을 곱한 것과 같다
 * 
 * RIGHT SHIFT: a>>b
 * 값 a의 비트를 오른쪽으로 b 만큼 이동한다
 * 오른쪽으로 이동할 때 왼쪽에 추가되는 비트는 MSB 이다(양수면 0, 음수면 1)
 * 00101>>2 => 00001 => 00101에 2^2으로 나눈 것과 같다
 * 5비트 타입에서 MSB가 부호 비트라면, 10101>>2 => 11101
 * 
 * UNSIGNED RIGHT SHIFT: a>>>b
 * 값 a의 비트를 오른쪽으로 b 만큼 이동한다.
 * 오른쪽으로 이동할 때 왼쪽에 추가되는 비트가 항상 0이다. 그래서 부호 비트가 제거된다.
 * 00101>>2 => 00001 => 00101에 2^2으로 나눈 것과 같다.
 */

/**
 * AND(&)
 */
{
  console.log(1 & 1);
  console.log(1 & 0);
}

/**
 * OR(|)
 */
{
  console.log(1 | 1);
  console.log(1 | 0);
}

/**
 * XOR(^) 같을때만 0 
 */
{
  console.log(1 ^ 1); // 0
  console.log(0 ^ 0); // 0
  console.log(1 ^ 0); // 1
  console.log(0 ^ 1); // 1
}

/**
 * NOT(~)
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
  console.log((3).toString(2)); // 11
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
