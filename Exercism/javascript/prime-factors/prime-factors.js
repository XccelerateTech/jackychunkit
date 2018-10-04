var primeFactors = {
    for: function(input) {
        var output = [];
        for (var i = 2; i <= input; i++) {
            if (input % i === 0) {
                output.push(i);
                input /= i;
                i = 1;
            }
        } return output;
    }
}  
module.exports = primeFactors;