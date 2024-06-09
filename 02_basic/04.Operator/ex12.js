/**
 * null 병합 연산자
 */
{
  const x = null;
  const y = undefined;
  const z = 0;

  console.log(x ?? "Default");
  console.log(y ?? "Default");
  console.log(z ?? "Default");

  console.log(x || "Default");
  console.log(y || "Default");
  console.log(z || "Default");
}

{
  function greet(name) {
    const greeting = name ?? "Guest";
    console.log(`Hello, ${greeting}!`);
  }
  greet();
  greet("CodingMax");
}

{
  const user = {
    name: null,
    age: undefined,
    country: "Korea",
  };

  const userName = user.name ?? user.username ?? 'Unknown';
  const userAge = user.age ?? 'Unknown';
  const userAddress = user.address ?? 'Unknown';
  const userCountry = user.country ?? 'Unknown';

  console.log({
    userName, 
    userAge, 
    userAddress, 
    userCountry
  });
}