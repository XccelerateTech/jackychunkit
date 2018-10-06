// var Matrix = (input) {
//     this.input = input;
// }

class Matrix {
  constructor(input) {
    this.input = input;
    this.rows = MatrixByRow(this.input);
    this.columns = MatrixByColumn(this.input);
  }
}


function MatrixByRow(input) {
  var input = input.split('\n');
  var Matrix = new Array;
  var MatrixRow = new Array;
  for (var row = 0; row < input.length; row++) {
    MatrixRow = input[row].split(" ");
    MatrixRow = MatrixRow.map(x => parseInt(x));
    Matrix.push(MatrixRow);
  } return Matrix;
}

function MatrixByColumn(input) {
  var input = MatrixByRow(input);
  var Matrix = new Array;
  var MatrixRow = new Array;
  for (var columns = 0; columns < input[0].length; columns++) {
    MatrixRow = []
    Matrix.push(MatrixRow)
    for (var row = 0; row < input.length; row++) {
      MatrixRow.push(input[row][columns]);
    }
  } return Matrix;
}
module.exports = Matrix;