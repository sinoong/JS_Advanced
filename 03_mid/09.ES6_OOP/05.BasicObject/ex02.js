/**
 * Serialization(Codable)
 * - 직렬화와 역직렬화는 중요하다.
 * - 객체는 항상 메모리에 머무르지 않는다.
 * - 디스크에 저장될 때도 있고 네트워크 통신을 통해 다른 머신으로 이동할 수도 있다.
 * - 따라서 항상 객체의 상태를 저장하고 복원하는 방법을 생각해야 한다.
 */
class Codable {
    encode() {
        throw new Error('Codable을 상속하여 encode를 구현해 주세요.');
    }

    decode(value) {
        throw new Error('Codable을 상속하여 decode를 구현해 주세요.');
    }
}

class User extends Codable {
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
}

const user1 = new User(1, 'CodingMax', 'codingmax@google.com');
const user2 = new User().decode(user1.encode());
console.log(user1);
console.log(user2);
