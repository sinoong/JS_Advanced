/**
 * var 변수 문제점 (함수 스코프)
 */

{
  function testShadowing() {
    var x = 5;
    if (true) {
      var x = 10;
      console.log(x);
    }
    console.log(x);
  }
  testShadowing();
}

{
  function test() {
    x = 5;
    console.log(x);
  }
  test();
}

{
  function test() {
    blahblah = 'Hello';
    console.log(blahblah);
  }
  test();
}