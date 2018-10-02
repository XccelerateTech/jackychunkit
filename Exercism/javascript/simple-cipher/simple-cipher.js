var Cipher = function(key) {
    //declare a regular expression that matches string
    // containing only lowercase characters
    var regex = new RegExp("^[a-z]+$")
    //throw an error if
    //1.key is empty or
    //2.key doesn't match all lowercase
    if (!(key == null || (regex).test(key))) {
        throw new Error ('Bad key');
    } else if (key == null) {
        //generate a key if a key is not provided
        this.key = GenerateKey();
    } else {
        //log the key if a key is provided
        this.key = key;
    }
}

//construct function encode()
Cipher.prototype.encode = function(input) {
    var key = this.key;
    var input = input;
    var output = '';
    //extend the key if the key length is shorter than the input length
    while (key.length < input.length) {
        key = key + key;
    }
    //loop through the each character of the input to be encoded by the corresponding key
    //charCode of 'a' is 97 and 'z' is 122 so basically treating alphabets as numbers with base-26
    for (i = 0; i < input.length;  i++) {
        if(input.charCodeAt(i) + key.charCodeAt(i) > 219) {
            output = output + (String.fromCharCode(input.charCodeAt(i) + key.charCodeAt(i) - 123));
    		} else {
			output = output + (String.fromCharCode(input.charCodeAt(i) + key.charCodeAt(i) - 97));
            }
        } return output;
    } 

//decode() is basically a reverse of encoding, just mathmatically reverse the result
Cipher.prototype.decode = function(input) {
    var key = this.key;
    var input = input;
    var output = '';
    for (i = 0; i < input.length;  i++) {
        if(input.charCodeAt(i) - key.charCodeAt(i) < 0) {
            output = output + (String.fromCharCode(input.charCodeAt(i) - key.charCodeAt(i) + 123));
    		} else {
			output = output + (String.fromCharCode(input.charCodeAt(i) - key.charCodeAt(i) + 97));
            }
        } return output;
    } 

//generate randomkey
function GenerateKey() {
    var key = '';
    //generate a 100 characters long key
    for (var i = 0; i < 100; i++) {
        //Math.random() returns a random value and is then multiplied by 26
        //to get a random number from 26 numbers within 0 to 25
        //is then rounded to an integer and plus 97
        //as mention CharCode 'a' is 97 while 'z' is 122 
        key = key + String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97);
    } return key;
}

module.exports = Cipher;