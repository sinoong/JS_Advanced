/**
 * 함수의 파라미터 그리고 아규먼트
 */
{
  function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
  }

  greet();
  greet('CodingMax');
}

{
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
  point();
  point(10);
  point(10, 20);
  point(10, 20, 30);
}

{
  function manyArgs() {
    console.log(Array.isArray(arguments));
    for (const arg of arguments) {
      console.log(arg);
    }
  }
  manyArgs();
  manyArgs(1);
  manyArgs(1, 2);
  manyArgs(1, 2, 3);
  manyArgs(1, 'Hello', ['a', 'b'], { name: 'Jim' });
}

{
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
  function logArgs([head, middle, ...tail]) {
    console.log({ head, middle, tail });
  }
  logArgs([1, 2, 3, 4, 5]);
}