// 배열 구조 분해
const [one, two, three, four] = [1, 2, 3, 4];
console.log({ one, two, three, four });

const [head, ...rest] = [1, 2, 3, 4]; // spread는 항상 마지막에 작성
console.log({ head, rest }); // [1], [2, 3, 4]

const matrix = [
  [1, 2],
  [3, 4],
];
const [[a, b], [c, d]] = matrix;
console.log({ a, b, c, d });
const [[aa]] = matrix;
console.log({ aa });

const users = [
  { name: "Jim", age: 10 },
  { name: "CodingMax", age: 2 },
];
const [{ name }, { age }] = users;
console.log({ name }); // 첫번째 객체
console.log({ age }); // 두번째 객체
