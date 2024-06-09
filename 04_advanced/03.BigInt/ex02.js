/**
 * BigInt 산술 연산
 */
{
    const a = 100n;
    const b = 201n;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(b % a);
    console.log(a ** b);
}

/**
 * BigInt 와 number 타입은 같이 연산할 수 없다.
 */
{
    const a = 10n; // bigint
    const b = 20;  // number

    // Error
    console.log(a + b);
}

/**
 * 반드시 
 * number 타입을 BigInt로 변경하거나 
 * BigInt 타입을 number 타입으로 변경해야 한다.
 */
{
    const a = 10n; // bigint
    const b = 20;  // number

    console.log(a + BigInt(b));

    console.log(Number(a) + b);
}