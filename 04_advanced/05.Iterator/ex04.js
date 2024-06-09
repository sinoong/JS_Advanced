/**
 * 커스텀 Iterable 객체
 * Symbol.iterator 메서드를 직접 구현하여 Iterable 한 객체를 만들 수 있다.
 */

/**
 * Iterator 프로토콜을 구현하는 객체와 
 * Iterator를 사용하는 Iterable 객체를
 * 나누어서 구현하는 것이 코드 관리 측면에서 좋다.
 */
{
    class RangeIterator {
        constructor(start, end) {
            this.current = start;
            this.end = end;
        }

        next() {
            if (this.current <= this.end) {
                const value = this.current;
                this.current++;
                return { value, done: false };
            } else {
                return { done: true };
            }
        }
    }

    class Range {
        constructor(start, end) {
            this.start = start;
            this.end = end;
        }

        [Symbol.iterator]() {
            return new RangeIterator(this.start, this.end);
        }
    }

    const range = new Range(1, 10);
    for (let num of range) {
        console.log(num);
    }
}

/**
 * 그러면 아래와 같이 다양한 Iterator를 Iterable에 적용할 수 있다.
 */
{
    class ForwardRangeIterator {
        constructor(start, end) {
            this.current = start;
            this.end = end;
        }

        next() {
            if (this.current <= this.end) {
                const value = this.current;
                this.current++;
                return { value, done: false };
            } else {
                return { done: true };
            }
        }
    }

    class BackwardRangeIterator {
        constructor(start, end) {
            this.current = end;
            this.start = start;
        }

        next() {
            if (this.current >= this.start) {
                const value = this.current;
                this.current--;
                return { value, done: false };
            } else {
                return { done: true };
            }
        }
    }
    class Range {
        constructor(start, end, reverse = false) {
            this.start = start;
            this.end = end;
            this.reverse = reverse;
        }

        [Symbol.iterator]() {
            return this.reverse ? new BackwardRangeIterator(this.start, this.end) : new ForwardRangeIterator(this.start, this.end);
        }
    }

    const range = new Range(1, 10, true);
    for (let num of range) {
        console.log(num);
    }

    /**
     * Iterator 프로토콜을 구현한 객체는 아래와 같이 Spread 연산을 사용할 수 있다.
     */
    const range2 = new Range(1, 5);
    console.log(...range2);
}