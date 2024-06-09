/**
 * Polymorphism은 다형성으로 번역되며 다양한 형태를 의미한다.
 * - 이는 한 부모에서 여러 명의 자식이 태어났을 때 모두 다른 생김새와 성격을 갖는 것과 동일하다.
 * - 도형을 예로 들면, Shape 을 도형이라고 부를 수 있지만 각각의 생김새는 모두 다를 수 있다.
 */
class Shape {
    draw() {
        throw new Error('Shape을 상속하여 draw메서드를 구현 하세요.');
    }
    area() {
        throw new Error('Shape을 상속하여 area메서드를 구현 하세요.');
    }
}

class Circle extends Shape {
    static #PI = 3.141592;
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log(`반지름이 ${this.radius}인 원을 그립니다.`);
    }

    area() {
        return Circle.#PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log(`가로: ${this.width}, 세로: ${this.height} 인 사각형을 그립니다.`);
    }

    area() {
        return this.width * this.height;
    }
}

/**
 * drawShape은 Shape 타입의 shape 객체를 인자값으로 받는다.
 * 그렇기 때문에 Shape을 상속한 다양한 형태의 도형 객체를 drawShape 함수에 전달할 수 있다.
 * 즉, 각각의 도형(원, 사각형) 객체를 위해서 drawShape 함수를 따로 만들 필요가 없다.
 */
function drawShape(shape) {
    if(!(shape instanceof Shape)) {
        console.error('Shape 객체가 아닙니다.');
        return;
    }
    shape.draw();
}

/**
 * printArea Shape 타입의 shape 객체를 인자값으로 받는다.
 * 그렇기 때문에 Shape을 상속한 다양한 형태의 도형 객체를 printArea 함수에 전달할 수 있다.
 * 즉, 각각의 도형(원, 사각형) 객체를 위해서 printArea 함수를 따로 만들 필요가 없다.
 */
function printArea(shape) {
    if(!(shape instanceof Shape)) {
        console.error('Shape 객체가 아닙니다.');
        return;
    }
    console.log(`도형의 넓이는 ${shape.area()} 입니다.`);
}

/**
 * shapes 배열은 Shape 객체를 담는 배열로 Shape을 상속 받는
 * 다양한 형태의 도형을 담을 수 있다.
 */
const shapes = [
    new Circle(10),
    new Rectangle(5, 3),
    new Circle(3),
    new Rectangle(100, 200)
];

for (const shape of shapes) {
    drawShape(shape);
    printArea(shape);
}