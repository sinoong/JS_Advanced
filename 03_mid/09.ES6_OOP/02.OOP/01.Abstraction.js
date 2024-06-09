/**
 * 추상화
 * - 복잡한 것을 필요한 것만 추려서 간소화 하는 것을 추상화라고 한다.
 * - 추상화는 해당 객체가 필요한 컨텍스트에 따라 추상화 내용이 달라진다.
 */
{
    // 의료에서 Person 추상화
    class Person {
        constructor(name) {
            this.name = name;
        }

        takeMedication() {
            console.log(`${this.name}은 치료를 받고 있다.`);
        }

        visitDoctor() {
            console.log(`${this.name}은 정기적으로 의사를 만나서 건강을 검사한다.`);
        }
    }

}
{
    // 교육에서 Person 추상화
    class Person {
        constructor(name) {
            this.name = name;
        }

        attendLecture() {
            console.log('강의를 수강한다');
        }

        takeExam() {
            console.log('시험을 치른다.')
        }
    }
}

{
    // 금융에서 Person 추상화
    class Person {
        constructor(name) {
            this.name = name;
        }

        makeTransaction() {
            console.log('거래를 한다.');
        }

        takeLoan() {
            console.log('은행에서 대출을 받는다.')
        }
    }
}

{
    // 직장에서 Person 추상화
    class Person {
        constructor(name) {
            this.name = name;
        }
        
        attendMeeting() {
            console.log('회의에 참석한다.');
        }

        completeProject() {
            console.log('프로젝트를 마무리한다.');
        }
    }
}
