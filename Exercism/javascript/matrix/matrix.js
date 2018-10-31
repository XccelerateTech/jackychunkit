export default class Matrix {
    constructor(input) {
        this.rows = matrixByRow(input);
        this.columns = matrixByColumn(input);
    }
}

const matrixByRow = input => {
    input = input.split('\n');
    const matrix = [];
    let matrixRow = [];
    for (var row = 0; row < input.length; row++) {
        matrixRow = input[row].split(" ");
        matrixRow = matrixRow.map(x => parseInt(x));
        matrix.push(matrixRow);
    } return matrix;
}

const matrixByColumn = input => {
    input = matrixByRow(input);
    const matrix = [];
    for (var columns = 0; columns < input[0].length; columns++) {
        let matrixRow = [];
        matrix.push(matrixRow)
        for (var row = 0; row < input.length; row++) {
            matrixRow.push(input[row][columns]);
        }
    } return matrix;
}