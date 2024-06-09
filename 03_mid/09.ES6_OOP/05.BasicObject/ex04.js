/**
 * 자바스크립트는 단일 상속만 지원하기 때문에 어쩔 수 없이 다단계 상속을 통해
 * 의미가 맞지 않더라도 여러 인터페이스를 하나로 합쳐야 한다.
 * 예제를 위해서 먼
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
        throw new Error('Equals 를 상속하여 equals 메서드를 구현해 주세요.');
    }
}

class Codable extends Comparable {
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

    equals(other) {
        // User 객체가 아니면 서로 다른 객체이다.
        if (!(other instanceof User)) {
        return false;
        }

        // hash 값을 비교하여 객체의 동등성을 평가한다.
        return Hasher.hashObject(this) === Hasher.hashObject(other);
    }

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
const userData = user1.encode();
console.log(userData);
const user2 = new User().decode(userData);
console.log(user1.equals(user2));

const user3 = user1.clone();
const user4 = new User(2, 'Jun', 'jun@google.com');

console.log(user1 == user3); // false
console.log(user1 === user3); // false
console.log(user1.equals(user3)); // true
console.log(user3.equals(user4)); // false