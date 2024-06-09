/**
 * Template Method Pattern
 * - 템플릿 메서드 패턴은 정해진 알고리즘에 커스텀 코드를 적용하는 기술 중 하나이다.
 * - 알고리즘의 특정 단계에서 수행하는 부분을 서브 클래스에서 구현하여
 * - 중복 코드를 최대한 줄이고 변경되는 부분만 새로 추가하여 기능을 확장 할 수 있다.
 */
class StringPrinter {
    print(str) {
        console.log('>>> This is string printer');
        console.log('>>> Your Content is:');
        console.log();
        const result = this.prepareString(str);
        console.log(result);
        console.log();
        console.log('>>> Finished');
    }

    prepareString(str) {
        return str;
    }
}

class UpperCaseStringPrinter extends StringPrinter {
    prepareString(str) {
        return str.toUpperCase();
    }
}

class DecoStringPrinter extends StringPrinter {
    constructor(decorator, repeat = 2) {
        super();
        this.decorator = decorator.repeat(repeat);
    }

    prepareString(str) {
        return `${this.decorator} ${str} ${this.decorator}`;
    }
}

class TranslateStringPrinter extends StringPrinter {
    #translate(str) {
        return '안녕! 멋진 세상이야!';
    }

    prepareString(str) {
        return this.#translate(str);
    }
}

class ColorStringPrinter extends StringPrinter {
    print(str) {
        console.log('[COLOR PRINTER START]');
        super.print(str);
        console.log('[END]');
        console.log();
    }

    prepareString(str) {
        return `컬러 인쇄: ${str}`;
    }
}

let printer = new StringPrinter();
printer.print('Hello, World');
printer = new UpperCaseStringPrinter();
printer.print('Hello, World');
printer = new DecoStringPrinter('#', 3);
printer.print('Hello, World');
printer = new TranslateStringPrinter();
printer.print('Hello, World');
printer = new ColorStringPrinter();
printer.print('Hello, World');