/**
 * 클로저의 자유 변수는 자유롭게 읽고 수정할 수 있다.
 * 객체 메서드로 정의해도 각 메서드가 외부 함수의 스코프에 있는 변수를 참조 한다면
 * 클로저 스코프를 형성한다.
 * 따라서 getName과 setName은 outer 스코프를 위한 클로저 스코프를 만든다.
 */
function outer() {
    let myname = '';
    return {
        getName: function() {
            return myname
        },
        setName: function (newName) {
            myname = newName
        }
    }
}

const person = outer();
person.setName('CodingMax');
console.log(person.getName());