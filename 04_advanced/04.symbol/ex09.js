/**
 * Symbol.toPrimitive
 * - 자바스크립트는 연산을 수행할 때, 
 * - 객체를 Primitive 값으로 변경할 때,
 * - 어떻게 Primitive 값으로 변경할지를 커스텀하게 정의 할 수 있다.
 */
{
  // 자바스크립트는 연산을 수행할 때, 필요에 따라 자동으로 타입을 변환한다.
  // 그래서 아래 연산을 실행하면 number 타입인 1이 string 타입으로 변환되어
  // 문자열 '91' 이 출력된다.
  const sum = '9' + 1;
  console.log(sum); // 91
  console.log(typeof sum);

  // 객체도 어떤 연산에 참여할 때, 자바스크립트가 필요에 따라 자동으로 프리미티브 타입으로 변환한다.
  // 아래의 경우, three 객체를 문자열로 변경한 것이다.
  // 즉, 이렇게 객체를 Primitive 타입으로 변경이 필요할 때, 
  // Symbol.toPrimitive 메서드를 정의해 놓으면 해당 메서드를 통해서 
  // 객체를 Primitive 타입 값으로 변경한다.
  const three = {};
  const sum2 = three + 1;
  console.log(sum2); //[object Object]1
}

/**
 * Symbol.toPrimitive 메서드를 정의해 보자.
 * Symbol.toPrimitive 메서드에는 변경하려고 하는 Primitive 타입의 이름이
 * 인자값으로 문자열 형태로 전달된다.
 * 자바스크립트의 Primitive 타입은 크게 숫자와 문자열로 나뉠 수 있다.
 * Boolean 도 있지만 Boolean 도 0과 1 숫자로 구분할 수 있다.
 * 그래서 hint 에는 number와 string 그리고 default 가 전달된다.
 */
{
  // default 때는 true를 반환하는 것이 좋다.
  // 왜냐하면 객체는 Boolean으로 변경될 때 항상 true로 평가되기 때문이다.
  console.log(Boolean({}));
  console.log(!!{});
}

{
  const three = {
      [Symbol.toPrimitive](hint) {
        // hint가 number 다.
        if (hint === 'number') {
          return 3;
        }
    
        // 문자열은 hint가 string이다.
        if (hint === 'string') {
          return '삼(3)';
        }
    
        // default일 때는 참 값으로 반환한다.
        // 왜냐하면 객체는 항상 true 로 평가되기 때문이다.
        return true;
      }
  };
      
  console.log(Number(three));
  console.log(`${three} 입니다.`);
  console.log(+three);
  
  // Boolean 변경시에는 Symbol.toPrimitive가 호출되지 않고 
  // 객체가 true로 평가된다.
  console.log(!three);
  console.log(!!three);

  // 그냥 연산에 참여하면 hint가 default가 된다.
  console.log(1 + 2 + three + 4);

  // 그래서 숫자로 변경해서 연산을 해야 한다.
  console.log(1 + 2 + +three + 4);
}