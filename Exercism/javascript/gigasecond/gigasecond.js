var Gigasecond = function(input) {
    this.input = input;
}

Gigasecond.prototype.date = function() {
    return new Date(this.input.valueOf() + 1000000000000);
}

module.exports = Gigasecond;