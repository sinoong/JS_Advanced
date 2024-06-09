/**
 * Object.defineProperty 로 getter와 setter 속성도 정의할 수 있다.
 * class 에서 정의한 getter와 setter 속성과 동일하다.
 */

{
    const person = {
        age: 20
    };

    Object.defineProperty(person, 'name', {
        get: function () {
            if (!this.firstName || !this.lastName) {
                return '이름을 알 수 없어요';
            }
            return [this.firstName, this.lastName].join(' ');
        },

        set: function(value) {
            [this.firstName, this.lastName] = value.split(' ');
        }
    });

    person.name = 'Coding Max';
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.name);
}