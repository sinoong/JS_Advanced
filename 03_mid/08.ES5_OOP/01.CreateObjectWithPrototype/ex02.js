/**
 * 생성자 함수
 */

// person1 이라는 객체가 있을 때, 다른 이름을 갖는
// person2 를 만들기 위해서 객체 리터럴을 사용한다면 중복 코드가 많아질 것이다.
{
    const person1 = {
        myname: 'CodingMax',
        greet: function () {
            console.log(`Hello!, I'm ${this.myname}`);
        }
    }

    // myname 값만 다른데 중복 코드가 생긴다.
    const person2 = {
        myname: 'Jun',
        greet: function () {
            console.log(`Hello!, I'm ${this.myname}`);
        }
    }
}

// 생성자 함수를 사용하면 중복 코드를 줄일 수 있다.
{
    function Person(myname) {
        this.myname = myname;
        this.greet = function () {
            console.log(`Hello!, I'm ${this.myname}`);
        }
    }

    const person1 = new Person('CodingMax');
    const person2 = new Person('Jun');
}