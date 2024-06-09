/**
 * 함수 인자값의 값전달, 참조전달
 */
{
  function increment(n) {
    n += 1;
  }

  let myNumber = 1;
  increment(myNumber);
  console.log(myNumber);
}

{
  function addElement(arr) {
    arr.push(4);
  }
  const myArr = [1, 2, 3];
  addElement(myArr);
  console.log(myArr);
}