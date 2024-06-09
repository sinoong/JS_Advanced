/**
 * 생각해 볼 문제
 * 1. 중첩 객체의 메서드를 호출할 때
 */

/**
 * 생각해 볼 문제
 * 1. 디버그를 실행해 보자.
 * - getInfo는 객체 메서드로 호출되었다.
 * - info 객체가 getInfo를 호출했다.
 * - 따라서 this 는 info 객체다
 * - 그러므로 person 객체에 있는 myname에 접근할 수 없다.
 */
{
    const person = {
        myname: 'CodingMax',
        info: {
            city: 'Seoul',
            printInfo: function() {
                console.log(`${this.myname} lives in the ${this.city}`);
            }
        }
    }

    person.info.printInfo();
}

/**
 * 생각해 볼 문제
 * 1. 해결 방법
 * - 스코프체인을 사용한다.
 * - getInfo 함수의 함수 실행 컨텍스트에 스코프 체인을 보면
 * - person 이 스크립트 스코프(const로 선언했기에)에 있다.
 * - 따라서 아래와 같이 하면 myname에 접근할 수 있다.
 */
{
    const person = {
        myname: 'CodingMax',
        info: {
            city: 'Seoul',
            printInfo: function() {
                console.log(`${person.myname} lives in the ${this.city}`);
            }
        }
    }

    person.info.printInfo();
}
