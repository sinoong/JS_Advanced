/**
 * 비교연산자
 */
{
  console.log(5 == '5');
  console.log(true == 1);
  console.log(null == undefined);
}

{
  console.log(5 != '5');
  console.log(true != 1);
  console.log(null != undefined);
}

{
  console.log(5 === '5');
  console.log(true === 1);
  console.log(null === undefined);
}

{
  console.log(5 !== '5');
  console.log(true !== 1);
  console.log(null !== undefined);
}

{
  console.log(5 > 3);
  console.log('10' > 2);


  console.log(5 < 3);
  console.log('10' < 2);

  console.log(5 >= 5);
  console.log('10' >= 2);

  console.log(2 <= 4);
  console.log('2' <= 10);
}

{
  console.log(NaN == NaN);
  console.log(NaN === NaN);
  console.log(NaN > 0);
  console.log(NaN < 0);
}

{
  console.log(isNaN('a'));
  console.log(isNaN('10'));
  console.log(isNaN(NaN));
}

{
  console.log('a' < 'b');
  console.log('ab' < 'ac');
  console.log('abc' < 'aca');
  console.log('hello' > 'world');
}

{
  let obj1 = { name: 'CodingMax', age: 10 };
  let obj2 = { name: 'CodingMax', age: 10 };
  console.log(obj1 == obj2);
  console.log(obj1 === obj2);

  let obj3 = obj1;
  console.log(obj3 == obj1);
  console.log(obj3 === obj1);
}