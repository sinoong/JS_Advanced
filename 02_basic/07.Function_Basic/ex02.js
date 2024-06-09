/**
 * 함수 호이스팅
 */
{
  sayHello();

  function sayHello() {
    console.log(`Hello!`);
  }
}

{
  var age;
  age = undefined;
  console.log(age);
  sayHello();
  function sayHello() {
    console.log('Hello');
  }
  ase = 30;
  sayHello();
}

{
  function awesomeFunc() {
    func1();
    func2();
    func3();
  }

  function func1() {
    //...
  }
  function func2() {
    //...
  }
  function func3() {
    //...
  }
}