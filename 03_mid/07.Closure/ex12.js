/**
 * 클로저 사용 예
 * - Stack
 */
function newStack() {
    // privte
    const stack = [];

    return {
        push: function (item) { 
            stack.push(item);
        },
        pop: function () { 
            stack.pop(); 
        },
        peek: function() {
            return stack.length > 0 ? stack[stack.length - 1] : null;
        },
        isEmpty: function () {
            return stack.length === 0;
        }
    }
}

// LIFO
const stack = newStack();
stack.push(1);
stack.push(2);
stack.push(3);

while (!stack.isEmpty()) {
    console.log(stack.pop());
}