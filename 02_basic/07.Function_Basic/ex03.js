/**
 * 함수의 파라미터 그리고 아규먼트
 */
{
  // 인자의 기본값을 설정할 수 있다
  function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
  }

  greet();
  greet('CodingMax');
}

{
  // 인자의 기본값을 설정할 땐 맨 뒤에 와야한다
  function sum(a, b = 10) {
    console.log({ a, b });
  }
  sum(20);
  sum(20, 30);
}

{
  function point(x = 0, y = 0, z = 0) {
    console.log({ x, y, z });
    return {
      x,
      y,
      z
    }
  }
  // 각각 인자에 할당 
  point();
  point(10);
  point(10, 20);
  point(10, 20, 30);
}

{
  // 자바스크립트의 일반함수
  // argument object
  function manyArgs() {
    console.log(Array.isArray(arguments)); // arguments는 배열이 아님 
    for (const arg of arguments) {
      console.log(arg);
    }
  }

  // 화살표 함수는 arguments 지원 안하기 때문에 ...로 써야함 ...이것도 제일 뒤로 와야함, ...는 하나만 와야한다
  const manyArgs = (...args) => {
    console.log(Array.isArray(args))
    for (const arg of args) {
      console.log(arg)
    }
  }
  manyArgs();
  manyArgs(1);
  manyArgs(1, 2);
  manyArgs(1, 2, 3);
  manyArgs(1, 'Hello', ['a', 'b'], { name: 'Jim' });
}

{
  // 구조분해
  function logArgs({ name, age, ...rest }) {
    console.log({ name, age, rest });
  }
  const person = {
    name: 'CodingMax',
    age: 30,
    address: 'Seoul',
    info: {
      country: 'Korea'
    }
  }
  logArgs(person);
}

{
  // 배열 구조분해
  function logArgs([head, middle, ...tail]) {
    console.log({ head, middle, tail });
  }
  logArgs([1, 2, 3, 4, 5]);
}