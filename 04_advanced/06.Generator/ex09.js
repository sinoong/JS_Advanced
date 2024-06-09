/**
 * Iterable 객체 쉽게 만들기
 */

/**
 * Generator는 Iterable 이면서 동시에 Iterator다.
 * 이러한 내용을 바탕으로 객체나 클래스에서 Iterator가 필요할 때, 
 * Generator를 사용해 아주 쉽게 Iterable과 Iterator를 만들 수 있다.
 */
{
    const iterable = {
        *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
        }
    }

    for (const n of iterable) {
        console.log(n);
    }
}

/**
 * Stack 클래스를 만들어 보자.
 * iterable로 만들어서 스택의 모양을 출력할 수 있다.
 */
{
    class Stack {
        #items;
        constructor() {
            this.#items = [];
        }
        
        push(item) {
            this.#items.push(item);
        }
        
        pop() {
            return this.#items.pop();
        }
        
        *[Symbol.iterator]() {
            for (let i = this.#items.length - 1; i >= 0; i--) {
                yield this.#items[i];
            }
        }
    }

    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    for (const item of stack) {
        console.log(item);
    }

}