export default class List {
    constructor(input) {
        if (typeof input == 'undefined') {
            this.values = [];
        } else {
            this.values = input;
        }
    }
    length() {
        let length = 0;
        for (let i = 0; this.values[i]; i++) {
            length++;
        }
        return length;
    }
    append(input) {
        this.values = [...this.values, ...input.values]
        return this;
    }
    concat(input) {
        return this.append(input);
    }
    filter(input) {
        var output = [];
        for (var i = 0; i < this.length(); i++) {
            if (input(this.values[i])) {
                output = [...output,this.values[i]]
            }
        } return new List(output);
    }
    map(operation) {
        var output = [];
        for (var i = 0; i < this.length(); i++) {
            output = [...output,(operation(this.values[i]))];
        }
        this.values = output;
        return this;
    }
    foldl(operation, value) {
        var accumulatedValue = value;
        for (var i = 0; i < this.length(); i++) {
            accumulatedValue = operation(accumulatedValue, this.values[i]);
        } return accumulatedValue;
    }
    foldr(operation, value) {
        return this.reverse().foldl(operation, value);
    }
    reverse() {
        var output = [];
        for (var i = 0; i < this.length(); i++) {
            output = [this.values[i], ...output];
        } return new List(output);
    }
}
