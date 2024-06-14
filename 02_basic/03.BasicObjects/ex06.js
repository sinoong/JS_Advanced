/**
 * 배열 원소 연산
 * slice
 */
// slice 배열 자르기
// 이상 미만 => 새로운 배열을 반환 (원본 배열 유지)
{
  const numbers = [1, 2, 3, 4];
  const subNumbers = numbers.slice(1, 3);
  console.log(subNumbers); // [2, 3]
  console.log(numbers); // [1, 2, 3, 4]
  const sub2 = numbers.slice(1);
  console.log(sub2);
  const sub3 = numbers.slice();
  console.log(sub3);
}

{
  // slice는 얕은 복사 (값복사, 참조복사)
  const items = [
    1,
    {
      name: "CodingMax",
    },
  ];
  const newItems = items.slice();
  console.log(items);
  console.log(newItems);
  newItems[0] = 10; // 값 복사
  newItems[1].name = "코딩맥스"; // 참조 복사
  console.log(items); // [ 1, { name: '코딩맥스' } ]
  console.log(newItems); // [ 10, { name: '코딩맥스' } ]

  // 결론 : 얕은 복사에서 값 복사는 변경되지 않고 객체같은 참조 복사는 변경이 같이 됨
  // 값 복사 (Primitive Type Copy): 숫자나 문자열 같은 원시 타입의 데이터는 새로운 복사본을 만듭니다. 원래의 값을 변경하더라도 복사된 값에는 영향을 미치지 않습니다.
  /* 
  const items = [1, { name: 'CodingMax' }];
  const newItems = items.slice();
  newItems[0] = 10; // newItems의 첫 번째 요소는 10으로 변경됨
  console.log(items[0]); // 1 (원래 배열의 첫 번째 요소는 그대로)
  console.log(newItems[0]); // 10 (새로운 배열의 첫 번째 요소는 변경됨)
  */

  // 참조 복사 (Reference Type Copy): 객체나 배열 같은 참조 타입의 데이터는 복사본이 원래 데이터와 같은 참조를 가집니다. 
  // 즉, 복사된 객체나 배열의 속성을 변경하면 원래의 데이터에도 영향을 미칩니다.
  /* 
  newItems[1].name = '코딩맥스'; // newItems의 두 번째 요소의 name 속성을 변경
  console.log(items[1].name); // '코딩맥스' (원래 배열의 객체의 name 속성도 변경됨)
  console.log(newItems[1].name); // '코딩맥스' (새로운 배열의 객체의 name 속성도 변경됨)
  */
}
