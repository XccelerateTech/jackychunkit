class List {
  constructor(input) {
    if (typeof input == 'undefined') {
      this.values = [];
    } else {
      this.values = input;
    }
  }
  length() {
    return this.values.length;
  }
  append(input) {
    var output = this.values;
    for (var i = 0; i < input.values.length; i++ ) {
      output.push(input.values[i])
    }
    this.values = output;
    return this;
    return new List(output);
  }
  concat(input) {
    return this.append(input);
  }
  filter(input) {
    var output = new Array;
    for (var i = 0; i < this.values.length; i++) {
      if(input(this.values[i])) {
        output.push(this.values[i])
      }
    }
    this.values = output;
    return this;
    return new List(output);
  }
  map(operation) {
    var output = new Array;
    for (var i = 0; i < this.values.length; i++) {
        output.push(operation(this.values[i]));
    }
    return new List(output);
  }
  foldl(operation, value) {
    var accumulatedValue = value;
    for (var i = 0; i < this.values.length; i++) {
      accumulatedValue = operation(this.values[i], accumulatedValue);
    }
    return accumulatedValue;
  }
  foldr(operation, value) {
    return this.reverse().foldl(operation, value);
  }
  reverse() {
    var output = new Array;
    for (var i = 0; i < this.values.length; i++) {
      output.unshift(this.values[i]);
    }
    return new List(output);
  }
}

module.exports = List;
