/**
 * Comparable
 * 객체를 정의할 때, 항상 객체를 비교하는 방법을 제공하는 것이 좋다.
 * 예를 들면, 객체 속성의 해시값을 바탕으로 객체의 동등성을 평가하는 것이다.
 */

/**
 * 객체 또는 문자열을 hash 값으로 변경하는 객체.
 */
  class Hasher {
    /**
     * 문자열을 정수값인 hash값으로 변경한다.
     */
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
  
    /**
     * 객체를 정수값이 hash값으로 변경한다.
     * 이 예제에서는 코드를 단순화하기 위해서 JSON 문자열을 사용했다.
     */
    static hashObject(obj) {
      return this.hashString(JSON.stringify(obj));
    }
  }
  
  class Comparable {
    equals(other) {
      throw new Error('Equals 를 상속하여 equals 메서드를 구현해 주세요.');
    }
  }
  
  class User extends Comparable {
    constructor(id, name, email) {
      super();
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    equals(other) {
      // User 객체가 아니면 서로 다른 객체이다.
      if (!(other instanceof User)) {
        return false;
      }
  
      // hash 값을 비교하여 객체의 동등성을 평가한다.
      return Hasher.hashObject(this) === Hasher.hashObject(other);
    }
  }
  
  const user1 = new User(1, 'CodingMax', 'codingmax@google.com');
  const user2 = new User(1, 'CodingMax', 'codingmax@google.com');
  const user3 = new User(2, 'Jun', 'jun@google.com');
  
  console.log(user1 == user2); // false
  console.log(user1 === user2); // false
  console.log(user1.equals(user2)); // true
  console.log(user1.equals(user3)); // false
  