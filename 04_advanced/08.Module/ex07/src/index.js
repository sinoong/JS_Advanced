/**
 * ECMAScript Module(ESM)
 * - 모듈 관리 기법
 * - Barrel(배럴 기법)
 * - https://basarat.gitbook.io/typescript/main-1/barrel
 */

/**
 * calculator 예제와 같이 하나의 모듈을 작은 단위의 파일로 나눈다음
 * export import 로 하나의 파일(index.js)을 통해 하나의 모듈로 모아 export 하는 방법
 */
import { add } from './calculator';
console.log(add(10, 10));
// 또는
import * as caclulator from './calculator';
caclulator.add(10, 20);

/**
 * 아래와 같이 배럴기법을 적용하면 
 * 여러 파일로 나누어 정의한 모듈을 하나의 모듈로 모아서
 * import 하여 사용할 수 있다.
 * 따라서 모듈 파일의 관리가 매우 쉬어지는 것이다.
 */
import { Comparable, Codable, Copyable, mixin } from './object';
import _ from './sodash';

console.log(_.chain([1, 2, 3]).map((it) => it * 2));

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    mixin(
      User.prototype,
      Comparable.prototype,
      Codable.prototype,
      Copyable.prototype
    );
  }
}

const user1 = new User(1, 'CodingMax', 'codingmax@google.com');
const userData = user1.encode();
console.log(userData);
const user2 = new User().decode(userData);
console.log(user1.equals(user2));
console.log(user2);

import { of } from './rxjj';
import { fetchJsonData } from './utils';

of(1, 2, 3, 4, 5, 6)
  .map((userId) => `https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  .flatMap((url) => fetchJsonData(url))
  .map((todos) => todos[0])
  .subscribe(console.log);