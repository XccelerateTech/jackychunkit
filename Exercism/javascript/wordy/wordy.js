    var WordProblem = function(input) {
        this.input = input;
    }

    WordProblem.prototype.answer = function() {
    //removing the last ? sign from the string for splitting
    var input = this.input.replace('?','');
    //splitting the string into ["What","is",number,'operator',number]
    var splitted = input.split(' ');
    var Num1 = '';
    var operator = '';
    /*
    Test for the input format, if it doesn't match, throw an Error
    first test: if the first two words are 'What' 'is'
    second test: if the word is an number, if it is integer, skip the rest of the test
    third test: else if test from the second test, if 2 consecutive word, throws an error;
    forth test: if the word is not an number, check if it is 'plus or minus', addition statement to make a number follows after, otherwise throws an error  
    fifth test: if the word is not an number, 'plus' or 'minus', check if it is 'divided by' or 'multiplied by'
    sixth test: if the word is 'by', and make sure 'multiplied' or 'divivded' is in front, addition statement to make a number follows after, otherwise throws an error  
    If none of the above test passed, throw an Error
    */
    //first test
    if (splitted[0] == 'What' && splitted[1] == 'is') {
        for(var i = 2; i < splitted.length ; i++ ) {
            //second test
            if (isNaN(parseInt(splitted[i])))  {
                    //forth test
                    if(!(splitted[i] == 'plus' || splitted[i] == 'minus' && (!(isNaN(parseInt(splitted[i+1])))))) {
                        //fifth test
                        if (!(splitted[i] == 'divided'|| splitted[i] == 'multiplied' && splitted[i+1] == 'by')) {
                            //sixth test
                            if (!(splitted[i-1] == 'divided'|| splitted[i-1] == 'multiplied' && splitted[i] == 'by' && (!(isNaN(parseInt(splitted[i+1])))))) {
                                throw new ArgumentError();
                            } 
                        }
                    }
                //third test
            } else if (!(isNaN(parseInt(splitted[i+1])))) { 
                throw new ArgumentError();
            }
        }
    } else {
        throw new ArgumentError();
    }
    //loops through the each item of the array for matching
    for (var i = 0; i < splitted.length ; i++ ) {
        /* if "var a" is a number and if Num1 is empty,
        store the number to "Num1"
        otherwise if "var a" but "Num1" has already stored a number 
        do the mathematics operation and record the Number to "Num1" */
        if (!(isNaN(parseInt(splitted[i]))) && Num1 === "") {
                Num1 = splitted[i];
            } else if (!(isNaN(parseInt(splitted[i])))) {
                /*do mathematical operation according to their
                operation tag + - * /
                adding parseInt() Method to "Num1" to make sure 
                it is doing mathmatical operation instead
                of string addition; */
                switch(splitted[i-1]) {
                    case 'plus':
                    Num1 = parseInt(Num1) + parseInt(splitted[i]);
                    break;
                    case 'minus':
                    Num1 = parseInt(Num1) - parseInt(splitted[i]);
                    break;
                    //splitted[i-1] cannot be 'multiplied' or 'divided' due to 'multplied by' and 'divided by'
                    //the condition takes 'by' and then look for [i-2] for going into either 'multiplied' or 'divided'
                    case 'by':
                    (splitted[i-2] == 'multiplied') ?
                    Num1 = parseInt(Num1) * parseInt(splitted[i]):
                    Num1 = parseInt(Num1) / parseInt(splitted[i]);
                    break;
                }
            }
        }
        //after looping through the entire array, return the result Num1;
        return Num1;
    }

    var ArgumentError = function() {}

module.exports = { 
    WordProblem : WordProblem, 
    ArgumentError : ArgumentError,
}
    