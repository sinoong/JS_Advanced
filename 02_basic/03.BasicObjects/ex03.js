/**
 * 배열 원소 연산(push, pop)
 */
{
  const emptyArray = [];
  emptyArray[10] = 'a';
  console.log(emptyArray.length);
  console.log(emptyArray);
  const numbers = [1, 2, 3, 4];
  numbers[10] = 10;
  console.log(numbers.length);
  console.log(numbers);
}

{
  const items = [];
  items.push('a');
  items.push('b');
  console.log(items);
  items.push('c');
  console.log(items);

  items.pop();
  console.log(items);
  const item = items.pop();
  console.log({ item });
  console.log(items);
  console.log(items);
  console.log(items.pop());
  console.log(items);
}