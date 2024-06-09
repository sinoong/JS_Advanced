/**
 * 함수의 속성
 */
{
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  console.log(greet.length);
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
  spyFunc(sum);
  spyFunc(vector);
}

{
  function sum(a, b) {
    return a + b;
  }
  console.log(sum.name);
}

{
  function sum(a, b) {
    console.log(sum.name);
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
  spyFunc(sum);
  spyFunc(vector);
}

{
  function sum(a, b) {
    console.log(arguments);
    return a + b;
  }
  sum(10, 20); 
}

{
  function sum(a, b) {
    if (!sum.callCount) {
      sum.callCount = 0;
    }
    sum.callCount += 1;
    console.log(`${sum.name} 호출 횟수: ${sum.callCount}`);
    return a + b;
  }
  sum(10, 20);
  sum(20, 30);
  sum(30, 40);
}