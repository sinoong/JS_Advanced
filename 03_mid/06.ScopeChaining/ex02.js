/**
 * 3. 스코프체이닝
 * - 함수 코드에서 참조하는 변수를 
 * - 로컬 스코프부터 상위 스코프를 차례대로 방문하며 참조하는 변수를 찾는 것.
 * - 마지막 스코프까지 가서도 참조 변수를 찾지 못 하면 참조 오류(Reference Error)가 발생한다.
 */

// Reference Error
function a() {
    var a_function = 10;
    {
        const a_block_const = 20;
    }
    console.log({ a_block_const });
}

function b() {
    console.log(a_function);
}

a();
b();