const RotationalCipher = {
    rotate(string, index) {
        let output = '';
        for (let i = 0; i < string.length; i++) {
            var charcode = string.charCodeAt(i);
            if (charcode >= 65 && charcode <= 90) {
                (charcode + index > 90) ?
                output += String.fromCharCode(charcode + index - 26):
                output += String.fromCharCode(charcode + index);
            } else if (charcode >= 97 && charcode <= 122) {
                (charcode + index > 122) ?
                output += String.fromCharCode(charcode + index - 26):
                output += String.fromCharCode(charcode + index);
            } else {
                output += string[i];
            }
        } return output;
    }
}
export default RotationalCipher;