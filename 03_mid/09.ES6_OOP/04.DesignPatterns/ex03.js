/**
 * Builder Pattern
 * - 빌더 패턴은 복잡한 객체를 만들 때, 나누어서 부분별로 생성할 수 있게 도와주는 패턴
 * - 예를 들어, HTML 엘리먼트를 위한 CSS Style 객체는 다양한 속성을 가지고 있어
 * - 하나의 메서드에서 모두 생성하기가 복잡하다. 그리고 모든 스타일 속성이 필수로 필요한 것도 아니다.
 * - 이럴 때, Style 객체를 만드는 Builder를 정의하여 Style 객체를 부분별로 만들 수 있게
 * - 하면 편리하다.
 */
class Style {
    constructor(builder) {
        this.color = builder.color;
        this.fontSize = builder.fontSize;
        this.margin = builder.margin;
        this.padding = builder.padding;
        this.border = builder.border;
    }

    applyToElement(element) {
        if (this.color) element.style.color = this.color;
        if (this.fontSize) element.style.fontSize = this.fontSize;
        if (this.margin) element.style.margin = this.margin;
        if (this.padding) element.style.padding = this.padding;
        if (this.border) element.style.border = this.border;
    }
}

class StyleBuilder {
    setColor(value) {
        this.color = value;
        return this;
    }

    setFontSize(value) {
        this.fontSize = value;
        return this;
    }

    setMargin(value) {
        this.margin = value;
        return this;
    }

    setPadding(value) {
        this.padding = value;
        return this;
    }

    setBorder(value) {
        this.border = value;
        return this;
    }

    build() {
        return new Style(this);
    }
}

const buttonStyle = new StyleBuilder()
    .setColor('blue')
    .setFontSize('16px')
    .setPadding('10px 20px')
    .setBorder('1px solid black')
    .build();

const button = document.createElement('button');
button.textContent = 'Click Me';
buttonStyle.applyToElement(button);

document.body.appendChild(button);