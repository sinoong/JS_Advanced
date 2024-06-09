/**
 * 배열 원소 연산(unshift, shift)
 */
{
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