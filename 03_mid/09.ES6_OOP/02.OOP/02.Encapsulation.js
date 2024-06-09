/**
 * 캡슐화
 * - 캡슐화는 객체의 속성과 메서드의 로직의 자세함을 외부로 공개하지 않는 것이다.
 * - 즉, 복잡함을 감추는 것이다.
 * - 따라서 해당 객체를 사용하는 사용자(개발자)는 
 * - 내부의 복잡한 로직 이해 없이 해당 객체를 사용할 수 있다.
 * - 오직 public으로 공개된 인터페이스만 사용할 수 있다.
 */
class BankAccount {
    #balance; 
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // 잔고 조회
    get balance() {
        return this.#balance;
    }

    // 입금
    deposit(amount) {
        if (amount <= 0) {
            console.error('입금 금액은 0보다 커야 합니다.');
            return;
        }
        this.#balance += amount;
        return this.#balance;
    }

    // 출금
    withdraw(amount) {
        if (amount <= 0) {
            console.error('출금 금액은 0보다 커야 합니다.');
            return;
        }
        if (amount > this.#balance) {
            console.error('잔고가 부족합니다.');
            return;
        }
        this.#balance -= amount;
        return this.#balance;
    }
}

// BankAccount 객체를 사용하는 개발자는
// 입금, 출금 등의 로직을 알지 못해도 아무 문제 없이
// 해당 로직을 사용할 수 있다.
const account = new BankAccount(1000);
console.log(account.balance);  // 1000

account.deposit(500);
console.log(account.balance);  // 1500

account.withdraw(200);
console.log(account.balance);  // 1300
