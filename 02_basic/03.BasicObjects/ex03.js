/**
 * 배열 원소 연산(push, pop)
 */
{
  // 이렇게 작성시 배열의 길이가 깨져버림
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
  // 배열의 끝에 추가하고 삭제할 수 있다 push, pop
  const items = [];
  items.push('a');
  items.push('b');
  console.log(items);
  items.push('c');
  console.log(items);

  items.pop();
  console.log(items);
  const item = items.pop(); // pop은 꺼낸 값을 반환해줘
  console.log({ item });
  console.log(items);
  console.log(items);
  console.log(items.pop());
  console.log(items); // 빈 배열에서 pop을 하면 undefined가 반환되고 빈배열은 유지
}