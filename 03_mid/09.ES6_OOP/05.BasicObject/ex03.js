/**
 * Copyable
 * - 객체는 자신이 복사되는 방법을 제공해 주면 좋다.
 * - 자바스크립트에서 객체를 다른 변수에 할당하는 것은 주소값만 복사하는 것이기 때문에 얕은 복사가 된다.
 * - 개발자가 직접 복사 대상과 수준을 결정할 수 있는 방법을 제공해 주는 것이 좋다.
 * - 여기서는 직렬화를 통해 만들어진 데이터를 다시 역직렬화를 하여 객체를 복사한다.
 */
class Codable {
    encode() {
        throw new Error('Codable을 상속하여 encode를 구현해 주세요.');
    }

    decode(value) {
        throw new Error('Codable을 상속하여 decode를 구현해 주세요.');
    }
}

class Copyable extends Codable {
    clone() {
        throw new Error('Copyable을 상속하여 clone을 구현해 주세요.');
    }
}

class User extends Copyable {
  constructor(id, name, email) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // 예제를 단순화하기 위해서 JSON문자열로 직렬화를 한다.
  encode() {
    return JSON.stringify(this);
  }

  decode(value) {
    const obj = JSON.parse(value);
    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
    return this;
  }

  clone() {
    return new this.constructor().decode(this.encode());
  }
}

const user1 = new User(1, 'CodingMax', 'codingmax@google.com');
const user2 = new User().decode(user1.encode());
console.log(user1);
console.log(user2);
console.log(user2.clone());