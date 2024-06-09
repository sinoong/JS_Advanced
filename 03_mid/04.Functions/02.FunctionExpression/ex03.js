/**
 * 함수 표현식과 익명함수 2
 */
const factorial = function fact(n) {
    if (n <= 1) {
        return 1;
    } 
    return n * fact(n - 1);
}