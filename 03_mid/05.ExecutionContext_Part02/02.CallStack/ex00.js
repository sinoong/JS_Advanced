/**
 * 아래는 ExecutionContext 를 자바스크립트 객체의 형태로 표현한 것으로
 * 실행되는 코드가 아닙니다.
 */

const GlobalExecutionContext = {
    LexicalEnvironment: {
        local_variables: {
            printA: [function object],
            printAB: [function object],
            printABC: [function object],
        },
        [[Scopes]]: null
    },
    ThisBinding: globalThis
}

const printABCExecutionContext = {
    LexicalEnvironment: {
        local_variables: {
            arguments,
            caller: null,
            name: 'printABC'
        },
        [[Scopes]]: [
            { local: this(=> globalThis) },
            { script: b, c },
            { globalThis: window }
        ]
    },
    ThisBinding: globalThis
}

