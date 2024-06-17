/**
 * for-in 루프 (key)
 * for(const key in object) {
 *  실행할 코드 블럭
 * }
 * 객체의 키를 순회할 때 사용
 * 새로운 블록 범위를 생성하기 때문에 key가 매번 생긴다
 * 그래서 const 사용 가능 
 */
{
  const person = {
    name: 'CodingMax',
    age: 30,
    address: 'Seoul'
  }

  for (const key in person) {
    console.log(`${key} = ${person[key]}`)
  }
}

{
  const person = {
    name: 'CodingMax',
    age: 30,
    address: 'Seoul',
    greeting: function () {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  for (const key in person) {
    console.log(`${key} = ${person[key]}`)
  }
}

{
  const person = {
    name: 'CodingMax',
    age: 30,
    address: 'Seoul',
    greeting: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
    [Symbol('id')]: '1234',
  }

  for (const key in person) {
    console.log(`${key} = ${person[key]}`)
  }
}

{
  const person = {
    name: 'CodingMax',
    age: 30,
    address: 'Seoul',
    greeting: function () {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  Object.defineProperty(person, 'name', {
    enumerable: false
  });

  for (const key in person) {
    console.log(`${key} = ${person[key]}`)
  }
}

{
  const numbers = [1, 2, 3, 4];
  for (const key in numbers) {
    console.log(`${key} => ${numbers[key]}`)
  }
  
  const chars = 'abed';
  for (const key in chars) {
    console.log(`${key} => ${chars[key]}`);
  }
}