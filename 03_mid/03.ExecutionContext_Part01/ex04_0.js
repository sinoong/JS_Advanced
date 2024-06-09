const FunctionExecutionContext = {
    LexicalEnvironment: {
        local_variables: {
            // ...
        },
        nested_functions: {
            // ...
        },
        arguments: {
            // ...
        },
        [[Scopes]]: {
            // 상위 스코프
            // 함수를 호출한 Lexical 환경
            // [[Scopes]] === [[Parent Lexical Envitonment]]
        }
    },
    ThisBinding: getThisBinding()
}

function getThisBinding() {
    switch (함수종류) {
        case '일반함수':
            return strictMode ? undefined : globalThis;
        case '메서드':
            return '메서드를 호출한 객체';
        case '생성자함수':
            return '새로 생성된 객체';
        case 'apply/bind/call':
            return '개발자가 명시적으로 this 설정';
        case '화살표함수':
            return '상위 Lexical Context에서 this 상속';
    }
}