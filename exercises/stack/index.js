// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {

    constructor() {
        this.data = []
    }

    push(item) {
        this.data.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    printStack() {
        return this.data.reduce((str, item) => str + " " + item, "");
    }
}

module.exports = Stack;
