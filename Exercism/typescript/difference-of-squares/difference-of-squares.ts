export default class Sqaures {
    naturalNumber: number = 0;
    squareOfSum: number = 0;
    sumOfSquares: number = 0;
    difference: number = 0;
    constructor(input: number) {
        this.naturalNumber = input;
        this.squareOfSum = Math.pow(((1 + this.naturalNumber) * this.naturalNumber / 2), 2);
        for (let i:number = 0; i <= this.naturalNumber; i++) {
            this.sumOfSquares += i * i;
        }
        this.difference = this.squareOfSum - this.sumOfSquares;
    }
}