/**
 * This 바인딩
 * - 4. 생성자 함수의 this 바인딩
 */

/**
 * 생성자 함수는 ES5 시절 OOP 패러다임을 구현하기 위해서 많이 사용한 함수입니다.
 * 객체 타입을 바탕으로 객체의 인스턴스를 생성할 수 있기 때문입니다.
 * 여기서는 this 바인딩만 살펴 보고 생성자 함수에 대한 자세한 내용은
 * ES5 시절 OOP 섹션에서 좀 더 깊이 다루겠습니다.
 */
function Cat(owner, name, age) {
    this.owner = owner;
    this.name = name;
    this.age = age;
}

// 위 코드에서 this 는 kiki가 됩니다.
const kiki = new Cat('CodingMax', 'KiKi', 3);
console.log(kiki);

// 생성자 함수에서는 메서드를 정의하기 위해서 prototype 에 접근해서 정의해야 합니다.
// ES5 OOP에서 다룹니다.