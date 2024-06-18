/**
 * 함수의 속성
 * 함수는 객체
 * 속성을 가지고 있다
 */
{
  // length 속성
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  console.log(greet.length); // 함수의 파라미터의 길이를 찍어줌 
}

{
  function sum(a, b) {
    console.log(sum.length);
    return a + b;
  }

  sum(1, 2);
  sum(1, 2, 3);
}

{
  function spyFunc(func) {
    console.log(`파라미터: ${func.length}개`)
  }

  function sum(a, b) {
    return a + b;
  }

  function vector(x, y, z) {
    return { x, y, z };
  }
  spyFunc(sum); // 2
  spyFunc(vector); // 3
}

{
  // name 속성
  function sum(a, b) {
    return a + b;
  }
  console.log(sum.name); // sum
}

{
  function sum(a, b) {
    console.log(sum.name); // sum
    return a + b;
  }
  sum(10, 20);
}

{
  function spyFunc(func) {
    console.log(`함수: ${func.name}의 파라미터: ${func.length}개`);
  }
  
  function sum(a, b) {
    console.log(sum.name);
    return a + b;
  }
  
  function vector(x, y, z) {
    return { x, y, z };
  }
  spyFunc(sum); // sum 2
  spyFunc(vector); // vector 3
}

{
  // arguments object 속성 : 함수의 전달되는 모든 인자값을 가지고 있는 객체
  // 함수 이름 안적어
  function sum(a, b) {
    console.log(arguments); // 10 20
    return a + b;
  }
  sum(10, 20); 
}

{
  // 커스텀 속성을 만들 수 있다.
  function sum(a, b) {
    if (!sum.callCount) { // callCount가 선언되지 않았다면
      sum.callCount = 0; // 값을 할당해주고
    }
    sum.callCount += 1;
    console.log(`${sum.name} 호출 횟수: ${sum.callCount}`);
    return a + b;
  }
  sum(10, 20); // 1번 호출
  sum(20, 30); // 2번 호출
  sum(30, 40); // 3번 호출
}