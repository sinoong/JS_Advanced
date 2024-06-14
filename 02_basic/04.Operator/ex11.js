/**
 * typeof 연산자
 * 변수의 타입을 조사할 때 사용
 * 결과는 문자열
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
  console.log(typeof x); // undefined => 값을 통해서 타입을 추론하는구나
}

{
  function greet() {
    console.log('Hello');
  }

  console.log(typeof greet); // function

  const sum = (a, b) => {
    return a + b;
  }
  console.log(typeof sum);
}

{
  console.log(typeof {}); // object
  console.log(typeof { name: 'CodingMax' });
}

{
  // 배열과 객체는 typeof로 구분할 수 없다
  // 그래서 Array.isArray로 써야함
  // constructor로도 판단 가능
  console.log(typeof []); // object
  console.log(typeof [1, 2, 3]);
  console.log(Array.isArray([])); // true
  console.log(Array.isArray({})); // false
  console.log([].constructor === Array); // true 


  let numbers = [1, 2, 3];
  console.log(numbers.constructor === Array);
}

{
  console.log(typeof undefined); // undefined
  console.log(typeof null) // object (버그임, 실순데 이제와서 고치기 늦음)
  console.log(typeof {}); // object
  console.log({} instanceof Object); // true
  console.log(null instanceof Object); // false (버그 증명)
}

{
  // 타입 정보를 더 자세하게 가져오기
  // 객체의 프로토타입을 사용
  console.log(Object.prototype.toString.call(null)); // [object Null]
  console.log(Object.prototype.toString.call([])) // [object Array]
}