/**
 * Lexical Scope 란?
 */

let a = 10;
let b = 20;

function test1() {
    console.log(a);
    console.log(b);
    console.log(c);
}

let c = 30;

test1();