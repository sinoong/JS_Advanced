/**
 * 문제를 해결하는 방법은 두가지가 있다.
 * - 전처리: 오류가 발생하지 않게 미리 Guard를 쳐서 오류 발생을 방지한다.
 * (크롬브라우저 콘솔에서 실습해 주세요.)
 */

/**
 * 사용자가 실수로 inputLogic에서 a와 b로 변수명을 사용하지 않고 다른 변수명을 사용하면 ReferenceError 가 발생한다.
 * 이 오류를 처리(handling)하지 않는다면 프로그램은 더 이상 실행될 수 없다.
 * 그래서 종료가 된다.
 * 이 내용을 미리 방지하여 프로그램 종료를 막을 수 있다.
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
        const isValidLogic = inputLogic.split(/[\s\+\-\*\/]/).filter((varName) => varName !== 'a' && varName !== 'b').join('').trim() === '';
        if (!isValidLogic) {
            window.alert('계산 로직에 변수명 a, b가 없습니다. 다시 입력해 주세요.');
            continue;
        }
        const operation = new Function('a', 'b', `return ${inputLogic}`);
        const result = operation(parseInt(inputA), parseInt(inputB));
        const output = `프로그램 실행 결과는 ${result} 입니다.`;
        console.log(output);
    } while (true);
    console.log('프로그램을 종료합니다.');
}


program();


