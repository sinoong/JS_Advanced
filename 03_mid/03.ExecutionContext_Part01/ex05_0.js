/**
const EvalExecutionContext = {
    LexicalEnvironment: {
        //...
        [[Scopes]]: stricMode ? 'eval 자체만 접근 가능한 격리 스코프' 
                              : 'eval 내외부 컨텍스트에 접근할 수 있는 스코프'
    },
    ThisBinding: '호출한 컨텍스트의 this값을 상속'
}
*/

eval('console.log("Hello World")');