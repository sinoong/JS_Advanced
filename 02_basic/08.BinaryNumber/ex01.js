/**
 * 2진수, 8진수, 16진수 표현
 */

/**
 * 2진수는 0b
 * 8진수는 0o
 * 16진수는 0x
 * 를 숫자의 접두어로 붙여서 각각의 진수 값을 표현한다.
 */
{
  console.log(0b1111)
  console.log(0o777)
  console.log(0xFFFF)
}

/**
 * 각 진수간의 변환에는 number 타입의 toString() 메서드를 사용할 수 있다.
 * Number.prototype.toString()  => 몇진수를 쓸건지 
 */
{
  // 10진수로 변환
  console.log(0b1111.toString(10));
  console.log(0o777.toString(10));
  console.log(0xFFFF.toString(10));

  console.log(0b1111.toString(16));
  console.log(0o777.toString(2));
  console.log(0xFFFF.toString(2));
  console.log((15).toString(2));
}

/**
 * 2진수, 8진수, 16진수 값의 문자열을 10진수로 변경할 때는 parseInt를 사용할 수 있다.
 * 주의할 점은 2진수와 8진수의 경우 prefix를 인식하지 못 한다.
 * 그리고 반드시 해당 문자열이 몇 진법인지를 알려줘야 한다.
 */
{
  console.log(parseInt('1111', 2));
  console.log(parseInt('77', 8));

  // 16진수는 prefix를 붙여도 parsing이 가능하다.
  console.log(parseInt('0xFFFF'));
  console.log(parseInt('FFFF', 16));
}