/**
 * 즉시 실행 함수(Immediately Invoked Function Expression)
 * 
 * 1. 파라미터로 인자값을 받을 수 있음
 * 2. 값을 반환할 수 있음.
 * 3. 전역 스코프 오염 방지
 * 
 * 모듈이란?
 * - 특정 기능과 데이터를 독립적인 스코프에 모아 놓은 것입니다.
 * - 모듈과 모듈이 모여 큰 문제를 해결합니다.
 * - 또한 모듈은 여러 작은 모듈의 합으로도 구성할 수 있습니다.
 * - 예) 우리 일상 생활에도
 * - 계산기 => 계산기 모듈
 * - 핸드폰 => 핸드폰 모듈
 * - 컴퓨터 => 컴퓨터 모듈 => 여러 작은 모듈의 합으로 나타낼 수 있다.(CPU, RAM, ROM, HDD ...)
 *
 * 
 * 이걸 모아서 ES5 시절의 모듈화 방법으로 많이 사용함
 * 1. 전역 스코프 오염 방지
 * 2. private 변수 만들 수 있음
 * 3. 스코프를 독립적으로 만들 수 있음
 * 4. 모듈 패턴을 구현할 수 있음
 * 
 * 
 * ES6 에서는?
 * 1. let과 const가 있어서 전역 스코프 오염을 걱정하지 않아도 된다.
 * 2. ES6는 모듈 기능을 제공하기 때문에 IIFE를 모듈을 만들기 위한 방법으로 사용하지 않아도 됨
 */
var counter = (function (initialValue = 0) {
    // private
    var count = initialValue;
    
    function increment () {
        count++;
        console.log(count);
    }
    
    function decrement () {
        count--;
        console.log(count);
    }

    function getValue () {
        return value;
    }

    return {
        getValue, // 오직 읽기만 가능하다!
        increment,
        decrement
    }
})();

counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());

/**
 * 
 <script
  src="https://code.jquery.com/jquery-3.7.0.min.js"
  integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
  crossorigin="anonymous"></script>
 */
// jQuery
const $ = (function () {
    // ... jquery module
    return {
        //...
    }
})();
