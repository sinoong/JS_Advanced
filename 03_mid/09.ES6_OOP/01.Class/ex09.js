/**
 * Getter/Setter - 2
 */

/**
 * Getter와 Setter 속성을 다방면으로 사용된다.
 * 먼저 private 데이터를 getter를 통해 외부로 노출시키거나
 * setter를 통해 값을 할당할 때 추가적인 로직(유효성 검사 같은)을 실행할 때 
 * 많이 사용한다.
 */
{
    class Circle {
        #raius = 0;
        constructor(radius) {
            this.#raius = radius;
        }

        get radius() {
            return this.#raius;
        }

        set radius(newRadius) {
            if (typeof newRadius !== 'number') {
                throw '반지름은 반드시 숫자값이어야 합니다.';
            }
            if (newRadius < 0) {
                throw '반지름은 0보다 커야 합니다.';
            }
            this.#raius = newRadius;
        }
    }
    const circle = new Circle(10);
    circle.radius = -1;
}

/**
 * getter 는 계산된 속성(computed property)를 반환할 때도 
 * 많이 사용합니다.
 */
{
    class Circle {
        #raius = 0;
        constructor(radius) {
            this.#raius = radius;
        }

        get radius() {
            return this.#raius;
        }

        set radius(newRadius) {
            if (typeof newRadius !== 'number') {
                throw '반지름은 반드시 숫자값이어야 합니다.';
            }
            if (newRadius < 0) {
                throw '반지름은 0보다 커야 합니다.';
            }
            this.#raius = newRadius;
        }

        get area() {
            return 3.141592 * this.radius ** 2;
        }
    }
    const circle = new Circle(10);
    circle.area;
}