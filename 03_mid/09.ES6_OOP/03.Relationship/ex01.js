/**
 * IS-A 관계
 * - "is-a" 관계는 상속 관계를 의미한다.
 * - "철수는 사람이다." 와 같은 말에서 철수는 사람의 특징을 모두 상속 받았다.
 * - 아래 예제에서 Car는 Vehicle에서 상속을 받았다.
 * - 따라서 Car is a Vehicle 인 is-a 관계가 성립한다.
 */
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving.`);
    }
}

class Car extends Vehicle {
    constructor(name, brand) {
        super(name);
        this.brand = brand;
    }

    honk() {
        console.log(`${this.brand} car is honking.`);
    }
}

const myCar = new Car('K5', 'KIA');
myCar.move();
myCar.honk();

console.log(myCar instanceof Car);
console.log(myCar instanceof Vehicle);