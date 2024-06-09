/**
 * Association 관계
 * - 연관 관계는 어떤 객체 A가 어떤 객체 B의 참조를 가지고 있는 관계를 나타낸다.
 * - 책이 있다면 책을 쓴 저자가 있을 것이다.
 * - 이런 관계를 연관 관계라고 한다.
 * - 책은 작가가 죽은 후에도 사라지지 않는다.
 * - 즉, 연관 관계에 있는 객체들은 서로의 수명을 관리하지 않는다.
 * - 연관 관계에는
 * - self-to-self, one-to-one, one-to-many, many-to-many 관계가 있다.
 */
class Author {
    constructor(name) {
        this.name = name;
        // Author와 연관된 Book 인스턴스 참조를 담는다.
        this.books = [];
    }

    writeBook(title) {
        const book = new Book(title, this);
        this.books.push(book);
        return book;
    }

    listBooks() {
        return this.books.map(book => book.title);
    }
}

class Book {
    constructor(title, author) {
        this.title = title;
        // Book 은 작가와 연관 관계에 있다.
        this.author = author; 
    }

    getAuthorName() {
        return this.author.name;
    }
}

const author = new Author('박경리');
const book = author.writeBook('토지');

console.log(book.getAuthorName()); 
console.log(author.listBooks());
