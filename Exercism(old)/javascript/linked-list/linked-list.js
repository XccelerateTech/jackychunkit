class LinkedList {
    constructor(input) {
        this.array = []
        this.input = input;
    }
}

LinkedList.prototype.push = function(input) {
    this.array.push(input);
    return this.array;
}

LinkedList.prototype.pop = function() {
    return this.array.pop();
}


LinkedList.prototype.unshift = function(input) {
    this.array.unshift(input);
    return this.array;
}

LinkedList.prototype.shift = function() {
    return this.array.shift();
}

LinkedList.prototype.count = function() {
    return this.array.length;
}

LinkedList.prototype.delete = function(input) {
    return this.array.splice(this.array.indexOf(input), 1 );
}

module.exports = LinkedList;