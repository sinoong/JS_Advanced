/**
 * 화살표 함수의 this 바인딩
 * - 화살표 함수는 this 포인터를 가지고 있지 않다.
 * - 따라서 개발자가 명시적으로 this 포인터를 바인딩할 수 없다.
 * - 화살표 함수는 상위 스코프의 렉시컬 환경의 렉시컬 this를 상속 받는다.
 */

const kiki = {
    owner: 'CodingMax',
    name: 'KiKi',
    age: 3,
    
    // kiki.info() 으로 호출하면 일반 함수로 정의한 객체 메서드는 
    // kiki를 this포인터로 바인딩 합니다.
    info: function() {
        (() => {
            console.log(this.owner, this.name, this.age);
        })();
    },

    // kiki.crying() 으로 호출하면 일반 함수로 정의한 객체 메서드는 
    // kiki를 this포인터로 바인딩 합니다.
    crying: function() {
        
        setTimeout(() => {
            console.log(`고양이 ${this.name}가 배가 고파 울고 있어요. ${this.owner}님 밥 좀 주세요`);
        }, 1000);
    }
};

// 화살표 함수는 상위 스코프의 this 상속 받습니다.
// 그래서 화살표 함수의 this는 kiki 입니다.
kiki.info();
kiki.crying();
