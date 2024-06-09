/**
 * 배열 원소 연산
 * slice
 */
{
  const numbers = [1, 2, 3, 4];
  const subNumbers = numbers.slice(1, 3);
  console.log(subNumbers);
  console.log(numbers);
  const sub2 = numbers.slice(1);
  console.log(sub2);
  const sub3 = numbers.slice();
  console.log(sub3);
}

{
  const items = [
    1,
    {
      name: 'CodingMax'
    }
  ];
  const newItems = items.slice();
  console.log(items);
  console.log(newItems);
  newItems[0] = 10;
  newItems[1].name = '코딩맥스';
  console.log(items);
  console.log(newItems);
}