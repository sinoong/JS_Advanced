/**
 * ECMAScript Module(ESM)
 * - import한 것을 다시 export 하기
 */

/**
 * calculator에서 아래와 같이 가져올 수 있다
 */
import { add } from './calculator';
console.log(add(10, 10));
// 또는
import * as caclulator from './calculator';
caclulator.add(10, 20);