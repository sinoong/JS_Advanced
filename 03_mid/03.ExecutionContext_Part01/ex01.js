var a = 'This is var variable a';
let b = 'This is let variable b';
const c = 'This is const constant c';

function a_printA() {
    this.console.log('a', a);
}

function a_printAB() {
    this.a_printA();
    this.console.log('b', b);
}

function a_printABC() {
    this.a_printAB();
    this.console.log('c', c);
}

this.a_printABC();