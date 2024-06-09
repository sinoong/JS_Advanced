/**
 * 배열 Array
 */
{
  const emptyArray = [];
  console.log(emptyArray);
  let numbers = [1, 2, 3];
  console.Log(numbers);
  const names = ['철수', '94', '영희'];
  console.log(names);
  const anyItems = [1, 'two', { name: 'three' }, [4, 5]];
  console.log(anyItems);
}

{
  const emptyArray = new Array();
  console.log(emptyArray);

  const numbers = new Array(1, 2, 3);
  console.log(numbers);

  const fiveItems = new Array(5);
  console.log(fiveItems);
}

{
  const chars = ['a', 'b', 'c', 'd'];
  console.log(chars[0]);
  console.log(chars[1]);
  console.log(chars[2]);
  console.log(chars[3]);
}

{
  const chars = ['a', 'b', 'c', 'd', 'e'];
  console.log(chars.length);
  const firstIndex = 0;
  const lastIndex = chars.length - 1;
  console.log(chars[firstIndex]);
  console.log(chars[lastIndex]);
}

{
  const result = [1, 2] + [3, 4];
  console.log(result);
}

{
  const result = [1, 2].concat([3, 4]);
  console.log(result);
}