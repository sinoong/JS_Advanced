/**
const ExecutionContext = {
    Lexical_Environment: {
        Object_Environment_Record: {
            [[local]]: [
                // 변수, 함수
                // 만약 함수에 내부 함수가 있다면 내부 함수도
            ]
        },
        Outer_Lexical_Environment_Reference: {
            // local을 벗어난 변수와 함수를 찾기 위한 상위 스코프
            // 찾는 순서는 위에서 아래로
            [[Scopes]]: [
                Closure,
                Script,
                Global
            ]
        }
    },
    ThisBinding: 컨텍스트의 종류와 strict mode에 따라 달라진다.
}
*/

// Lex