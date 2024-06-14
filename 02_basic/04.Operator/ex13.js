/**
 * Optional Chaining 연산자
 * 값이 있거나 없을 수 있을 때를 표현할 때 사용하는 용어
 * - ES2020
 * 변수값이나 객체 속성 등이 null이나 undefinded 일 때,
 * 안전하게 접근해서 사용하는 것을 도와주는 연산자
 * ?.
 * 브라우저의 호환성과 지원범위 확인해야함
 */
{
  const user = {
    name: "CodingMax",
    info: {
      age: undefined,
      country: "Korea",
    },
  };

  console.log(user.name);
  console.log(user.info?.age);
  console.log(user.info?.country);
  console.log(user.address?.city); // 없으니까 undefined
  // console.log(user.address.city); // 이렇게 적으면 에러

  // 함수에 옵셔널체이닝
  const address = user.getAddress?.();
  console.log(address); // undefined

  // null 병합 연산자와 함께 사용
  const city = user.address?.city ?? "Seoul"; // 없으면 "Seoul로 만들어"
  console.log({ city });

  // 만약에 없었다면 이렇게 써야함
  if (user.address && user.address.city) {
    console.log(user.address.city);
  } else {
    console.log("Seoul");
  }
}
