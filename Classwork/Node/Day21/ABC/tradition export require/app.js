const something = require('./A/1.js');
const nothing = require('./A/2.js');
const getArea = require('./B/1.js');
const getText = require('./C/3.js');

console.log(something, nothing)
console.log(getArea(3,4))
console.log(getText(3))