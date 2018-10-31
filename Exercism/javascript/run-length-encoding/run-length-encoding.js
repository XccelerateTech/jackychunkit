export const encode = input => {
    let output = input[0] || '';
    let repeatIndex = 1;
    for (let i = 1; i < input.length; i++) {
        if (input[i - 1] === input[i]) {
            repeatIndex++;
            output = output.substring(0, output.length - Math.min(repeatIndex - 1, (repeatIndex - 1).toString().length + 1)) + repeatIndex + input[i];
        } else {
            repeatIndex = 1;
            output += input[i];
        }

    } return output;
}
export const decode = input => {
    let output = '';
    let number = '';
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(parseInt(input[i]))) {
            number += input[i];
        } else {
            let repeatIndex = parseInt(number);
            while (repeatIndex - 1) {
                repeatIndex--;
                output += input[i];
            }
            output += input[i];
            number = '';
        }
    } return output;
}