/**
 * Aggregation 관계
 * - 집약 관계로 전체와 부분 사의의 관계로 전체와 부분을 분리할 수 있다.
 * - 멤버 객체는 전체 객체의 일부이지만 멤버 객체는 전체 객체와 독립적으로
 * - 존재할 수 있다.
 * - 예를 들면 컴퓨터와 컴퓨터 주변기기의 관계를 생각해 볼 수 있다.
 * - 컴퓨터 주변 기기 중 마우스가 없어도 컴퓨터라는 전체 객체는 존재할 수 있다.
 * - 또한 마우스라는 부분 객체도 독립적으로 존재할 수 있다.
 */
class Mouse {
    constructor(brand) {
        this.brand = brand;
    }

    click() {
        console.log('마우스 클릭');
    }
}

class Computer {
    constructor(brand, mouse = null) {
        this.brand = brand;
        this.mouse = mouse; 
    }

    setMouse(mouse) {
        this.mouse = mouse;
    }

    useMouse() {
        if (this.mouse) {
            this.mouse.click();
        } else {
            console.log('마우스를 연결해 주세요.');
        }
    }
}

const mouse = new Mouse('Logitech');

// 마우스는 컴퓨터 없이도 독립적으로 사용 가능
mouse.click();

// 컴퓨터도 마우스 없이 독립적으로 사용 가능
const computer = new Computer('iMac');
// 단, 마우스를 연결해 주세요. 메시지 출력
computer.useMouse();

// 마우스를 컴퓨터에 연결
computer.setMouse(mouse);
// 마우스 클릭
computer.useMouse();
