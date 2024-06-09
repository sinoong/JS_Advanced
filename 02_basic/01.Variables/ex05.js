/**
 * 변수 스코프
 */
{
  function testVarScope() {
    if (true) {
      var x = 5;
    }
    console.log(x);
  }
  testVarScope();
}

{
  function testTimer() {
    for (var i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
  }
  testTimer();
}

{
  function testBlockScope() {
    if (true) {
      let x = 10;
    }
    console.log(x);
  }
  testBlockScope();
}

{
  function testTimer() {
    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
  }
  testTimer();
}