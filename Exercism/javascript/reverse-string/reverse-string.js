function reverseString(input) {
    var output = new String;
    for(var i = 0; i < input.length + 1; i++) {
        output = output + input.charAt(input.length - i);
    } return output;
}

module.exports = reverseString;
