/**
 * 함수 소개
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
    return content.split(' ');
  }
}

{
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

  const content = requestContent();
  console.log(toLowerContent(content));
  console.log(toUpperContent(content));
  console.log(toWords(content));
}