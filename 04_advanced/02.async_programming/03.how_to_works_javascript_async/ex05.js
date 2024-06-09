/**
 * 어떻게 실행될까?
 * setTimeout 이 실행되는 과정 이해하기
 */
console.log('start');
setTimeout(() => {
    console.log('Hello');
}, 0);
console.log('end');