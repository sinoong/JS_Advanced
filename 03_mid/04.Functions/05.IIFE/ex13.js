/**
 * 즉시 실행 함수
 * - var 변수 사용할 때 전역 스코프가 오염되는 걸 막기 위해서 많이 사용했어요
 * - 지금은 let과 const 가 있어서 전역 스코프가 오염될 일은 없어서 var대신 let과 const를 많이 사용합니다.
 * let, const 가 도입되기 전에 var 변수로 인해 
 * 전역 스코프가 오염되는 걸 방지하기 위해서 사용했습니다.
 * => 즉시 실행 함수로 함수 스코프를 생성하므로 
 * => var 변수를 즉시 실행 함수 스코프에 가둘 수 있다.
 * 
 */
(function () {
    var message = 'Hello, World!';
    console.log(message);
})();

console.log(window.message); // undefined