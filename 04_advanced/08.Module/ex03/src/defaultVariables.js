/**
 * export default는 모듈에서 단 하나만 존재할 수 있다.
 * export default 롤 변수, 객체, 함수, 클래스 등을 export 해 보자.
 */

/**
 * 아래와 같이 export default 에는 var, let, const 를 사용할 수 없다.
 */
// export default const a = 10;
// 이렇게 해야 한다.
const a = 10;
export default a;




