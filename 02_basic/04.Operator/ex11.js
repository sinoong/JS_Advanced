/**
 * typeof 연산자
 */
{
  console.log(typeof 42);
  console.log(typeof 3.14);
  console.log(typeof NaN);
  console.log(typeof Infinity);

  console.log(typeof '');
  console.log(typeof 'hello');

  console.log(typeof true);
  console.log(typeof false);
}

{
  console.log(typeof Symbol());
  console.log(typeof BigInt(123));
}

{
  let x;
  console.log(typeof x);
}

{
  function greet() {
    console.log('Hello');
  }

  console.log(typeof greet);

  const sum = (a, b) => {
    return a + b;
  }
  console.log(typeof sum);
}

{
  console.log(typeof {});
  console.log(typeof { name: 'CodingMax' });
}

{
  console.log(typeof []);
  console.log(typeof [1, 2, 3]);
  console.log(Array.isArray([]));
  console.log(Array.isArray({}));
  console.log([].constructor === Array);


  let numbers = [1, 2, 3];
  console.log(numbers.constructor === Array);
}

{
  console.log(typeof undefined);
  console.log(typeof null)
  console.log(typeof {});
  console.log({} instanceof Object);
  console.log(null instanceof Object);
}

{
  console.log(Object.prototype.toString.call(null));
}