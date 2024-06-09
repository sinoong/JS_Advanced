/**
 * Realization 또는 Implementation 관계
 * - Realization 관계는 인터페이스와 이 인터페이스를 구현하는 클래스간의 계약 관계를 나타낸다
 * - Javascript는 interface 를 지원하지 않기 때문에 class 로 interface를 
 * - 흉내내어 Realization 관계를 나타내었다.
 */
// typescript
interface Drawable {
    draw();
}

class Circle implements Drawable {
    constructor(private radius: number) {
    }

    draw() {
        console.log(`반지름이 ${this.radius}인 원을 그립니다.`);
    }
}    

function drawShape(drawable: Drawable) {
    if (!(drawable instanceof Drawable)) {
        throw new Error("Drawable 인터페이스를 구현한 객체가 아닙니다.");
    }
    drawable.draw();
}

const circle = new Circle(5);
drawShape(circle);
