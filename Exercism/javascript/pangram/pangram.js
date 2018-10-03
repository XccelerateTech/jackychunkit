var Pangram = function(input) {
    this.input = input;
}

Pangram.prototype.isPangram = function() {
    return (this.input.match(/A|a/) && this.input.match(/B|b/) && this.input.match(/C|c/) && this.input.match(/D|d/) && this.input.match(/E|e/) && this.input.match(/F|f/) && this.input.match(/G|g/) && this.input.match(/H|h/) &&  this.input.match(/I|i/) && this.input.match(/J|j/) && this.input.match(/K|k/) && this.input.match(/L|l/) && this.input.match(/M|m/) && this.input.match(/N|n/) && this.input.match(/O|o/) && this.input.match(/P|p/) && this.input.match(/Q|q/) && this.input.match(/R|r/) && this.input.match(/S|s/) && this.input.match(/T|t/) && this.input.match(/U|u/) && this.input.match(/V|v/) && this.input.match(/W|w/) && this.input.match(/X|x/) && this.input.match(/Y|y/) && this.input.match(/Z|z/)) ? true : false;
}

module.exports = Pangram;