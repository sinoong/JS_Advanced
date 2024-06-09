/**
 * Tagged 템플릿 함수
 * - 템플릿 리터럴(``)을 인자로 받을 수 있는 함수.
 */
{
  function tagFunc(strings, ...values) {
    console.log('strings', strings);
    console.log('values', values);
  }

  const name = "CodingMax";
  tagFunc`Hello, ${name}!`;

  // { strings: ['Hello, ', '!'] }
  // { values: ['CodingMax'] }
}

{
  function tagFunc(strings, ...values) {
    console.log({ strings });
    console.log({ values });
  }

  const name = "CodingMax";
  const age = 20;
  tagFunc`Hello, ${name}! I'm ${age} years old`;
}

// 템플릿 리터럴을 기준으로 문자열을 나눈다. => strings 배열로 생성
// { strings: ['Hello, ', '! I'm ', ' years old'] }

// 템플릿 리터럴 표현식값을 values 배열에 담는다.
// { values: ['CodingMax', 20] }