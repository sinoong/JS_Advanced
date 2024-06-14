/**
 * 비교연산자
 * 값만 비교. 타입은 비교하지 않는다.
 * 타입의 변화를 알아서 한다 -> 문제가 발생한다
 */
{
  console.log(5 == '5'); // true
  console.log(true == 1); // true
  console.log(null == undefined); // true
}

{
  console.log(5 != '5'); // false
  console.log(true != 1); // false
  console.log(null != undefined); // false
}

{
  // === 값 타입 일치 연산자
  // 값도 비교. 타입도 비교 => 두개가 모두 같으면 같다
  console.log(5 === '5'); // false
  console.log(true === 1); // false
  console.log(null === undefined); // false
}

{
  console.log(5 !== '5'); // true
  console.log(true !== 1); // true
  console.log(null !== undefined); // true
}

{
  console.log(5 > 3);
  console.log('10' > 2); // true


  console.log(5 < 3);
  console.log('10' < 2);

  console.log(5 >= 5);
  console.log('10' >= 2);

  console.log(2 <= 4);
  console.log('2' <= 10);
}

{
  // NaN은 자기 자신을 포함한 모든 값과의 비교에서 false를 반환함
  console.log(NaN == NaN); // false
  console.log(NaN === NaN); // false
  console.log(NaN > 0); // false
  console.log(NaN < 0); // false
}

{
  // isNaN => NaN이냐?(숫자가 아니냐?)
  console.log(isNaN('a')); // true
  console.log(isNaN('10')); // false "10" => 10으로 변경
  console.log(isNaN(NaN)); // true
}

{
  // 알파벳 비교 (유니코드로 변경함)
  // 첫번째 문자를 비교 그다음 문자 비교 (길이는 중요하지 않음)
  console.log('a' < 'b');
  console.log('ab' < 'ac');
  console.log('abc' < 'aca');
  console.log('hello' > 'world');
}

{
  // 객체의 비교 (주소가 같을 때만 같다고 판단)
  let obj1 = { name: 'CodingMax', age: 10 };
  let obj2 = { name: 'CodingMax', age: 10 };
  console.log(obj1 == obj2); // false
  console.log(obj1 === obj2); // false

  let obj3 = obj1; // 주소가 같으면 (참조 복사니까)
  console.log(obj3 == obj1); // true
  console.log(obj3 === obj1); // true
}