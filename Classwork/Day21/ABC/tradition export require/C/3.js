const char = require('./2.js');
const text = (length) => {
    let output = '';
    if (typeof length == 'number') {
        while (length) {
            length--;
            output = output + char();
        }
    } else {
        throw 'Input should be a number';
    } return output;
}
module.exports = text;