/**
 * Delegate Pattern
 * - 우리도 일상 생활에서 외주를 주어 일을 해결하는 경우가 많다.
 * - 이처럼 델리게이트 패턴은 해당 객체에 주어진 일을 다른 객체에게 위임하여 해결하는 패턴이다.
 * - 예를 들어, 컴퓨터에 문서를 인쇄하면, 컴퓨터는 프린트에게 문서 인쇄 작업을 위임하여 
 * - 요청 받은 문서 인쇄라는 작업을 처리할 수 있다.
 * - 델리게이션 패턴은 정말 많이 자주 사용되는 패턴이다.
 */

class Document {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

class Printer {
    print(document) {
        throw new Error("Printer를 상속하여 print() 를 재정의 해 주세요.");
    }
}

class LaserPrinter extends Printer {
    print(document) {
        console.log(`레이저 프린터: 문서를 인쇄합니다... ${document.getContent()}`);
    }
}

class InkjetPrinter extends Printer {
    print(document) {
        console.log(`잉크젯 프린터: 문서를 인쇄합니다... ${document.getContent()}`);
    }
}

class PDFPrinter extends Printer {
    print(document) {
        console.log(`PDF 프린터: 문서를 PDF로 저장합니다... ${document.getContent()}`);
    }
}

class Computer {
    constructor() {
    }

    setPrinter(printer) {
        this.printer = printer;
    }

    printDocument(document) {
        if (!this.printer) {
            console.error('프린터를 연결해 주세요.');
            return;
        }
        // 인쇄작업은 프린터 객체에 위임한다.(delegation)
        this.printer.print(document);
    }
}

const doc = new Document("This is a sample document");

const laserPrinter = new LaserPrinter();
const inkjetPrinter = new InkjetPrinter();
const pdfPrinter = new PDFPrinter();

const computer = new Computer();

computer.setPrinter(laserPrinter)
computer.printDocument(doc);  

computer.setPrinter(inkjetPrinter);
computer.printDocument(doc);

computer.setPrinter(pdfPrinter);
computer.printDocument(doc);
