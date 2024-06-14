/**
 * 배열 Spread 연산자
 */
{
  // 배열이나 객체 변수 앞에 ... 붙이면 분리해줌
  console.log(...[1, 2, 3]) // 1 2 3 
}
{
  // 배열 복사
  const arr = [1, 2, 3];
  const copyArr = [...arr];
  console.log(copyArr);
}

{
  // 여러개의 배열을 하나로 합칠 때
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];

  const numbers = [...arr1, ...arr2, ...arr3];
  console.log(numbers);

  const chars = ['a', 'b', 'c'];
  console.log([...arr1, ...chars]);
}

{
  const chars = [...'Helloworld']; // 문자를 배열안에 하나씩 쪼개 
  console.log(chars);
}

{
  // 구멍이 있는 배열도 복사
  const items = [1, undefined, 3];
  const copy = [...items];
  console.log(copy);
}

{
  // 배열의 일부분을 복사
  const arr = [1, 2, 3, 4, 5];
  const copy = [...arr.slice(2)]; // 2번부터 전개
  console.log(copy);
}

{
  // 함수에 인자를 전달 할 때도 사용할 수 있다.
  function sum(a, b) {
    return a + b;
  }
  const numbers = [1, 2, 3, 4, 5];
  const result = sum(...numbers); // 인자는 2개만 받게 해 놨으니까 전개 해도 1, 2만 들어감
  console.log(result);
  console.log(Math.max(...numbers)); // 최대값
}

{
  // 스프레드 연산자는 얕은 복사를 한다
  const items = [[1], [2]];
  const clone = [...items];
  console.log(clone);
  clone[0][0] = 'Hello';
  console.log(clone); 
  console.log(items); // 참조 복사니까 같이 바뀜
}