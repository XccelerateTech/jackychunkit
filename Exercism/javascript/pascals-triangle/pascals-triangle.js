export default class Triangle {
    constructor(input) {
        this.rows = Pascal(input);
        this.lastRow = LastPascal(input);
    }
}

const Pascal = input => {
  const output = [[1]];
  let row = [1];
  let prevRow = [];
  for (var i = 1; i < input; i++) {
    row = [1];
    for (var j = 1; j < i ; j++) {
      row[j] = prevRow[j-1] + prevRow[j];
    } row.push(1);
    output.push(row);
    prevRow = row;
  } return output;
}

const LastPascal = input => {
    const pascal = Pascal(input);
    return pascal[pascal.length - 1];
}

