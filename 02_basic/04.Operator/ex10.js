/**
 * 객체 Spread 연산자
 */
{
  const person = { name: 'CodingMax', age: 30 };
  const clone = { ...person };
  console.log(clone);

  const person2 = { age: 10 };
  console.log({ ...person, ...person2 });
}

{
  const info = {
    addresss: '서울특별시'
  };
  const person2 = {
    ...person,
    ...info
  };
  console.log(person2);
}

{
  const p1 = {
    savHello: function () {
      console.log('Hello');
    }
  };

  const p2 = {
    sayHello: function () {
      console.log('안녕하세요');
    }
  };

  const person = { name: '코딩맥스', ...p1, ...p2 };
  console.log(person);
  person.sayHello();
}

{
  const items = {
    name: '게임기',
    info: {
      price: 10000
    }
  };
  const clone = { ...item };
  clone.name = '과일';
  clone.info.price = 20000;
  console.log(clone);
  console.log(items);
}