/**
 * 배열 메서드와 선언형 프로그래밍(리스트 연산)
 * of
 * from
 */

/**
 * 배열을 배열 리터럴([])이나 배열 클래스의 생성자를 사용해서(new Array())
 * 생성할 수 있다.
 * 배열을 생성하는 방법에는 이 두 가지 방법 외에도 배열의 정적 메서드
 * of와 from 을 사용해서 생성할 수 있다.
 */

/**
 * Array.of() 는 여러 인자 목록에서 배열을 생성하는 정적 메서드다,
 */
{
  console.log(Array.of(1, 2, 3, 4));

  const address = Array.of(
    '대한민국',
    '경기도',
    '성남시',
    '분당구',
    '대왕판교로',
    '660'
  );
  // 모든 아이템을 연결한 문자열이 필요할 때, join으로 묶어서 사용할 수 있다.
  console.log(address.join(' '));

  // 객체의 목록도 쉽게 만들 수 있다.
  const family = Array.of(
    { name: 'CodingMax', age: 10 },
    { name: 'Jun', age: 1 }
  );
  console.log(family);
}


/**
 * Array.from(iterable or arrayLike, mapFunction, thisArg)
 *  - iterable: 배열로 변환하려는 데이터 소스
 *  - (Optional)mapFunction: 각 요소에 대해 호추할 매핑 함수
 *  - (Optional)thisArg: 매핑 함수 내에서 사용할 this 값
 * 
 * Array.from 메서드는 다른 데이터 소스에서 배열을 생성할 수 있기 때문에
 * 매우 중요하고 자주 사용된다.
 */

/**
 * 문자열에서 배열을 생성한다
 */
{
  const chars = Array.from('Hello, CodingMax');
  console.log(chars);
}

/**
 * 집합에서 배열을 생성한다.
 */
{
  const numberSet = new Set([1, 2, 3, 4, 5]);
  const numbers = Array.from(numberSet);
  console.log(numbers);
}

/**
 * Set을 사용해서 배열에서 중복값 제거하기
 */
{
  // 집합을 나타내는 Set은 중복값을 허용하지 않는다.
  // 이를 사용해서 배열에서 중복값을 제거할 수 있다.
  let numbers = Array.of(1, 1, 2, 2, 3, 3);
  numbers = Array.from(new Set(numbers));
  console.log(numbers);

  // 다만 이 방법은 배열 아이템이 많을 때, 많은 메모리를 소모하기 때문에 
  // 권장하는 방법은 아니다.
}

/**
 * arrayLike는 length 속성이 있는 객체를 의미한다.
 * 그래서 Array.from 을 아래와 같이 사용할 수 있다.
 */
{
  // 5개의 undefined가 있는 배열을 생성한다.
  const fiveItems = Array.from({ length: 5 });
  console.log(fiveItems);
}

/**
 * mapFunction 사용하기
 * mapFunction을 사용하면 from 을 생성하는 각 원소에 mapFunction을 적용해서
 * 초기값을 만들 수 있다.
 */

{
  // 모두 0으로 초기화한다.
  // const fiveItems = Array.from({ length: 5}, (value, index) => 0);
  // 매핑 함수내에서 value와 index를 사용하지 않으면 파라미터 이름을 적지 않아도 된다.
  const fiveItems = Array.from({ length: 5 }, () => 0);
  console.log(fiveItems);
}

{
  // index를 사용하면 1, 2, 3, 4, 5로 초기화 할 수 있다.
  const fiveItems = Array.from({ length: 5 }, (_, index) => index + 1);
  console.log(fiveItems);
}

/**
 * thisArg 사용하기
 * thisArg를 사용하여 mapFunction 함수 내에서 사용할 this 값을 지정할 수 있다.
 */
{
  const context = {
    multiplier: 2
  }

  // this 포인터를 바인딩해야 하므로 mapFunction은 일반 함수가 되어야 한다.
  const numbers = Array.from([1, 2, 3, 4, 5], function (value) {
    return value * this.multiplier;
  }, context);

  console.log(numbers);

  // 만약 아래와 같이 화살표 함수를 사용하면 오류가 발생한다.
  // const numbers = Array.from([1, 2, 3, 4, 5], (value) => {
  //   return value * this.multiplier;
  // }, context);
}

/**
 * from 을 사용하여 range 함수 만들기
 */
{
  function range(start, stop, step = 1) {
    const rangeLength = (stop - start) / step + 1;
    return Array.from({ length: rangeLength }, (_, index) => start + index * step);
  }

  // 0...4
  console.log(range(0, 4));

  // 1...10
  console.log(range(1, 10));

  // 알파벳 출력하기
  const alphabet = Array.from(
    range('a'.charCodeAt(0), 'z'.charCodeAt(0)),
    (code) => String.fromCharCode(code)
  );
  console.log(alphabet);
}

{
  // 잠시 뒤에 배울 map 함수를 사용하면
  const alphabet = range('a'.charCodeAt(0), 'z'.charCodeAt(0))
    // .map((code) => String.fromCharCode(code))
    .map(String.fromCharCode);
  console.log(alphabet);
}

/**
 * 참고로 배열은 Array.isArray 정적 메서드로 
 * 배열인지 아닌지 판단할 수 있다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5);
  // tyoeof 는 object가 나오기 때문이다.
  console.log(typeof numbers);
  console.log(Array.isArray(numbers));

  // ArrayLike 객체는 false가 된다.
  console.log(Array.isArray({ length: 5 }));
}