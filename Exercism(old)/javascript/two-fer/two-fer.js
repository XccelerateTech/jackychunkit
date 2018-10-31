var TwoFer = function() {};

TwoFer.prototype.twoFer = function(input) {
    if(typeof input === 'undefined') {
    return 'One for you, one for me.';
    } else {
        return 'One for ' + input + ', one for me.';
    }
};

module.exports = TwoFer;