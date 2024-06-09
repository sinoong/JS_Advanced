/**
 * ECMAScript Module(ESM)
 * - 모듈이란?
 */

/**
 * index.html 에 
 * <script src="/src/greet.js"></script> 를 입력하고 코드를 실행해 보자.
 * Hello 가 콘솔에 출력된다.
 */
greet();

/**
 * 이번에는 index.html 에 
 * <script src="/src/greet.js" type="module"></script> 를 입력하고 코드를 실행해 보자.
 * Hello 가 콘솔에 출력되지 않고 greet() 함수가 정의되지 않았다고 하는 오류가 발생한다.
 */
greet();

/**
 * 따라서 모듈은 독자적인 스코프를 갖는다. 이를 모듈 스코프라고 한다.
 * 현재 index.js 는 아래와 같이 포함하고 있다.
 * <script src="/src/index.js" type="module"></script>
 * 즉, index.js는 독자적인 모듈 스코프를 가지고 있다.
 *
 * 하지만 <script src="/src/greet.js"></script> 은 독작적인 스코프를 갖지 않기 때문에 
 * index.js의 모듈 스코프에 greet() 함수가 포함된다. 따라서 index.js에서 greet() 함수를
 * 사용할 수 있게 된다.
 * 
 * 그러나 <script src="/src/greet.js" type="module"></script> 로 greet.js를 사용하게
 * 되면 greet.js가 독자적인 모듈 스코프를 갖기 때문에 greet 함수는 greet.js의 모듈 스코프에 존재하게
 * 된다. 
 * 
 * 그렇게 되면 index.js의 모듈 스코프에서 greet.js 모듈 스코프에 있는 greet() 함수를 스코프 체이닝으로
 * 찾을 수 없기 때문에 greet() 함수가 정의되지 않았다는 오류가 발생하는 것이다.
 */