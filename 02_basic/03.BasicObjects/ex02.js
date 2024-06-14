/**
 * 배열 Array
 */
{
  // 1. 배열 리터럴 []
  const emptyArray = [];
  console.log(emptyArray);
  let numbers = [1, 2, 3];
  console.log(numbers);
  const names = ['철수', '94', '영희'];
  console.log(names);
  const anyItems = [1, 'two', { name: 'three' }, [4, 5]];
  console.log(anyItems);
}

{
  // 2. Array Constructor
  const emptyArray = new Array();
  console.log(emptyArray); // []

  const numbers = new Array(1, 2, 3);
  console.log(numbers); // [1, 2, 3]

  const fiveItems = new Array(5);
  console.log(fiveItems); // [un, un, un, un ,un] 길이가 5
}

{
  // 배열 인덱스 
  const chars = ['a', 'b', 'c', 'd'];
  console.log(chars[0]);
  console.log(chars[1]);
  console.log(chars[2]);
  console.log(chars[3]);
  chars[0] = chars[0].toUpperCase(); // 대문자로 변경 => 배열에서는 하나씩 변경 가능, 문자열에선 불가능
  const abcd = 'abcd'
  abcd[0] = abcd[0].toUpperCase() // 불가능
}

{
  // 배열 길이
  const chars = ['a', 'b', 'c', 'd', 'e'];
  console.log(chars.length);
  const firstIndex = 0;
  const lastIndex = chars.length - 1;
  console.log(chars[firstIndex]);
  console.log(chars[lastIndex]);
}

{
  // 배열 연결 => + 사용하면 문자열이 됨 
  const result = [1, 2] + [3, 4];
  console.log(result); // 1,23,4
}

{
  // 배열 연결 => .concat()
  const result = [1, 2].concat([3, 4]);
  console.log(result); // [1, 2, 3, 4]
}