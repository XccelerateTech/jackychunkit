const letterShift = (input) => {
    let output = "";
    for (i = 0; i < input.length;  i++) {
        if(input.charCodeAt(i) + 10 <= 122) {
            output = output + (String.fromCharCode(input.charCodeAt(i)  + 10));
        } else {
            output = output + (String.fromCharCode(input.charCodeAt(i)  + 10 - 26));
        }
    } return output;
}

letterShift('dog'); //nyq