// strict 모드이면 외부에서 eval 실행 컨텍스트에 접근할 수 없다.
// strict 모드에서는 상위 스코프에 y 변수를 생성하지 못 하기 때문이다.
function exampleEval() {
  'use strict'; // strict 모드 활성화
  
  var x = 10;
  // eval 내에서 변수 y 선언
  eval('var y = 20;'); 

  console.log(x); 
  console.log(y); // ReferenceError 발생, y는 eval의 렉시컬 스코프 내에서만 존재합니다
}

exampleEval();
