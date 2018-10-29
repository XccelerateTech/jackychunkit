const random = require('./1.js');
const numToChar = () => {
    return String.fromCharCode(random() + 96);
}
module.exports = numToChar;