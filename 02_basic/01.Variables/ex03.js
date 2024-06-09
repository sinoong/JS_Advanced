/**
 * 변수의 이름 그리고 그 이름의 중요성
 */

/**
 * 하나의 수업에서 여러 코드를 사용할 때, 아래와 같이 {} 을 사용하여
 * 블럭 단위로 구분하여 한 파일에 작성합니다.
 */ 
{
  var a = 10;
  // var, let, const
  // var identifier = value;
  let age = 9;
}

{
  // Camel Case
  let whatIsMyName = 'CodingMax';

  // Snake Case
  let my_name = '코딩맥스';
  let what_is_my_name = 'CodingMax';

  // Pascal Case
  class Person {};
  class Animal {};
  // 타입스크립트의 enum, interface, class 등 type의 이름에 많이 사용한다.

  // 상수
  const PI = 3.141592;
  const SERVER_ADDRESS = 'http://localhost';
}

{
  var age = 9;
  var age = 10;
  // $, _
  var $age = 20;
  var _age = 30;

  $//jquery
  _//underscore, lodash
}

{
  // 예약어는 사용할 수 없다.
  let let = 20;
  let const = 20;
  let function = () => {};
}