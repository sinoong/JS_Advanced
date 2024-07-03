/**
 * 부분문자열 검색
 * - indexOf(searchString: string, position?: number | undefined): number
 * - lastIndexOf(searchString: string, position?: number | undefined): number
 * - indexOf와 lastIndexOf 메서드를 사용해 검색할 수 있다.
 * - 찾는 문자나 문자열이 있으면 해당 값의 시작 인덱스를 반환하고
 * - 없으면 -1 을 반환한다.
 */

{
  const msg = 'Hello World';
  //-> 제일 처음 일치하는 부분문자열의 시작 인덱스를 반환한다.
  console.log(msg.indexOf('World'));
  console.log(msg.indexOf('World', 7)); // 시작점을 7로 해서 World 찾으니까 없으니 -1
  console.log(msg.indexOf('o'));

  //-> 제일 마지막에 일치하는 부분문자열의 시작 인덱스를 반환한다.
  console.log(msg.lastIndexOf('o'));

  // -1
  console.log(msg.indexOf('x'));
  console.log(msg.lastIndexOf('x'));
}

/**
 * startsWith 메서드를 사용하면 문자열의 시작이 특정 문자열로 시작되는지 판단할 수 있다.
 * startsWith(searchString: string, position?: number | undefined): boolean
 */
{
  const msg = 'Hello World';
  console.log(msg.startsWith('He')); // true

  // 뒤에 position에 인덱스값을 주면 검사를 시작할 위치를 설정할 수 있다.
  console.log(msg.startsWith('Wo', 6)); // true
}

/**
 * endsWith 메서드를 사용하면 문자열의 끝이 특정 문자열로 끝나는지 판단할 수 있다.
 * endsWith(searchString: string, endPosition?: number | undefined): boolean
 */
{
  const msg = 'Hello World';
  console.log(msg.endsWith('ld'));

  // 뒤에 endPosition에 (인덱스값 + 1)을 주면 검사가 끝나는 위치를 설정할 수 있다.
  console.log(msg.endsWith('lo', 5));
}

/**
 * includes 메서드는 원본 문자열에 특정 문자열이 포함되어 있는지 판단할 수 있다.
 * includes(searchString: string, position?: number | undefined): boolean
 */
{
  const msg = 'Hello World';
  console.log(msg.includes('ll'));

  // 검색을 시작할 시작 인덱스를 두번째 인자로 전달할 수 있다.
  console.log(msg.includes('rl', 5));
  console.log(msg.includes('rl', 9));
}