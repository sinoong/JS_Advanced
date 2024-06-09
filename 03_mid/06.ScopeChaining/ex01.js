/**
 * 3. 스코프체이닝
 * - 함수 코드에서 참조하는 변수를 
 * - 로컬 스코프부터 상위 스코프를 차례대로 방문하며 참조하는 변수를 찾는 것.
 * - 마지막 스코프까지 가서도 참조 변수를 찾지 못 하면 참조 오류(Reference Error)가 발생한다.
 */

var a_global = 10;
let a_script_let = 20;
const a_script_const = 30;

function a() {
    var a_function = 40;
    console.log({ a_global });
    console.log({ a_script_let });
    console.log({ a_script_const });

    {
        let b_block_let = 10;
        const b_block_const = 20;
        console.log({ b_block_let });
        console.log({ b_block_const });
    }
    
    function b() {
        console.log({ a_global });
        console.log({ a_script_let });
        console.log({ a_script_const });
        console.log({ a_function });
    }
    
    b();
}

a();