/**
 * 객체 Spread 연산자
 */
{
  const person = { name: "CodingMax", age: 30 };
  const clone = { ...person };
  console.log(clone);

  // 객체 병합 => 동일한 키가 존재하면 나중에 나오는 객체의 값으로 덮어 씌워짐
  const person2 = { age: 10 };
  console.log({ ...person, ...person2 });
}

{
  // 객체 병합
  const person = { name: "CodingMax", age: 30 };
  const info = {
    addresss: "서울특별시",
  };
  const person2 = {
    ...person,
    ...info,
  };
  console.log(person2);
}

{
  // 함수 이름도 동일하기 때문에 p2가 오버라이딩 되서 안녕하세요가 출력된다
  const p1 = {
    savHello: function () {
      console.log("Hello");
    },
  };

  const p2 = {
    sayHello: function () {
      console.log("안녕하세요");
    },
  };

  const person = { name: "코딩맥스", ...p1, ...p2 };
  console.log(person);
  person.sayHello();
}

{
  const items = {
    name: "게임기", // 프리미티브라서 값 복사
    // 객체니까 참조복사
    info: {
      price: 10000,
    },
  };
  const clone = { ...items };
  clone.name = "과일";
  clone.info.price = 20000;
  console.log(clone); // 과일 20000
  console.log(items); // 게임기 20000
}
{
  const items = {
    name: "게임기",
    type: "핸드폰",
    info: {
      price: 10000,
    },
    [Symbol("id")]: "1234-xx",
  };
  const { name, ...rest } = items;
  console.log(rest);
  console.log({ ...items }); // Symbol은 복사가 안됨(나중)

  // 배열이나 객체나 얕은복사를 한다
}
