/**
 * number
 */
{
  let a = 10;
  let b = 5;
  let c = 3.141592;

  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a ** b);
  console.log(10 % 2);
}

{
  for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
      console.log(i, '3의 배수이면 어떤 일을 한다');
    }
  }
}

{
  let items = ['a', 'b', 'c'];
  function getItem(index) {
    return items[index % items.length];
  }
  console.log(getItem(0));
  console.log(getItem(100));
  console.log(100 % 3);
}

{
  console.log(Number.MIN_VALUE);
  console.log(Number.MAX_VALUE);
  console.log(Number.NaN); // Not a Number 
  console.log(10 / 'a');
  console.log(parseInt('1'));
  console.log(parseInt('a'));
  console.log(Infinity);
  console.log(-Infinity);
  console.log(1 / 0);
  console.log(-1 / 0);
}