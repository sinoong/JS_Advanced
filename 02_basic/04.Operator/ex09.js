/**
 * 배열 Spread 연산자
 */
{
  const arr = [1, 2, 3];
  const copyArr = [...arr];
  console.log(copyArr);
}

{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];

  const numbers = [...arr1, ...arr2, ...arr3];
  console.log(numbers);

  const chars = ['a', 'b', 'c'];
  console.log([...arr1, ...chars]);
}

{
  const chars = [...'Helloworld'];
  console.log(chars);
}

{
  const items = [1, undefined, 3];
  const copy = [...items];
  console.log(items);
}

{
  const arr = [1, 2, 3, 4, 5];
  const copy = [...arr.slice(2)];
  console.log(copy);
}

{
  function sum(a, b) {
    return a + b;
  }
  const numbers = [1, 2];
  const result = sum(...numbers);
  console.log(result);
  console.log(Math.max(...numbers));
}

{
  const items = [[1], [2]];
  const clone = [...items];
  console.log(clone);
  clone[o][o] = 'Hello';
  console.log(clone); 
  console.log(items);
}