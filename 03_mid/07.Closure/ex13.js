/**
 * 클로저 사용 예
 * - Queue
 */
function newQueue() {
    // privte
    const queue = [];

    return {
        enqueue: function (item) { 
            queue.push(item); 
        },
        dequeue: function () { 
            queue.shift();
        },
        peek: function () {
            return queue.length > 0 ? queue[queue.length - 1] : null;
        },
        isEmpty: function () {
            return queue.length === 0;
        }
    }
}

// FIFO
const queue = newQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}