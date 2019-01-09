import {num2Char} from './C/2.mjs';
const text = (length) => {
    let output = '';
    if (typeof length == 'number') {
        while (length) {
            length--;
            output = output + num2Char;
        }
    } else {
        throw 'Input should be a number';
    } return output;
}
export {text};