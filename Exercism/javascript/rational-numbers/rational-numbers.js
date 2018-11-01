export class Rational {
    constructor(input1, input2) {
        this.numerator = input1;
        this.denominator = input2;
    }

    add(input) {
        return this.calculation(input, 'plus');
    }
    sub(input) {
        return this.calculation(input, 'minus');
    }
    mul(input) {
        return this.calculation(input, 'multiply');
    }
    div(input) {
        return this.calculation(input, 'divide');
    }
    calculation(input, sign) {
        let numerator;
        if (sign == 'plus') {
            numerator = this.numerator * input.denominator + input.numerator * this.denominator
        }
        if (sign == 'minus') {
            numerator = this.numerator * input.denominator - input.numerator * this.denominator
        }
        if (sign == 'multiply' || sign == 'divide') {
            if (sign == 'divide') {
                const temp = input.numerator;
                input.numerator = input.denominator;
                input.denominator = temp;
            }
            numerator = this.numerator * input.numerator;
        }
        let denominator = this.denominator * input.denominator;
        return this.reduce(new Rational(numerator, denominator));
    }
    exprational(input) {
        return new Rational(Math.pow(this.numerator, input), Math.pow(this.denominator, input));
    }
    expreal(input) {
        return 10 ** Math.log10(input ** (this.numerator /this.denominator));
    }
    abs() {
        return new Rational(Math.abs(this.numerator),Math.abs(this.denominator));
    }
    reduce(input) {
        if (!input) {
            input = new Object;
            input.numerator = this.numerator;
            input.denominator = this.denominator;
        }
        if (input.denominator < 0) {
            input.numerator *= -1;
            input.denominator *= -1;
        }
        for (let i = 2; i <= Math.abs(input.numerator) && i <= input.denominator; i++) {
            if (input.numerator % i === 0 && input.denominator % i === 0) {
                input.numerator /= i;
                input.denominator /= i;
                i = 2;
            }
        } return (input.numerator === 0) ?
        new Rational(0, 1) :
        new Rational(input.numerator, input.denominator);
    }
}