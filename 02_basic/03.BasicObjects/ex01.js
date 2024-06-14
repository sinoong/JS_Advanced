/**
 * 객체 Object
 */
{
  const jerry = {
    name: "Jerry",
    age: 10,
    job: "Student",
  };
}

{
  // # 객체 생성 방법
  // 1. {}
  const emptyObject = {};
  // 2. Object()
  const emptyObject2 = new Object();

  const person = {};
  console.log(person.name); // undefined
  person.name = "CodingMax"; // name이라는 속성 추가
  console.log(person.name); // CodingMax
  person["age"] = 22;
  console.log(person.age, person["age"]); // 객체에 접근 방식
}

{
  const person = {
    name: "CodingMax",
    age: 20,
    address: {
      city: "Seoul"
    }
  };

  const dog = {
    name: "Coco",
    age: 2
  }

  console.log(person.name);
  console.log(person["name"]);
  console.log(person.address); // { city: 'Seoul' }
  console.log(person["address"]);

  // 객체 분해 또는 객체 구조 분해
  // Object destructuring
  const { name, age } = person; // person에 있는 name과 age 값이 이 변수로 들어옴
  const {name: myDogName, age: myDogAge} = dog; // 객체의 키 값이 같다면 :변수 로 지정 가능
  console.log(name, age)
  console.log(myDogName, myDogAge)

  const {address: {city}} = person; // 객체 안의 객체 꺼낼 때
  console.log(city) // Seoul

  if (person.name) {
    console.log(person.name);
    console.log(person["name"]);
  }
  if ("name" in person) {
    console.log(person.name);
    console.log(person["name"]);
  }
  if ("address" in person) {
    console.log(person.address);
    console.log(person["address"]);
  }

  // name 속성 삭제
  // delete 키워드로 객체 삭제
  delete person.name;
}

{
  // 객체 메서드
  const calculator = {
    add: function (a, b) {
      return a + b;
    },
    sub: function (a, b) {
      return a - b;
    },
  };
  console.log(calculator.add(20, 10));
  console.log(calculator.sub(20, 10));
  console.log(calculator["add"](20, 10));
}

{
  // this 키워드
  const person = {
    name: "CodingMax",
    age: 10,
    job: "programmer",
    greeting: function (friend) {
      console.log(`
      Hello! ${friend}, 
      I'm ${this.name}.
      ${this.age} years old.
      `);
    },
  };
  person.greeting("Jim");


  // Object
  // Object.keys(), Object.values()
  console.log(Object.keys(person)); // 키들 쫙 나와
  console.log(Object.values(person)); // 벨류 쫙 나와

  for (const key of Object.keys(person)) {
    console.log(person[key]); // 값들 출력
  }
  for (const key in person) {
    console.log(`${key} = ${person[key]}`);
  }
}

// 객체 = 속성(값, 데이터) + 메서드(알고리즘)
// 프로그램 = 데이터 + 알고리즘
// {}
// 객체 타입
// const person = {}; => 객체 리터럴로 생성한 객체는 객체 타입이 아니라 객체 값이다 (실제 메모리에 할당 되고 있는 인스턴스)
