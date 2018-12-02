// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = []
    }

    isEmpty() {
        return this.data.length === 0;
    }

    add(item) {
        this.data.push(item);
    }

    remove() {
        if (this.isEmpty()) {
            return;
        }
        return this.data.shift();
    }

    front() {
        if (this.isEmpty()) {
            return;
        }

        return this.data[0];
    }

    printQueue() {
        return this.data.reduce((str, item) => str + " " + item, "");
    }
}

module.exports = Queue;
