/**
 * Object.create 와 프로토타입
 */

/**
 * Object.create는 객체를 사용하는 메서드이다.
 * Object.create를 사용하면 생성하는 객체의 프로토타입을 특정 객체로 직접 설정할 수 있다.
 * 그래서 이전 생성자 함수로 작성한 코드를 아래와 같이 만들 수 있다.
 */
{
    const prototype = {
        specise: 'Human',
        constructor: function (myname) {
            this.myname = myname;
            return this;
        },
        greet: function () {
            console.log(`Hello, I'm ${this.myname}`);
        }
    }

    const p1 = Object.create(prototype).constructor('CodingMax');
    console.log(p1);
}

/**
 * 생성자 함수를 흉내내기 위해서 constructor 메서드를 만들었다.
 * 이 constructor는 매우 중요한 역할을 한다.
 * 어떤 역할을 할까?
 * constructor 는 새로 생성하려는 객체에 속성을 만드는 역할을 한다.
 */