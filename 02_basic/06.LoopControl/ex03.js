/**
 * for-in 루프
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