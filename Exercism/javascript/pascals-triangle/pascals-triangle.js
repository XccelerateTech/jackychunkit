class Triangle {
    constructor(input) {
        this.input = input;
        this.rows = Pascal(this.input);
        this.lastRow = LastPascal(this.input);
    }
}

function Pascal(input) {
  var output = [[1]];
  var row = [1];
  var prevRow = [];
  for (var i = 1; i < input; i++) {
    row = [1];
    for (var j = 1; j < i ; j++) {
      row[j] = prevRow[j-1] + prevRow[j];
    } row.push(1);
    output.push(row);
    prevRow = row;
  } return output;
}

function LastPascal(input) {
    var pascal = Pascal(input);
    return pascal[pascal.length - 1];
}

module.exports = Triangle;
