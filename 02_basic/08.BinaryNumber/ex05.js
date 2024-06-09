/**
 * 2의 보수
 */
/**
 * 2의 보수
 * https://www.rapidtables.com/convert/number/decimal-to-binary.html
 */

function decToBin(n) {
  if (typeof n !== 'number') {
    throw new Error('숫자값을 입력해 주세요');
  }

  if (n < 0) {
    return (n >>> 0).toString(2);
  }

  let binary = '';
  do {
    const bit = n & 0b1;
    n = n >> 1;
    binary = `${bit}` + binary;
  } while (n > 0);
  return binary.padStart(32, '0');
}

// -0의 1의 보수
console.log(~0);
console.log(decToBin(~0));

// -0의 2의 보수
console.log(decToBin(~0 + 1));

// -1의 1의 보수
console.log(~1);
console.log(decToBin(~1));
// -1의 2의 보수
console.log(decToBin(~1 + 1));

// 0b100000000000000000000000000000000
console.log(
  0b00000000000000000000000000000001 + 0b11111111111111111111111111111111
);
console.log('100000000000000000000000000000000');
console.log(decToBin(4294967296));

