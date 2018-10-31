export default class LinkedList {
    constructor() {
        this.array = []
    }
    push(input) {
        this.array.push(input);
        return this.array;
    }
    pop() {
        return this.array.pop();
    }
    unshift(input) {
        this.array.unshift(input);
        return this.array;
    }
    shift() {
        return this.array.shift();
    }
    count() {
        return this.array.length;
    }
    delete(input) {
        if ((this.array.indexOf(input)) >= 0)
        return this.array.splice(this.array.indexOf(input), 1);
    }
}