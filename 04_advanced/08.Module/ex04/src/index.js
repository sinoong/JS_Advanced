/**
 * ECMAScript Module(ESM)
 * - ESM에서 CommonJS 모듈 사용하기
 */

/**
 * ESM에서 CommonJS모듈을 사용할 때는 모두 임포트하여 새로운 객체이름으로 매핑해서 사용한다.
 */
import * as calculator from './calculator';
import * as utils from './printObj';

console.log(calculator.add(10, 20));
console.log(calculator.sub(10, 20));

const person = {
  name: 'CodingMax'
};

console.log(utils.printObj(person));