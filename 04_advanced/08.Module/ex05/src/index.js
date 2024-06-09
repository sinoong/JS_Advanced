/**
 * ECMAScript Module(ESM)
 * - dynamic import
 */

/**
 * ESM은 런타임에 모듈을 import 할 수 있다.
 * 즉, 특정 조건에 따라 임포트하는 모듈을 달리할 수 있다.
 * 다만 import 함수는 Promise를 반환하기 때문에 then 또는 async 함수 블럭에서 await 키워드를 사용해야 한다.
 */
{
  const lang = 'ko';
  if (lang === 'ko') {
    import ('./greet_ko')
      .then(({ greet }) => {
        greet();
      });
  } else {
    import ('./greet')
      .then(({ greet }) => {
        greet();
      });
  }
}

(async () => {
  const lang = 'ko';
  if (lang === 'ko') {
    const { greet } = await import ('./greet_ko');
    greet();
  } else {
    const { greet } = await import ('./greet');
    greet();
  }
})();