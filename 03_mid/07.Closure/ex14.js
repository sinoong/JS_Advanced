/**
 * 클로저 사용 예
 * 4. 이벤트 구독 및 Emitter(화살표 함수로 만들어 보기)
 * 
 * 이렇듯 클로저는 private 데이터와 메서드를 가질 수 있고 
 * public 으로 특정 메서드만 공개할 수 있어
 * 가벼운 객체를 만드는 팩토리 함수를 만들 때 많이 사용한다.
 */
function newEventEmitter() {
    // private
    const eventListeners = new Map();
    const removeAllListeners = () => {
        eventListeners.clear();
    };

    return {
        // 여기에서 화살표 함수로 객체 메서드를 정의할 수 있는 이유는 
        // 이 객체 메서드의 상위 스코프가 함수 newEventEmiiter 함수이기 때문에
        // addListener가 newEventEmitter 함수 스코프에 대한 클로저 스코프를 만들기 때문이다.
        addListener: (event, callback) => {
            let listeners = [];
            if (eventListeners.has(event)) {
                listeners = eventListeners.get(event);
            }
            listeners.push(callback);
            eventListeners.set(event, listeners);
        },
        emit: (event, ...args) => {
            if (!eventListeners.has(event)) {
                return ;
            }

            const listeners = eventListeners.get(event);
            listeners.forEach((callback) => callback(...args));
        },
        close: () => {
            console.log('모든 listener를 제거합니다.');
            removeAllListeners();
            console.log('모든 listener를 제거했습니다.');
        }
    }
}

const emitter = newEventEmitter();
emitter.addListener('click', () => {
    console.log('버튼을 클릭했습니다.');
});

emitter.addListener('click', () => {
    console.log('버튼을 또 클릭했습니다.');
});

emitter.addListener('close', () => {
    console.log('프로그램을 종료합니다.');
    emitter.close();
});

emitter.emit('click');
emitter.emit('click');

emitter.emit('close');

// 테스트
emitter.emit('click');



/**
 * 하지만 이전 시간에 배운 객체 메서드를 화살표 함수를 사용해 정의하면
 * this 포인터에 접근할 수 없기 때문에 객체 메서드일 때에는 일반 함수로 객체 메서드를 구현했다.
 */
{
    const person = {
        myname: 'CodingMax',
        greet1: function() {
            console.log(this.myname);
        },
        greet2: () => {
            console.log(this.myname);
        }
    }

    person.greet1();
    person.greet2(); // undefined
}

/**
 * 따라서 객체 메서드로만 사용될 때는 일반함수를 사용해야 하고
 * 객체 메서드이지만 클로저 스코프를 가질 때는 화살표 함수를 선호한다면
 * 많은 혼동이 생긴다. 
 * 따라서 ES6에서는 객체의 메서드 정의만을 위한 새로운 문법을 소개했다.
 * 따라서 객체 메서드 정의는 아래 문법으로 통일하는 것이 좋다.
 * 왜냐하면 class를 통해서 메서드를 정의할 때, 메서드 축약법만 super 키워드를 지원하기 때문이다.
 * 자세한 내용은 OOP 섹션에서 다룸
 */
{
    const person = {
        myname: 'CodingMax',
        greet() {
            console.log(this.myname);
        },
    }
    person.greet();

    function newPerson(name) {
        const myname = name;
        return {
            greet() {
                console.log(myname);
            }
        }
    }

    const codingMax = newPerson('CodingMax');
    codingMax.greet();
}