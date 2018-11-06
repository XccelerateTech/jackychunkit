export default class Binary {
    constructor(input) {
        (input.match(/^[0|1]*$/g)) ?
            this.binary = input :
            this.binary = 0;
    }
    toDecimal() {
        let output = 0;
        for (let i = 0; i < this.binary.length; i++) {
            if (this.binary.charAt(this.binary.length - i - 1) == '1') output += Math.pow(2,i)
        } return output;
    }
}