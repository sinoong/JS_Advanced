/**
 * 모든 프로그램은 오류가 발생할 수 있다.
 * 그것은 현실 세계에는 물리적인 제한이 반드시 있기 때문이고
 * 개발자나 프로그램 사용자의 실수로 인해
 * 프로그램에는 사이드이펙트가 항상 존재하기 때문이다.
 * (크롬브라우저 콘솔에서 실습해 주세요.)
 */
function program() {
    console.log('프로그램을 시작합니다.');
    do {
        const inputA = window.prompt('a값을 숫자로 입력하세요. (종료하시려면 exit을 입력하세요)');
        if (inputA === 'exit') {
            break;
        }
        const inputB = window.prompt('b값을 숫자로 입력하세요.');
        const inputLogic = window.prompt('변수명 a, b를 사용하여 계산 로직을 작성해 주세요.');
        const operation = new Function('a', 'b', `return ${inputLogic}`);
        const result = operation(parseInt(inputA), parseInt(inputB));
        const output = `프로그램 실행 결과는 ${result} 입니다.`;
        console.log(output);
    } while (true);
    console.log('프로그램을 종료합니다.');
}
program();

/**
 * 사용자가 실수로 inputLogic에서 a와 b로 변수명을 사용하지 않고 다른 변수명을 사용하면 ReferenceError 가 발생한다.
 * 이 오류를 처리(handling)하지 않는다면 프로그램은 더 이상 실행될 수 없다.
 * 그래서 종료가 된다.
 */
