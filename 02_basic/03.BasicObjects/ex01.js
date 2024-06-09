/**
 * 객체 Object 
 */
{
  const jerry = {
    'name': 'Jerry',
    'age': 10,
    'job': 'Student'
  }
}

{
  const emptyObject = {};
  const emptyObject2 = new Object();

  const person = {};
  console.log(person.name);
  person.name = 'CodingMax'
  console.log(person.name);
  person['age'] = 22;
  console.log(person.age, person['age']);
}

{
  const person = {
    name: 'CodingMax', age: 20
  };
  console.log(person.name);
  console.log(person['name']);
  console.log(person.address);
  console.log(person['address']);

  if (person.name) {
    console.log(person.name);
    console.log(person['name']);
  }
  if ('name' in person) {
    console.log(person.name);
    console.log(person['name']);
  }
  if ('address' in person) {
    console.log(person.address);
    console.log(person['address']);
  }

  delete person.name;
}

{
  const calculator = {
    add: function (a, b) {
      return a + b;
    },
    sub: function (a, b) {
      return a - b;
    }
  }
  console.log(calculator.add(20, 10));
  console.log(calculator.sub(20, 10));
  console.log(calculator['add'](20, 10));
}

{
  const person = {
    name: 'CodingMax',
    age: 10, job: 'programmer',
    greeting: function (friend) {
      console.log(`
      Hello! ${friend}, 
      I'm ${this.name}.
      ${this.age} years old.
      `);
    }
  };
  person.greeting('Jim');

  console.log(Object.keys(person));
  console.log(Object.values(person));

  for (const key of Object.keys(person)) {
    console.log(person[key]);
  }
  for (const key in person) {
    console.log(`${key} = ${person[key]}`);
  }
}