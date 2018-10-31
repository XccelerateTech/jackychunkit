var Year = function(input) {
    this.input = input;
}

Year.prototype.isLeap = function() {
    return (this.input % 4 == 0 && !(this.input % 400 == 0 ^ this.input % 100 == 0)) ? true : false;
}

module.exports = Year;

