/**
 * Mixin: 객체의 수평적 확장 그리고 in 연산자와 Duck 타이핑
 */

/**
 * 이전 섹션에서 Comparable, Codable, Copyable 인터페이스를 구현해서 객체를 만들었다.
 * 하지만 인터페이스가 없고 단일 상속만 지원하는 자바스크립트에 억지로 인터페이스를 흉내 내려고
 * 클래스로 인터페이스를 흉내내고 단일 상속으로 모든 인터페이스를 하나로 통합했다.
 * 하지만 이렇게 하면 정작 필요한 클래스 B를 상속해야 할 때, 상속 관계가 꼬일 수도 있다.
 * 자바스크립트는 단일 상속만 지원하기 때문에 클래스 B가 
 * Comparable, Codable, Copyable 인터페이스를 흉내낸 클래스를 상속해야 하기 때문이다.
 * 그런데 만약 클래스 B를 수정할 수 없다면? 또는 B가 이미 다른 클래스를 상속하고 있다면?
 * 따라서 단일 상속만 지원하는 자바스크립트로는 이 문제를 해결하기 어렵다.
 * 이럴 때 mixin 을 사용하면 좋다. 하지만 Comparable, Codable, Copyable 타입 정보는 사라진다
 */
{
    
class Hasher {
    static hashString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        // 정수값으로 해쉬값을 만든다.
        // 해쉬 생성 알고리즘은 임의로 만든 것이다.
        const charCode = str.charCodeAt(i);
        hash = (hash << 5) - hash + charCode;
        hash = hash & hash;
      }
      return hash;
    }
  
    static hashObject(obj) {
      return this.hashString(JSON.stringify(obj));
    }
  }
  
  class Comparable {
    equals(other) {
      if (!(other instanceof User)) {
        return false;
      }
      return Hasher.hashObject(this) === Hasher.hashObject(other);
    }
  }
  
  class Codable {
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
  }
  
  class Copyable {
    clone() {
      return new this.constructor().decode(this.encode());
    }
  }
  
  function mixin(object, ...components) {
    for (const component of components) {
      for (const prop of Object.getOwnPropertyNames(component)) {
        if (!(prop in object)) {
          object[prop] = component[prop];
        }
      }
    }
    return object;
  }
  
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
  
  const user3 = user1.clone();
  const user4 = new User(2, 'Jun', 'jun@google.com');
  
  console.log(user1 == user3); // false
  console.log(user1 === user3); // false
  console.log(user1.equals(user3)); // true
  console.log(user3.equals(user4)); // false
  

  // 하지만 아래 결과는 모두 false이다.
  console.log(user1 instanceof Comparable);
  console.log(user1 instanceof Codable);
  console.log(user1 instanceof Copyable);


  /**
   * 이럴 때, 동적 타입언어에 더 잘 맞는 Duck Typing을 활용한다.
   * 즉, 오리가 꽥꽥 울면 오리라고 볼 수 있는 것이다.
   * 따라서, 
   * - equals 가 있으면 Comparable 이라고 볼 수 있는 것이다.
   * - encode와 decode가 있으면 Codable 이라고 볼 수 있다.
   * - clone이 있으면 Copyable 이라고 볼 수 있다.
   * - 이러한 Duck typing을 활용할 대, in 연산자를 사용할 수 있다.
   */
  function compare(a, b) {
    if (!('equals' in a && 'equals' in b)) {
        console.error('Comparable이 아닙니다.');
        return;
    }
    return a.equals(b);
  }
  
  console.log(compare(user1, user2));
  console.log(compare(user1, {}));
}