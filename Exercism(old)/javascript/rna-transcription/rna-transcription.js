var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        switch(input.charAt(i)) {
            case 'C':
            output = output + 'G';
            break;
            case 'G':
            output = output + 'C';
            break;
            case 'A':
            output = output + 'U';
            break;
            case 'T':
            output = output + 'A';
            break;
            default:
            throw new Error('Invalid input');
        }
    } return output;
}

module.exports = DnaTranscriber;

