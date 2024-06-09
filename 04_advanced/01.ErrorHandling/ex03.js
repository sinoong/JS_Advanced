/**
 * 문제를 해결하는 방법은 두가지가 있다.
 * - 후처리: 오류가 발생하면 적절한 조치를 취하여 프로그램이 종료되지 않게 한다.
 * - 이렇게 후처리로 오류를 처리하는 것을 Error Handling 또는 Exception Handling 이라고 한다.
 * (크롬브라우저 콘솔에서 실습해 주세요.)
 */

function program() {
    console.log('프로그램을 시작합니다.');
    do {
        try {
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
        } catch (error) {
            window.alert(`${error.message} 오류 발생. 다시 입력해 주세요.`);
            continue;   
        }
    } while (true);
    console.log('프로그램을 종료합니다.');
}

program();

