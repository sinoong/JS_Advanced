/**
 * 클로저의 사용 예
 * - 객체 팩토리
 * - 클로저는 private 변수와 함수를 가질 수 있다.
 * - 따라서 객체 인스턴스를 만드는 생성자 또는 팩토리로 사용할 수 있다.
 */

function newPerson(name) {
    // private
    let myName = name;
    let myHobbies = [];

    // private functions
    const deco = function () {
        return `## ${myHobbies.join(', ')} ##`;
    }

    return {
        getName: function () {
            return myName;
        },
        addHobby: function (newHobby) {
            return myHobbies.push(newHobby);
        },
        greet: function () {
            console.log(`Hi, my name is ${myName}`);
            console.log('I like play');
            console.log(deco());
        }
    }
}

const codingMax = newPerson('CodingMax');
codingMax.addHobby('soccer');
codingMax.addHobby('Minecraft')
codingMax.greet();

const jun = newPerson('Jun');
jun.addHobby('tennis');
jun.greet();


