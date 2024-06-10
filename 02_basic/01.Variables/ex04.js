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
    name: "CodingMax",
  };

  let person2 = person;

  person2.name = "코딩맥스";
  console.log(person);
  console.log(person2);
}

{
  let person = {
    name: "CodingMax",
  };

  let jsonString = JSON.stringify(person);
  let person2 = JSON.parse(jsonString); // json을 이용해서 값 복사를 한다, 순환 클래스 일 땐 안됨

  person2.name = "코딩맥스";
  console.log(person);
  console.log(person2);
}

// 얕은 복사 (서로 다른 메모리를 가리킴 그래서 재 할당하면 재 할당 된 애만 값이 바뀜)
// 깊은 복사 (같은 메모리를 가리켜서 재할당 하면 같이 값이 바뀜)
// 일반적인 프리미티브 들은 얕은 복사가 된다
// class, array, 객체 등 은 let person2 = person 할 경우 깊은 복사가 된다
