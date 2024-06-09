// strict 모드가 아니면 외부에서 eval 실행 컨텍스트에 접근할 수 있다.
// console.log(y) 가 가능한 이유는 eval 함수가 상위 스코프인
// exampleEval() 함수의 로컬 스코프에 y 변수를 생성하기 때문이다.
function exampleEval() {
    var x = 10;
    // eval 내에서 변수 y 선언
    eval('var y = 20;'); 

    // 10 출력, x는 함수 스코프 내에서 선언되었으므로 접근 가능
    console.log(x); 

    // 20 출력, y는 eval 내에서 선언되었으나 비엄격 모드에서는 함수 스코프에서 접근 가능
    console.log(y); 
}

exampleEval();
  