/**
 * 배열 원소 연산
 * splice
 */
const numbers = [1, 2, 3, 4];
const item = numbers.splice(1, 0, 'a');
console.log({ item });
console.log({ numbers });