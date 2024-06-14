/**
 * number
 */
{
  let a = 10;
  let b = 5;
  let c = 3.141592;

  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a ** b); // a의 b제곱
  console.log(Math.floor(a / b)); // 몫만 구하기 1
  console.log(parseInt(a / b)); // 몫만 구하기 2
  console.log(10 % 2); // 나머지
}

{
  for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
      console.log(i, "3의 배수이면 어떤 일을 한다");
    }
  }
}

{
  let items = ["a", "b", "c"];
  function getItem(index) {
    return items[index % items.length];
  }
  console.log(getItem(0));
  console.log(getItem(100));
  console.log(100 % 3);
}

{
  console.log(Number.MIN_VALUE); // 최소값
  console.log(Number.MAX_VALUE); // 최대값
  console.log(Number.NaN); // Not a Number
  console.log(10 / "a"); // NaN
  console.log(parseInt("1")); // 1
  console.log(parseInt("a")); // NaN
  console.log(Infinity); // 양의 무한대
  console.log(-Infinity); // 음의 무한대
  console.log(1 / 0); // 양의 무한대
  console.log(-1 / 0); // 음의 무한대
}

let arr = [1, 2, 3, 4, 5]
console.log(Math.max(...arr)) // 배열일 경우 ... 전개 해줘야함
console.log(Math.max(1, 2, 3, 4, 5)) // 이럴땐 그냥 쓰면 됨 