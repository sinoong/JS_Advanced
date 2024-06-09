/**
 * Dependency 또는 using 관계
 */
class Document {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

class DocumentPrinter {
    print(document) {
        if (!(document instanceof Document)) {
            throw new Error('Document 를 제공해 주세요.');
        }
        console.log(`문서를 인쇄합니다.: ${document.getContent()}`);
    }
}

const doc = new Document('어느 멋진 날이었다.');
const printer = new DocumentPrinter();

// printer가 print 메서드를 실행하기 위해서는 
// doc이 필요하다.
printer.print(doc); 
