export const primeFactors = input => {
    let output = [];
    for (let i = 2; i <= input; i++) {
        if (input % i === 0) {
            output.push(i);
            input /= i;
            i = 1;
        }
    } return output;
}
