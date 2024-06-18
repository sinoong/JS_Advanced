/**
 * 함수 인자값의 값전달, 참조전달
 * 값전달 (값복사)
 * 참조전달 (얕은복사)
 */
{
  function increment(n) {
    n += 1;
  }

  let myNumber = 1;
  increment(myNumber);
  console.log(myNumber); // 1 (2가 아님 , 값복사를 했기 때문)
}

{
  function addElement(arr) {
    arr.push(4);
  }
  const myArr = [1, 2, 3];
  addElement(myArr);
  console.log(myArr); // [1, 2, 3, 4] (참조전달이 되서 얕은복사)
}