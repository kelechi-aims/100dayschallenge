// Implement Stack using Queues

class MyStack {
    constructor () {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const result = this.queue1.shift();
        while (this.queue2.length) {
            this.queue1.push(this.queue2.shift());
        }
        return result;
    }

    top() {
        return this.queue1[this.queue1.length - 1];
    }

    empty() {
        return this.queue1.length === 0;
    }
}

// Example usage
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());   // return 2
console.log(myStack.pop());   // return 2
console.log(myStack.empty()); // return false