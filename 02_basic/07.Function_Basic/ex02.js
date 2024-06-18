/**
 * 함수 호이스팅
 * 함수의 선언부가 최상단으로 이동하는 것
 * 일반 함수에서는 호이스팅이 발생한다
 * 화살표 함수나 변수에 담는 const aa = () => {}는 발생하지 않음
 */
{
  // 이렇게 상단으로 선언해도 나옴
  sayHello();

  function sayHello() {
    console.log(`Hello!`);
  }
}

{
  // 함수를 변수에 담지 않았음 그래서 상단에서도 호출 가능
  var age;
  age = undefined;
  console.log(age); // undefined
  sayHello(); // hello
  function sayHello() {
    console.log('Hello');
  }
  ase = 30;
  sayHello(); // hello
}
{
  // 함수를 변수에 담으면 호이스팅 안됨 
  var sayHelloArrow
  sayHelloArrow() // 변수에 담았으니 상단에서 호출 불가 (undefined)

  var sayHelloArrow = () => {
    console.log("hello")
  }
  sayHelloArrow() // hello
}

{
  // 함수 호이스팅 호불호
  // 모듈 
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