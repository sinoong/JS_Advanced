/**
 * 화살표 함수
 * - ES6 새로운 문법
 * - 함수를 아주 간단한 표현으로 선언하고 정의할 수 있게 해 준다.
 */
(paramters) => {
    // 함수 몸체
};

(paramters) => {
    // 함수 몸체
    return value;
};


// 파라미터가 한 개라면
const greet = name => {
    console.log(name);
};
greet();


// 파라미터가 한 개도 없다면
cosnt greet = () => {
    console.log('Hello World')
}
greet();

// 함수 몸체가 단 한개의 표현식이라면
// 중괄호와 return 을 생략할 수 있습니다.
const sum = () => 1 + 2;

// 위 코드는 아래와 같아요
const sum = () => {
    return 1 + 2;
}

// 즉시 실행 함수에도 사용할 수 있습니다.
((name) => {
    console.log(`Hello ${name}!`)
})('CodingMax');

// 파라미터가 한 개고 표현식도 하나라면
// 예제1
const identity = value => value;
// 예제2
const print = value => console.log(value);