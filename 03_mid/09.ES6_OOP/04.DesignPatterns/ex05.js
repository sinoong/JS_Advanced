/**
 * Factory Pattern
 * - 팩토리 패턴은 사용자가 직접 객체를 생성하지 않고 팩토리에 객체 생성을 위임한다.
 * - 그렇게 해서, 객체 생성의 복잡한 내용을 사용자에게서 숨길 수 있다.
 * - 아래 예에서 사용자(개발자)는 InputFactory만 알아도 여러 종류의 Input 엘리먼트 객체를 생성할 수 있다.
 * - 그리고 외부에 노출되는 인터페이스는 항상 InputElement이기 때문에 개발자는 render 메서드 사용법만
 * - 알면 된다.
 */

class InputElement {
    render() {
        throw new Error("InputElement를 상속하여 render 메서드를 구현해 주세요.");
    }
}

class TextInput extends InputElement {
    render() {
        const input = document.createElement("input");
        input.type = "text";
        document.body.appendChild(input);
    }
}

class PasswordInput extends InputElement {
    render() {
        const input = document.createElement("input");
        input.type = "password";
        document.body.appendChild(input);
    }
}

class RadioButton extends InputElement {
    render() {
        const input = document.createElement("input");
        input.type = "radio";
        document.body.appendChild(input);
    }
}

class Checkbox extends InputElement {
    render() {
        const input = document.createElement("input");
        input.type = "checkbox";
        document.body.appendChild(input);
    }
}

class InputFactory {
    static createInput(type) {
        switch (type) {
            case "text":
                return new TextInput();
            case "password":
                return new PasswordInput();
            case "radio":
                return new RadioButton();
            case "checkbox":
                return new Checkbox();
            default:
                throw new Error(`입력하신 ${type}은 input 엘리먼트가 지원하지 않습니다.`);
        }
    }
}

const textInput = InputFactory.createInput("text");
textInput.render();

const passwordInput = InputFactory.createInput("password");
passwordInput.render();

const radioButton = InputFactory.createInput("radio");
radioButton.render();

const checkbox = InputFactory.createInput("checkbox");
checkbox.render();
