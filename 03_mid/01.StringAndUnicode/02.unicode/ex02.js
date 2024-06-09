/**
 * 자바스크립트는 유니코드에 대해서도 기존의 문자열 메서드를 잘 적용해 준다.
 */
{
  const str = 'Hello 🌎';
  console.log(str.startsWith('🌎'));
  console.log(str.endsWith('🌎'));
  console.log(str.includes('🌎'));
}

{
  const str = '🌎 Hello 🌎 World 🌎';
  console.log(str.replace(/🌎/g, '🌟'));
  console.log(str.split('🌎'));
}

/**
 * 다만 index와 관련해서 주의해야 한다. 
 * 유니코드 포인트가 0x10000 이상인 문자는 서로게이트 페어로 표현되기 때문에 2개의 인덱스를 사용한다.
 */
{
  const str = 'Hello 🌎 World';
  console.log(str.indexOf('🌎'));
  console.log(str.lastIndexOf('🌎'));

  // 하나의 유니코드 유닛만 자른다.
  console.log(str.substring(6, 7));
  // 아래와 같이 2개의 인덱스 범위를 지정해야 한다.
  console.log(str.substring(6, 8));
}