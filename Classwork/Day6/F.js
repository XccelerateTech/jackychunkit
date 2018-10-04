const transform = (input) => {
    input = input.toString(); //turn typeof input from number to String
    input = input.split('') //split() only works for String
    input = input.sort(); 
    let output = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i].charCodeAt(0) + 48 === 96) {
            output = output + 'j'
        } else {
            output = output + (String.fromCharCode(input[i].charCodeAt(0) + 48));
        }
    }
}

transform('213') //abc