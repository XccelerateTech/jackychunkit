var Bob = function(input) {
    this.input = input;
}

Bob.prototype.hey = function(input) {

    switch (true) {
        case /^(\s*|\0*)$/.test(input):
        return 'Fine. Be that way!';
        case /^[A-Z]+[^a-z]*\? *$/.test(input):
        return "Calm down, I know what I'm doing!";
        case /^.*\? *$/.test(input):
        return 'Sure.';
        case /^[^a-z]*[A-Z]*$/.test(input):
        return (/[A-Z]/.test(input)) ? "Whoa, chill out!" : "Whatever.";
        default:
        return 'Whatever.';
    }
}

module.exports = Bob;