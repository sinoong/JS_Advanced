/**
 * Tagged 템플릿 함수
 * raw 속성
 */
// \n이 적용되어 두 줄이 된다.
function myRaw(strings, ...values) {
    console.log(strings);
}
myRaw`This is a \n newline character.`;


// raw 속성을 사용하면 이스케이프 문자를 그대로 출력할 수 있다.
function myRaw(strings, ...values) {
    console.log(strings.raw);
}
myRaw`This is a \n newline character.`;
  