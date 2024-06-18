/**
 * 함수 소개
 * 모듈화의 기본 단위
 * 입력을 주면 출력을 반환한다
 */
{
  function greet(name) {
    console.log(`Hello! ${name}`);
  }
  greet('CodingMax');
}

{
  function sum(a, b) {
    return a + b;
  }
  const result = sum(10, 20);
  console.log(result);
}

{
  function sum(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }

  const a = 10;
  const b = 20;
  const result = mul(sum(sub(div(b, a), a), b), mul(b, a));
  console.log({ r: result });
}

{
  // 코드 재사용성이 매우 낮음
  // API를 계속 불러옴
  function lowerContent() {
    const content = fetch('some api url');
    return content.toLowerCase();
  }
  function upperContent() {
    const content = fetch('some api url');
    return content.toUpperCase();
  }
  function words() {
    const content = fetch('some api url');
    return content.split(' '); // 공ㅐㄱ으로 나누기
  }
}

{
  // 재사용성 높이기
  function requestContentAPI() {
    return 'Hello! You are great!'
  }

  function toLowerContent(content) {
    return content.toLowerCase();
  }

  function toUpperContent(content) {
    return content.toUpperCase();
  }

  function toWords(content) {
    return content.split(' ');
  }

  const content = requestContent(); // 한번만 API를 호출 함 
  console.log(toLowerContent(content));
  console.log(toUpperContent(content));
  console.log(toWords(content));
}