// Javascript
// Interface 흉내내기
class Drawable {
    draw() {
        throw new Error("Drawable을 상속하여 draw 메서드를 구현하세요.");
    }
}

class Circle extends Drawable {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log(`반지름이 ${this.radius}인 원을 그립니다.`);
    }
}

function drawShape(drawable) {
    if (!(drawable instanceof Drawable)) {
        throw new Error("Drawable 인터페이스를 구현한 객체가 아닙니다.");
    }
    drawable.draw();
}

const circle = new Circle(5);
drawShape(circle);