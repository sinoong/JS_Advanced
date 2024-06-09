/**
 * 변수 복사
 */
{
  let a = 10;

  function f(value) { 
    //
  }

  class Person {
    constructor(age) {
      //
    }
  }

  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  // 변수는 선언된 이후에 여러 곳에 참여한다. 
  // 이렇게 변수가 여러 곳에 참여할 때, 복사되어 참여한다.
  f(a);
  new Person(a);
  item[a];
}

{
  let a = 10;
  let b = a;

  a = 80;
  console.log({ a, b });
}

{
  let person = {
    name: 'CodingMax'
  };

  let person2 = person;

  person2.name = '코딩맥스';
  console.log(person);
  console.log(person2);
}

{
  let person = {
    name: 'CodingMax'
  };

  let jsonString = JSON.stringify(person);
  let person2 = JSON.parse(jsonString);

  person2.name = '코딩맥스';
  console.log(person);
  console.log(person2);
}