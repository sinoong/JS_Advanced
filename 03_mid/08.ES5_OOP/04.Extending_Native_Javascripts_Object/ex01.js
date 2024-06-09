/**
 * 자바스크립트 프로토타입을 사용하면 
 * 자바스크립트가 제공하는 Built-in 객체에 원하는 속성과 메서드를 추가할 수 있다.
 * Swift와 Kotlin 언어 있는 기존 타입의 확장 기능과 비슷하다.
 */

/**
 * 배열에 sum 함수 추가하기
 * 배열이 가지고 있는 모든 원소를 더해서 반환하는 sum 함수를 추가해서
 * Array 타입을 확장할 수 있다.
 */
{
    Array.prototype.sum = function () {
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            const value = this[i];
            // 숫자만 더합니다.
            if (typeof value === 'number') {
                total += value;
            }
        }
        return total;
    }

    const numbers = [1, 2, 3, 4, 'Hello'];
    console.log(numbers.sum());
}

/**
 * 문자열에서 첫자만 대문자로 변경하기
 */
{
    String.prototype.toCapitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    console.log('안녕하세요'.toCapitalize());
}

/**
 * 숫자를 제곱하기
 */
{
    Number.prototype.square = function () {
        return this * this;
    }
    const n = 5;
    console.log(n.square());
}

/**
 * Date 객체에 날짜 더하는 메서드 추가하기
 */
{
    Date.prototype.addDays = function (days) {
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    const today = new Date();
    console.log(today);
    console.log(today.addDays(7));
}

/**
 * 주의! 기존 메서드를 실수로 재정의할 수 있다.
 */
{
    Number.prototype.toFixed = function() {
        return 'What?';
    };

    const n = 3.14;
    console.log(n.toFixed()); // What?
}

/**
 * 따라서 반드시 해당 속성이나 메서드가 있는지 확인을 한 후 확장해야 한다.
 */
{
    if (!Number.prototype.toFixed) {
        Number.prototype.toFixed = function() {
            return 'What?';
        };
    }

    const n = 3.14;
    console.log(n.toFixed()); // 3
}

/**
 * 객체 확장은 장점과 단점이 명확하다.
 * - 장점은 기존 타입을 쉽게 확장할 수 있다는 점이다
 * - 이는 매우 큰 유연성을 가져다 준다.
 * - 단점은 위험하다는 것이다. 왜냐하면 자바스크립트가 기존 속성과 메서드가 재정되는 것을 막지 않기 때문이다.
 * - 따라서 항상 주의를 기울여야 한다.
 * - 이는 추가적인 관리 비용의 상승을 의미한다.
 */