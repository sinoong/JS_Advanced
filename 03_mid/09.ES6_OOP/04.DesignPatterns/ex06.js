/**
 * Observer Pattern
 * - 옵저버 패턴은 Subject와 Observer 객체로 구성된다.
 * - Observer는 Subject의 상태 변화를 관찰하게 되고 
 * - Subject의 상태가 변경되면 해당 내용을 통지 받는다.
 * - Frontend 개발시 많이 사용하는 상태 관리 라이브러들이 
 * - 옵저버 패턴을 사용해 상태가 변경되면 옵저버들에게 상태 변경을 알려준다.
 */

// Observer 인터페이스
class Observer {
    update(state) {
        throw new Error("Observer를 상속하여 update 메서드를 구현해 주세요.");
    }
}

// Console에 로깅하는 옵저버
class ConsoleLogger extends Observer {
    update(state) {
        console.log(JSON.stringify(state, null, 2));
    }
}

// [Subject]
// 옵저버들이 상태 변화에 관심을 기울이고 있는 대상 객체
class Store {
    constructor(initialState) {
        this.state = initialState;
        this.observers = [];
    }

    setState(partialState) {
        if (typeof partialState === 'function') {
            this.state = { ...this.state, ...partialState(this.state) };
        } else {
            this.state = { ...this.state, ...partialState };
        }
        this.notifyAll();
    }

    getState() {
        return this.state;
    }

    subscribe(observer) {
        if (observer instanceof Observer) {
            this.observers.push(observer);
        } else {
            throw new Error("Observer not of instance Observer");
        }

        return () => {
            const index = this.observers.indexOf(observer);
            if (index !== -1) {
                this.observers.splice(index, 1);
            }
        };
    }

    notifyAll() {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }

    increment() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    decrement() {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }
}

const store = new Store({ count: 0 });
const logger = new ConsoleLogger();

store.subscribe(logger);

store.increment();
store.increment();
store.decrement();
