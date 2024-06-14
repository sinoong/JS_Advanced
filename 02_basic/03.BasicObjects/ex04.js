/**
 * 배열 원소 연산(unshift, shift) === queue
 */
{
  // 배열의 앞에서 원소 추가하고 삭제하기
  // unshift(value) 앞에 값 추가
  // shift() 앞에 값 삭제 및 값 반환
  const numbers = [1, 2, 3, 4];
  numbers.unshift(0);
  console.log(numbers);
  numbers.unshift(-1);
  console.log(numbers);
  console.log(numbers.shift());
  console.log(numbers);
  console.log(numbers.shift());
  console.log([].shift());
}
