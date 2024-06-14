/**
 * null 병합 연산자
 * ??
 * ES2020
 * 변수의 값이 null 이나 undefined이면 Default값을 제공
 * 기본값을 제공하기 위해서 사용합니다.
 * 오래되었기에 지원 안하는 브라우저가 있을 수 있으니 확인 후 사용해야함
 */
{
  const x = null;
  const y = undefined;
  const z = 0;

  // null 병합 연산자
  console.log(x ?? "Default"); // Default
  console.log(y ?? "Default"); // Default
  console.log(z ?? "Default"); // 0 (여기서는 의미있는 값일 수 있으니 값을 반환)

  // 논리 OR ||
  console.log(x || "Default"); // Default
  console.log(y || "Default"); // Default
  console.log(z || "Default"); // Default (전부 false로 판단)
}

{
  function greet(name) {
    const greeting = name ?? "Guest"; // name이 없으면 default값 
    console.log(`Hello, ${greeting}!`);
  }
  greet(); // Guest
  greet("CodingMax"); // CodingMax
}

{
  const user = {
    name: null,
    age: undefined,
    country: "Korea",
  };

  const userName = user.username ?? 'Unknown';
  const userAge = user.age ?? 'Unknown';
  const userAddress = user.address ?? 'Unknown'; // 필드 자체가 없어도
  const userCountry = user.country ?? 'Unknown';

  console.log({
    userName, 
    userAge, 
    userAddress, 
    userCountry
  });

  // {
  //   userName: 'Unknown',
  //   userAge: 'Unknown',
  //   userAddress: 'Unknown',
  //   userCountry: 'Korea'
  // }
}