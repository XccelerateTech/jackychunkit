export default class Sqaures {
    private naturalNumber: number = 0;
    public squareOfSum: number = 0;
    public sumOfSquares: number = 0;
    public difference: number = 0;
    constructor(input: number) {
        this.naturalNumber = input;
        this.squareOfSum = Math.pow(((1 + this.naturalNumber) * this.naturalNumber / 2), 2);
        for (let i:number = 0; i <= this.naturalNumber; i++) {
            this.sumOfSquares += i * i;
        }
        this.difference = this.squareOfSum - this.sumOfSquares;
    }
}