/**
 * ECMAScript Module(ESM)
 * - import 와 export
 */

/**
 * greet.js 모듈에서 greet 함수를 가져 오기 위해서는 
 * greet.js 에서 greet 함수를 export 해야 하고
 * index.js 에서는 import 를 해야 한다. 
 */

/**
 * greet 모듈이 export 하는 모든 것(*)을 import 해서
 * as 구문으로 module 이라는 이름에 담는다.
 */
import * as module from './greet';
module.greet();
console.log(typeof(module)); // object

/**
 * 모듈도 객체이기 때문에 아래와 같이 객체 분해로 
 * export 되는 것 중 원하는 것만 import 할 수 있다
 */
import { greet } from './greet';
greet();

/**
 * 만약 import 하는 두 모듈에서 같은 이름인 것을 가져오려고 할 때,
 * as 로 import 하는 것의 이름을 다시 지어줄 수 있다.
 */
import { greet as greetEn } from './greet';
import { greet as greetKo } from './greet_ko';
greetEn();
greetKo();

/**
 * export 하는 곳에서 default 로 export 한 것은 중괄호 없이 import 할 수 있다.
 */
import printObj from './printObj';
printObj({ name: 'CodingMax' });

/**
 * export default는 이름을 임의로 변경해서 import 할 수 있다.
 */
import variableA from './defaultVariables';
console.log(variableA);

import functionSum from './defaultFunctions';
console.log(functionSum(10, 20));

import objectPerson from './defaultObject';
console.log(objectPerson);

import ClassPerson from './defaultClass';
const person = new ClassPerson('CodingMax');
console.log(person);