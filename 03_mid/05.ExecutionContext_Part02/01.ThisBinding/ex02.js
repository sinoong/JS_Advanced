/**
 * This 바인딩
 * 2. 일반 함수가 객체의 메서드로 사용될 때
 * 2-1. 수동으로 직접 해보는 this 바인딩
 */
{
    const person = {
        name: 'CodingMax',
        age: 10,
    };

    function printInfo(this_pointer) {
        console.log(`My name is ${this_pointer.name} and ${this_pointer.age} years old`);
    }

    function addAge(this_pointer, value) {
        this_pointer.age += value;
    }

    addAge(person, 10);
    printInfo(person);
}

/**
 * This 바인딩
 * 2. 일반 함수가 객체의 메서드로 사용될 때
 * 2-2. 자바스크립트가 자동으로 this를 바인딩하게 만들어 보자.
 */
{
    const person = {
        name: 'CodingMax',
        age: 10,
        printInfo: function () {
            console.log(`My name is ${this.name} and ${this.age} years old`);    
        },
        addAge: function (value) {
            this.age += value;
        }
    };

    // addAge(person, 10); -> person.addAge(10);
    // printInfo(person); -> person.printInfo();

    person.addAge(10);
    person.printInfo();
}
