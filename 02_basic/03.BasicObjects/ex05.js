/**
 * 배열 원소 연산
 * splice
 */
// 임의 인덱스에서 원소를 추가하고 삭제하기
// delete도 되는데 위험함 => delete numbers[2] => [1, 2, 3, 4] => [1, 2, undefined, 4] 이렇게 됨

// splice
// splice(시작인덱스, 지우고자하는개수(값 반환), 인덱스부터 items추가)
// 원본 배열 수정됨

// 원소 교체
const numbers = [1, 2, 3, 4];
const item = numbers.splice(1, 1, "a");
console.log({ item });
console.log({ numbers });

// 원소 삭제
const numbers2 = [1, 2, 3, 4];
const item2 = numbers2.splice(1, 2, "two", "three", "four");
console.log({ item2 }); // 2, 3
console.log({ numbers2 }); // 1, two, three, four, 4

// 원소 추가
const numbers3 = [1, 2, 3, 4];
const item3 = numbers2.splice(1, 0, "a", "b"); // 인덱스 자리부터 밀려나
console.log({ item3 }); //
console.log({ numbers3 }); // 1, "a", "b", 2, 3, 4

// 원소 복사
const numbers4 = [1, 2, 3, 4]
console.log(numbers4.splice(1)) // 2, 3, 4